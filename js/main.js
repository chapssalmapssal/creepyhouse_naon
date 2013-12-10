var noneclass;
var ball2, ball2ani;
var ball1, ball1ani;
var bear, bearani, beareye1, beareye2;
var picture, pictureani;
var poster, posterani;
var fire, light;
var totalgage=0;
var sound;

var init=function(){
    noneclass=document.querySelector('.noneclass')
	ball2=document.querySelector('#ball2')
	ball2ani=document.querySelector('.ball2ani')
    ball1=document.querySelector('#ball1')
	ball1ani=document.querySelector('.ball1ani')
    bear=document.querySelector('#bear')
	beareye1=document.querySelector('#beareye1')
	beareye2=document.querySelector('#beareye2')
	bearani=document.querySelector('.bearani')
	picture=document.querySelector('#picture')
	pictureani=document.querySelector('.pictureani')
	poster=document.querySelector('#poster')
	posterani=document.querySelector('.posterani')
	fire=document.querySelector('#fire')	
	light=document.querySelector('#light')	
	
sound = document.querySelector('#sound');

	
    ball2.onclick = function(){

        if (ball2.className === 'ball2ani'){
            ball2.className = 'noneclass'
            totalgage-=1
        }
        else{
            ball2.className = 'ball2ani'
            totalgage+=1
        }
    };
    
    ball1.onclick = function(){
        if (ball1.className === 'ball1ani'){
            ball1.className = 'noneclass'
            totalgage-=1
        }
        else{
            ball1.className = 'ball1ani'
            totalgage+=1
        }
    };
    
    bear.onclick = function(){
        if (beareye1.className && beareye2.className=== 'bearani'){
            beareye1.className = 'noneclass'
            beareye2.className = 'noneclass'
            totalgage-=1
        }
        else{
            beareye1.className = 'bearani'
            beareye2.className = 'bearani'
            totalgage+=1
        }
    };

    picture.onclick = function(){
        if (picture.className === 'pictureani'){
            picture.className = 'noneclass'
            totalgage-=1
        }
        else{
            picture.className = 'pictureani'
            totalgage+=1
        }
    };
    
    poster.onclick = function(){
        if (poster.className === 'posterani'){
            poster.className = 'noneclass'
            totalgage-=1
        }
        else{
            poster.className = 'posterani'
            totalgage+=1
        }
    };
	
    fire.onclick = function(){
            fire.style.opacity=0
			light.style.opacity=0
            totalgage+=1
    };	
	
	baby.onclick=function(){
		if(totalgage===1){
			sound.innerHTML="<embed src=\"./sound/1.wav\" hidden=\"true\" autostart=\"true\" loop=\"false\" />";
		}
		if(totalgage===2){
			sound.innerHTML="<embed src=\"./sound/2.wav\" hidden=\"true\" autostart=\"true\" loop=\"false\" />";
		}
		if(totalgage===3){
			sound.innerHTML="<embed src=\"./sound/3.wav\" hidden=\"true\" autostart=\"true\" loop=\"false\" />";
		}
		if(totalgage===4){
			sound.innerHTML="<embed src=\"./sound/4.wav\" hidden=\"true\" autostart=\"true\" loop=\"false\" />";
		}
		if(totalgage===5){
			sound.innerHTML="<embed src=\"./sound/5.wav\" hidden=\"true\" autostart=\"true\" loop=\"false\" />";
		}
		if(totalgage===6){
			sound.innerHTML="<embed src=\"./sound/5.wav\" hidden=\"true\" autostart=\"true\" loop=\"false\" />";
		}
	};
	
	
	
};

var gage = function(){
	if(totalgage===1){
		blackgage.style.top = -295
	}
	if(totalgage===2){
		blackgage.style.top = -310
	}
	if(totalgage===3){
		blackgage.style.top = -325
	}
	if(totalgage===4){
		blackgage.style.top = -340
	}
	if(totalgage===5){
		blackgage.style.top = -363
	}
}

var loop=function(){
    gage();
    requestAnimationFrame(loop);
};

window.onload = function() {
	init();
    loop();
};