interface videoPlayerElements {
    videoPlayer: HTMLVideoElement;
    playButton: HTMLButtonElement;
    stopButton: HTMLButtonElement;
}

interface VideoPlayerProtocol{
    playToggle():void;
    stopToggle():void;
    iniciarEventos():void;
}


export default class VideoPlayer implements VideoPlayerProtocol{
   private videoPlayer: HTMLVideoElement;
   private playButton: HTMLButtonElement;
   private stopButton: HTMLButtonElement;

   constructor(videoPlayerElements: videoPlayerElements){
    this.videoPlayer = videoPlayerElements.videoPlayer
    this.playButton = videoPlayerElements.playButton
    this.stopButton = videoPlayerElements.stopButton
   }

   iniciarEventos():void{
    this.playButton.addEventListener('click', () =>{
        this.playToggle()
    })

    this.stopButton.addEventListener('click', () => {
        this.stopToggle()
    })
 }
    
   playToggle():void{
    if(this.videoPlayer.paused){
        this.videoPlayer.play();
        this.playButton.innerText = 'play'
    }else{
        this.videoPlayer.pause()
        this.playButton.innerText = 'stop'
    }


   }
    stopToggle():void{
        if(this.videoPlayer.autoplay){
            this.videoPlayer.play()
            this.stopButton.innerText = 'parou'
        
        }else{
            this.videoPlayer.pause()
            this.videoPlayer.currentTime = 0;
         this.stopButton.innerText = 'play'
        }
    }
    

}


const videoPlayer = new VideoPlayer({
    videoPlayer: document.querySelector('.video') as HTMLVideoElement,
    playButton: document.querySelector('.play') as HTMLButtonElement,
    stopButton: document.querySelector('.stop') as HTMLButtonElement
})

videoPlayer.iniciarEventos()