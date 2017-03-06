window.onload=function(){
	//获取元素
    var page1=document.getElementById("page1");
    var page2=document.getElementById("page2");
    var page3=document.getElementById("page3");
	var music=document.getElementById("music");
    var audio=document.getElementsByTagName("audio")[0];
    
    //当音乐停止播放的时候，自动停止光盘的旋转效果
     audio.addEventListener("ended",function(event){
           music.setAttribute("class","")
     },false)
    //点击音乐图标，控制音乐播放
     /* music.onclick=function(){
      	if (audio.paused) {
      		audio.play();
      		this.setAttribute("class","play");
      	}else {
      		audio.pause();
      		this.setAttribute("class","");
      	}

            
          }*/

         //点击屏幕，开启效果
        music.addEventListener("touchstart",function(event){
          	if (audio.paused) {
      		audio.play();
      		this.setAttribute("class","play");
      	}else {
      		audio.pause();
      		this.setAttribute("class","");
      	}
          },false)
        page1.addEventListener("touchstart",function(event){
        	       page1.style.display="none";
        	       page2.style.display="block";
        	       page3.style.display="block";
        	       page3.style.top    ="100%";
        	       setTimeout(function(){
        	       	   page2.setAttribute("class","page fadeOut");
        	       	   page3.setAttribute("class","page fadeIn")
        	       },5500);
        },false)
}
