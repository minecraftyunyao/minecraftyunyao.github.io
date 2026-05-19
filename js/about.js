// 初始化页面
document.addEventListener('DOMContentLoaded', () => {
  initParticles();   // MC红石粒子
  initTypewriter();  // 打字机效果
});

// 1. MC 红石方块粒子特效
function initParticles() {
  if (window.particlesJS) {
    particlesJS("about-page", {
      particles: {
        number: { value: 40 },
        color: { value: "#C81616" },
        shape: { type: "square" },
        size: { value: 3, random: true },
        move: { enable: true, speed: 1, direction: "top" }
      },
      interactivity: { events: { onhover: { enable: false } } }
    });
  }
}

// 2. 打字机效果（循环）
function initTypewriter() {
  const el = document.getElementById('about-typewriter');
  if (!el) return;

  const text = '遇事不决，可问春风';
  let i = 0, deleting = false;
  let timer;

  function tick() {
    el.textContent = text.slice(0, i);
    if (!deleting) {
      i++;
      if (i > text.length) {
        deleting = true;
        timer = setTimeout(tick, 1500);
        return;
      }
      timer = setTimeout(tick, 150);
    } else {
      i--;
      if (i < 0) {
        deleting = false;
        timer = setTimeout(tick, 500);
        return;
      }
      timer = setTimeout(tick, 80);
    }
  }
  tick();
}

// 3. 兼容原版博客 PJAX 加载
const startInit = () => {
  if (typeof btf !== 'undefined') {
    initTypewriter();
    document.addEventListener('pjax:complete', initTypewriter);
  } else {
    setTimeout(startInit, 100);
  }
};
startInit();