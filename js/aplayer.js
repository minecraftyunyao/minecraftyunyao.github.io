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
    {title:"Alpha",author:"C418",url:"http://music.163.com/song/media/outer/url?id=27961148.mp3",cover:"https://cdn.osyb.cn/gh/minecraftyunyao/haojiongblog-ziyuan/yintu/minecraft.webp",lrc:"https://cdn.osyb.cn/gh/minecraftyunyao/haojiongblog-ziyuan/yinci/minecraft.lrc"},
    {title:"Wet Hands",author:"C418",url:"http://music.163.com/song/media/outer/url?id=4010213.mp3",cover:"https://cdn.osyb.cn/gh/minecraftyunyao/haojiongblog-ziyuan/yintu/minecraft.webp",lrc:"https://cdn.osyb.cn/gh/minecraftyunyao/haojiongblog-ziyuan/yinci/minecraft.lrc"},
    {title:"Sweden",author:"C418",url:"http://music.163.com/song/media/outer/url?id=4010229.mp3",cover:"https://cdn.osyb.cn/gh/minecraftyunyao/haojiongblog-ziyuan/yintu/minecraft.webp",lrc:"https://cdn.osyb.cn/gh/minecraftyunyao/haojiongblog-ziyuan/yinci/minecraft.lrc"},
    {title:"Subwoofer Lullaby",author:"C418",url:"http://music.163.com/song/media/outer/url?id=4010187.mp3",cover:"https://cdn.osyb.cn/gh/minecraftyunyao/haojiongblog-ziyuan/yintu/minecraft.webp",lrc:"https://cdn.osyb.cn/gh/minecraftyunyao/haojiongblog-ziyuan/yinci/minecraft.lrc"},
    {title:"Moog City 2",author:"C418",url:"http://music.163.com/song/media/outer/url?id=27961152.mp3",cover:"https://cdn.osyb.cn/gh/minecraftyunyao/haojiongblog-ziyuan/yintu/minecraft.webp",lrc:"https://cdn.osyb.cn/gh/minecraftyunyao/haojiongblog-ziyuan/yinci/minecraft.lrc"},
    {title:"Living Mice",author:"C418",url:"http://music.163.com/song/media/outer/url?id=4010192.mp3",cover:"https://cdn.osyb.cn/gh/minecraftyunyao/haojiongblog-ziyuan/yintu/minecraft.webp",lrc:"https://cdn.osyb.cn/gh/minecraftyunyao/haojiongblog-ziyuan/yinci/minecraft.lrc"},
    {title:"Clark",author:"C418",url:"http://music.163.com/song/media/outer/url?id=4010216.mp3",cover:"https://cdn.osyb.cn/gh/minecraftyunyao/haojiongblog-ziyuan/yintu/minecraft.webp",lrc:"https://cdn.osyb.cn/gh/minecraftyunyao/haojiongblog-ziyuan/yinci/minecraft.lrc"},
    {title:"Haggstrom",author:"C418",url:"http://music.163.com/song/media/outer/url?id=4010198.mp3",cover:"https://cdn.osyb.cn/gh/minecraftyunyao/haojiongblog-ziyuan/yintu/minecraft.webp",lrc:"https://cdn.osyb.cn/gh/minecraftyunyao/haojiongblog-ziyuan/yinci/minecraft.lrc"},
    {title:"Mutation",author:"C418",url:"http://music.163.com/song/media/outer/url?id=27961155.mp3",cover:"https://cdn.osyb.cn/gh/minecraftyunyao/haojiongblog-ziyuan/yintu/minecraft.webp",lrc:"https://cdn.osyb.cn/gh/minecraftyunyao/haojiongblog-ziyuan/yinci/minecraft.lrc"},
    {title:"Wanderstop",author:"C418",url:"http://music.163.com/song/media/outer/url?id=2653695328.mp3",cover:"https://cdn.osyb.cn/gh/minecraftyunyao/haojiongblog-ziyuan/yintu/minecraft.webp",lrc:"https://cdn.osyb.cn/gh/minecraftyunyao/haojiongblog-ziyuan/yinci/minecraft.lrc"},
    {title:"Mice on Venus",author:"C418",url:"http://music.163.com/song/media/outer/url?id=4010207.mp3",cover:"https://cdn.osyb.cn/gh/minecraftyunyao/haojiongblog-ziyuan/yintu/minecraft.webp",lrc:"https://cdn.osyb.cn/gh/minecraftyunyao/haojiongblog-ziyuan/yinci/minecraft.lrc"},
    {title:"Night Crusing (Inst.)",author:"牛尾憲輔 (agraph)",url:"http://music.163.com/song/media/outer/url?id=1958871157.mp3",cover:"https://cdn.osyb.cn/gh/minecraftyunyao/haojiongblog-ziyuan/yintu/nightcrusing.webp",lrc:"https://cdn.osyb.cn/gh/minecraftyunyao/haojiongblog-ziyuan/yinci/nightcrusing.lrc"},
    {title:"Take Me Hand",author:"DAISHI DANCE/Cécile Corbel",url:"https://cdn.osyb.cn/gh/minecraftyunyao/haojiongblog-ziyuan/music/takemehand.mp3",cover:"https://cdn.osyb.cn/gh/minecraftyunyao/haojiongblog-ziyuan/yintu/takemehand.webp",lrc:"https://cdn.osyb.cn/gh/minecraftyunyao/haojiongblog-ziyuan/yinci/takemehand.lrc"},
    {title:"Creeper?",author:"captainsparklez",url:"http://music.163.com/song/media/outer/url?id=29819906.mp3",cover:"https://cdn.osyb.cn/gh/minecraftyunyao/haojiongblog-ziyuan/yintu/minecraft.webp",lrc:"https://cdn.osyb.cn/gh/minecraftyunyao/haojiongblog-ziyuan/yinci/Creeper.lrc"},
    {title:"Mine (Illenium Remix)",author:"ILLENIUM,Phoebe Ryan",url:"http://music.163.com/song/media/outer/url?id=30780496.mp3",cover:"https://cdn.osyb.cn/gh/minecraftyunyao/haojiongblog-ziyuan/yintu/mine.webp",lrc:"https://cdn.osyb.cn/gh/minecraftyunyao/haojiongblog-ziyuan/yinci/mine.lrc"},
    {title:"This Is What You Came For",author:"Calvin Harris/Rihanna",url:"https://cdn.osyb.cn/gh/minecraftyunyao/haojiongblog-ziyuan/music/thisiswhatyoucamefor.mp3",cover:"https://cdn.osyb.cn/gh/minecraftyunyao/haojiongblog-ziyuan/yintu/thisiswhatyoucamefor.webp",lrc:"https://cdn.osyb.cn/gh/minecraftyunyao/haojiongblog-ziyuan/yinci/thisiswhatyoucamefor.lrc"},
    {title:"Alone",author:"Rentz",url:"https://cdn.osyb.cn/gh/minecraftyunyao/haojiongblog-ziyuan/music/alone.mp3",cover:"https://cdn.osyb.cn/gh/minecraftyunyao/haojiongblog-ziyuan/yintu/alone.webp",lrc:"https://cdn.osyb.cn/gh/minecraftyunyao/haojiongblog-ziyuan/yinci/alone.lrc"}
    // 在这里无限加歌，底部代码永远不变！
  ]
});
ap.init();