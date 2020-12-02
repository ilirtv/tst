function playM3u8(url){
  if(Hls.isSupported()) {
      var video = document.getElementById('video');
      video.volume = 1.0;
      var hls = new Hls();
      var m3u8Url = "http://51.195.88.12:4050/live/klanhdmob/playlist.m3u8"
      hls.loadSource(m3u8Url);
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED,function() {
        video.play();
      });
      document.title = url
    }
}

playM3u8(window.location.href.split("#")[1])