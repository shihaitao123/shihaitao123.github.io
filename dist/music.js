const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: true,
    audio: [
      {
        name: '盛夏的果实',
        artist: '莫文蔚',
        url: 'http://www.ytmp3.cn/down/32464.mp3',
        cover: 'http://oeff2vktt.bkt.clouddn.com/image/8.jpg',
      },
      {
        name: '再见',
        artist: '张震岳',
        url: 'http://www.ytmp3.cn/down/52596.mp3',
        cover: 'http://oeff2vktt.bkt.clouddn.com/image/2.jpg',
      },
      {
        name: '阿珍爱上了阿强',
        artist: '五条人',
        url: 'http://up.mcyt.net/?down/46644.mp3',
        cover: 'http://oeff2vktt.bkt.clouddn.com/image/97.jpg',
      },
	  {
        name: '信仰',
        artist: '张信哲',
        url: 'http://www.ytmp3.cn/down/52598.mp3',
        cover: 'http://oeff2vktt.bkt.clouddn.com/image/56.jpg',
      }
    ]
});