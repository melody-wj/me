$(function(){   

$(window).scroll(function(){
    
    if($(window).scrollTop()>300){
        $(".title").css({animation:"fadeInUp 1s linear forwards"});
        $(".me").css({animation:"fadeInUp 1s linear forwards"});
    }
    if($(window).scrollTop()>900){
        $(".tone").css({animation:"fadeInUp 1s linear forwards"});
        $(".learn").css({animation:"fadeInUp 1s linear forwards"});
    }
    if($(window).scrollTop()>1480){
        $(".ttwo").css({animation:"fadeInUp 1s linear forwards"});
        $(".wor").css({animation:"fadeInUp 1s linear forwards"});
    }
    if($(window).scrollTop()>1980){
        $(".tthree").css({animation:"fadeInUp 1s linear forwards"});
        $(".ch-info").css({animation:"fadeInUp 1s linear forwards"});

    }
    if($(window).scrollTop()>2200){
        $(".tfore").css({animation:"fadeInUp 1s linear forwards"});
       
        $(".hf-text").css({animation:"fadeInUp 1s linear forwards"});
    }
    if($(window).scrollTop()>2600){
        $(".posiSix").css({animation:"fadeInUp 1s linear forwards"});
      
    }
   
})
})