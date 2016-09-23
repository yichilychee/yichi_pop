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
        $('.modal').modal("show");
    });
  
  $('.modal .modal-backdrop').on('click', function(){
    $('.modal').removeClass('open');
    for(i=0;i<curPage;i++) navigateUp();
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

  $(document).on("mousewheel DOMMouseScroll", function(e) {
    if (scrolling) return;
    if (e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0) {
      navigateUp();
    } else { 
      navigateDown();
    }
  });

  $(document).on("keydown", function(e) {
    if (scrolling) return;
    if (e.which === 38) {
      navigateUp();
    } else if (e.which === 40) {
      navigateDown();
    }
  });

  
});

$(".main").onepage_scroll({
  loop: false
});


