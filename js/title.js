// 动态标题
(function() {
  'use strict';
  
  var originTitle = document.title;      // 自动获取当前页面标题
  var returnDelay = 2000;                // 返回后多长时间恢复原标题
  var titleTimer = null;                 // 定时器变量
  
  // 标题池
  var titles = {
    away: ['', '😭我会想你的~', '⛏️世界没探索完，你却走了૮₍ɵ̷﹏ɵ̷̥̥᷅₎ა', '⛏️别走呀~再看看嘛 ꒦ິ^꒦ິ', '🏠我会等你回来的(*꒦ິ⌓꒦ີ)'],
    back: ['🎉欢迎回来！我等你好久了', '🌌让我们继续探索吧', '🏆获得成就：回归', '']
  };
  
  // 随机获取标题
  function getRandomTitle(type) {
    var titleArray = titles[type];
    return titleArray[Math.floor(Math.random() * titleArray.length)];
  }
  
  // 处理页面可见性变化
  function handleVisibilityChange() {
    // 清理之前的定时器
    if (titleTimer) {
      clearTimeout(titleTimer);
      titleTimer = null;
    }
    
    if (document.hidden) {
      // 页面隐藏时
      document.title = getRandomTitle('away');
    } else {
      // 页面显示时
      document.title = getRandomTitle('back');
      
      // 根据returnDelay恢复原标题
      titleTimer = setTimeout(function() {
        document.title = originTitle;
        titleTimer = null;  // 清理引用
      }, returnDelay);
    }
  }
  
  // 绑定事件
  document.addEventListener('visibilitychange', handleVisibilityChange);
  
  // 页面卸载时清理
  window.addEventListener('beforeunload', function() {
    if (titleTimer) {
      clearTimeout(titleTimer);
    }
  });
  
  // PJAX 支持
  document.addEventListener('pjax:complete', function() {
    originTitle = document.title;  // 更新原始标题
  });
  
})();