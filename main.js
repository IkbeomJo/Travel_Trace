jQuery(document).ready(function(){

    $('.navbar_menu>li').mouseover(function(){
      $(this).find('.submenu').stop().fadeIn(200);
      $(this).find('>a').css("background-color","black");
      $(this).find('>a').css("color","white");
    }).mouseout(function(){
      $(this).find('.submenu').stop().fadeOut(200);
      $(this).find('>a').css("background-color","white");
      $(this).find('>a').css("color","black");
    });

    $('.more').on("click", function(){
        $('.navbar_menu').stop().fadeToggle(200);
    })

    $('.mainframe').mouseover(function(){
        $(this).find('button').stop().fadeIn(200);
      }).mouseout(function(){
        $(this).find('button').stop().fadeOut(200);
      });
      
  });

let curPos = 0; // 현재 보이는 요소의 인덱스 번호
let noodlePos = 1;

function prev(){
    if(curPos >= 0){
        $($(".item")[curPos]).toggleClass("active")
        $($(".step")[curPos]).toggleClass("active-step")
        $(".item").hide();
        curPos -= 1;
        $($(".item")[curPos]).toggleClass("active")
        $($(".step")[curPos]).toggleClass("active-step")
        $(".active").fadeIn(800);
    }
    if(curPos == -1){
        $("button").removeAttr("disabled")
        $($(".item")[curPos]).toggleClass("active")
        $($(".step")[curPos]).toggleClass("active-step")
        $(".item").hide();
        curPos = 3
        $($(".item")[curPos]).toggleClass("active")
        $($(".step")[curPos]).toggleClass("active-step")
        $(".active").fadeIn(800); 
    }
}

function next(){
    if(curPos <= 3){
        $($(".item")[curPos]).toggleClass("active")
        $($(".step")[curPos]).toggleClass("active-step")
        $(".item").hide();
        curPos += 1;
        $($(".item")[curPos]).toggleClass("active")
        $($(".step")[curPos]).toggleClass("active-step")
        $(".active").fadeIn(800); 
    }
    if(curPos == 4){
        $($(".item")[curPos]).toggleClass("active")
        $($(".step")[curPos]).toggleClass("active-step")
        $(".item").hide();
        curPos = 0
        $($(".item")[curPos]).toggleClass("active")
        $($(".step")[curPos]).toggleClass("active-step")
        $(".active").fadeIn(800); 
    }
}

function prev_noodle(){
    if(noodlePos>0){
        $("button").removeAttr("disabled") 
        $(".noodle").animate({right: '-=450'}, 500);
        noodlePos-=1
    }
    if(noodlePos==1){
        $(".prev_noodle")[0].setAttribute("disabled",'true');
    }
    
}

function next_noodle(){
    if(noodlePos < 4){
        $("button").removeAttr("disabled")
        $(".noodle").animate({right: '+=450px'}, 500)
        noodlePos+=1;
    }
    if(noodlePos == 4){
        $(".next_noodle")[0].setAttribute("disabled",'true')
    }

}


function init(){
    $(".item").hide()
    $(".active").show()
    $(".prev").click(prev)
    $(".next").click(next)
    $(".next_noodle").click(next_noodle)
    $(".prev_noodle").click(prev_noodle)
    $(".prev_noodle")[0].setAttribute("disabled",'true');
}
$(document).ready(function(){
    init();
    
})
setInterval(next, 3000);