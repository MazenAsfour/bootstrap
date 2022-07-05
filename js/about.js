
const b=document.querySelector('html,body');

console.log(b);

$(document).ready(function(){
    $('body').css("overflow","auto");
    $("section.load h1").fadeOut(1200,function(){
        $("section.load").fadeOut(600);
        
        
    });
$('html,body').niceScroll();
 


$(window).scroll(function(){
    console.log($(this).scrollTop());
    if($(this).scrollTop() >= 500 ){
        $(".scroll").fadeIn();
    }
    else {
        $(".scroll").fadeOut();
    }
    /*$('.scroll').click(function(){
        b.scrollTo({
            top:30,
            behavior:'smooth'
        })
    });*/


})

})
function show1(){
    b.scrollTo({
        top:0,
        behavior:"smooth"
    })
        
}

/*const a=document.querySelector('section.load');


setTimeout(loodd,1000);

function loodd(){
    document.querySelector('section.load').style.opacity="1";
    document.querySelector('body').style.overflow="auto";
    document.querySelector('section.load').style.display="none";
  
};
*/

