$(function(){
    $('#fullpage').fullpage({
      //options here
      licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
      autoScrolling:true,
      scrollHorizontally: true,
      nagivation: true,
      navigationPosition: 'right',
      afterLoad: function(anchorLink,index){
        if (index==2){
          $(".text-line").addClass("on");
          $("#section1").find(".character").fadeIn(1000);
          $(".main_contents>p").fadeIn(1700);
          if(matchMedia("screen and (max-width: 1570px)").matches) {
            $("#section1 .contents>p").css({display:"none"});
          }
          
        }else {
          $(".text-line").removeClass("on");
          $("#section1").find(".character").hide();
          $(".main_contents>p").hide();
        }
        if (index==3){
          $(".side_mouse").hide();
  
        }else {
          $(".side_mouse").show();
        }
        if (index==4){
          for(var i=0; i<$(".design_box").find("li").length; i++){
             $(".design_box").find("li").eq(i).fadeIn(i*1000);
          }           
  
        }else{
          $(".design_box").find("li").hide();
      }
      }
    });
  
  /* ì»¤ì„œ */
    $("nav").find("li>a").mousemove().css({cursor : "url('images/cursor_move.png'),auto", transform : "translate(-50%,-50%)"});
    // $("[class^='pupublishing_img']").mousemove().css({cursor : "none"});
    
  
  
  /* ìžê¸°ì†Œê°œ ë²„íŠ¼ */
    $(".contents button").click(function(){
      $(".int_modal").fadeIn();
    });
    $(".int_modal button").click(function(){
      $(".int_modal").fadeOut();
    });
    /* ëª¨ë°”ì¼ í–„ë²„ê±° */
    $(".hamburger").click(function(){
      $(this).toggleClass("is-active");
      $(".ham_menu").toggleClass("on");
    });
    $(".ham_menu li a").click(function(){
      $(".ham_menu").removeClass("on");
      $(".hamburger").removeClass("is-active");
    });
  
  });