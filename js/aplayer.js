// source/js/aplayer.js
const ap = new APlayer({
  container: document.getElementById("aplayer"),
  fixed: true,
  autoplay: false,
  loop: "all",
  order: "random",
  lrcType: 3,
  audio: [
    {title:"Minecraft",author:"C418",url:"http://music.163.com/song/media/outer/url?id=4010201.mp3",cover:"https://cdn.osyb.cn/gh/minecraftyunyao/haojiongblog-ziyuan/yintu/minecraft.webp",lrc:"https://cdn.osyb.cn/gh/minecraftyunyao/haojiongblog-ziyuan/yinci/minecraft.lrc"},
    {title:"Alpha",author:"C418",url:"http://music.163.com/song/media/outer/url?id=27961148.mp3",cover:"https://cdn.osyb.cn/gh/minecraftyunyao/haojiongblog-ziyuan/yintu/alpha.webp",lrc:"https://cdn.osyb.cn/gh/minecraftyunyao/haojiongblog-ziyuan/yinci/alpha.lrc"},
    {title:"Alpha",author:"C418",url:"http://music.163.com/song/media/outer/url?id=27961148.mp3",cover:"http://p1.music.126.net/rQGsZnG75FBRCX9v6dZf_g==/18252992533044792.jpg"}
    // 在这里无限加歌，底部代码永远不变！
  ]
});
ap.init();