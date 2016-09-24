/**
 * Created by YICHI on 9/14/16.
 */
$(document).ready(function(){
  
  var curPage = 1;
  var numOfPages = $(".skw-page").length;
  var animTime = 1000;
  var scrolling = false;
  var pgPrefix = ".skw-page-";
  
  $('.portfolio-item').on('click', function(){
        console.log("show");
        $('.modal').modal("show");
    });
  
  $(".cancel").click(function(){
        console.log("cancel");
        $(".Modal").modal("hide");
    });


  $('#fullpage').fullpage({
    keyboard: false,
    anchors: ['firstPage', 'secondPage'],
    navigation: false,
    // navigationPosition: 'right',
    // navigationTooltips: ['First page', 'Second page'],
    responsiveWidth: 900,
    afterResponsive: function(isResponsive) {

    },
    afterRender: function () {
      //playing the video
      $('video.bgvid').get(0).play();
    }
  });

  function pagination() {
    scrolling = true;
    console.log(curPage);
    $(pgPrefix + curPage).removeClass("inactive").addClass("active");
    $(pgPrefix + (curPage - 1)).addClass("inactive");
    $(pgPrefix + (curPage + 1)).removeClass("active");

    setTimeout(function() {
      scrolling = false;
    }, animTime);
  };

  function navigateUp() {
    if (curPage === 1) return;
    curPage--;
    pagination();
  };

  function navigateDown() {
    if (curPage === numOfPages) return;
    curPage++;
    pagination();
  };

  $(".modal").on("mousewheel DOMMouseScroll", function(e) {
    event.stopPropagation();
    if (scrolling) return;
    if (e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0) {
      navigateUp();
    } else { 
      navigateDown();
    }
  });

  $(".modal").on("keydown", function(e) {
    event.stopPropagation();
    console.log(e);
    if (scrolling) return;
    if (e.which === 38) {
      if($(".modal-open").length>0){
        navigateUp();
      }else{
        $('#fullpage').moveUp();
      }
      
    } else if (e.which === 40) {
      if($(".modal-open").length>0){
        navigateDown();
      }else{
        $('#fullpage').moveDown();
      }
    }
  });

  
});



