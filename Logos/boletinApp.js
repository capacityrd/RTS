// Generated by CoffeeScript 1.6.3
(function() {
  var boletinApp;

  boletinApp = function() {
    var containerWidth, currentMargin, howManySlides, listingWidth, maxSlide, middleFactor, moveBack, moveForw, newMargin, paginatorIndex, slideWidth;
    slideWidth = $('.boletin-image-listing img').width();
    howManySlides = $('.boletin-image-listing img').length;
    listingWidth = slideWidth * howManySlides;
    containerWidth = 960;
    currentMargin = 0;
    newMargin = 0;
    maxSlide = -(listingWidth - containerWidth);
    paginatorIndex = 0;
    $('.boletin-image-listing').css('width', listingWidth);
    middleFactor = (containerWidth - (slideWidth * 2)) * 2;
    moveForw = function() {
      currentMargin = parseInt($('.boletin-image-listing').css('margin-left').replace('px', ''));
      if (currentMargin === 0) {
        newMargin = currentMargin - middleFactor;
        $('.boletin-image-listing').css('margin-left', newMargin + 'px');
      } else {
        currentMargin = parseInt($('.boletin-image-listing').css('margin-left').replace('px', ''));
        if (currentMargin - slideWidth < maxSlide) {
          $('.boletin-image-listing').css('margin-left', maxSlide + 'px');
        } else {
          newMargin = currentMargin - slideWidth;
          $('.boletin-image-listing').css('margin-left', newMargin + 'px');
        }
      }
      if (paginatorIndex >= howManySlides - 2) {
        console.log('reached end <');
      } else {
        paginatorIndex++;
        $('.boletin-paginator li').removeClass('selected');
        $('.boletin-paginator li').eq(paginatorIndex).addClass('selected');
        $('.boletin-paginator li').eq(paginatorIndex + 1).addClass('selected');
      }
      return console.log('Page index: ' + paginatorIndex);
    };
    moveBack = function() {
      currentMargin = parseInt($('.boletin-image-listing').css('margin-left').replace('px', ''));
      if (currentMargin === maxSlide) {
        newMargin = currentMargin + middleFactor;
        $('.boletin-image-listing').css('margin-left', newMargin + 'px');
      } else {
        if ((currentMargin >= 0) || (currentMargin + slideWidth > 0)) {
          $('.boletin-image-listing').css('margin-left', '0');
        } else {
          newMargin = currentMargin + slideWidth;
          $('.boletin-image-listing').css('margin-left', newMargin + 'px');
        }
      }
      if (paginatorIndex !== 0) {
        paginatorIndex--;
      }
      $('.boletin-paginator li').removeClass('selected');
      $('.boletin-paginator li').eq(paginatorIndex).addClass('selected');
      $('.boletin-paginator li').eq(paginatorIndex + 1).addClass('selected');
      return console.log('Page index: ' + paginatorIndex);
    };
    $('.boletin-paginator li').each(function() {
      return $(this).click(function() {
        var clicked;
        clicked = $(this).index();
        console.log('you clicked ' + clicked + ' element list');
        $('.boletin-paginator li').removeClass('selected');
        $('.boletin-paginator li').eq(clicked).addClass('selected');
        $('.boletin-paginator li').eq(clicked + 1).addClass('selected');
        if (clicked === 0) {
          $('.boletin-image-listing').css('margin-left', '0');
          paginatorIndex = clicked;
        } else if (clicked === howManySlides - 1) {
          $('.boletin-image-listing').css('margin-left', maxSlide + 'px');
          $('.boletin-paginator li').eq(clicked - 1).addClass('selected');
          paginatorIndex = clicked - 1;
          console.log('clicked last!');
        } else {
          console.log('neither first and last');
          paginatorIndex = clicked;
          if (paginatorIndex >= howManySlides - 2) {
            $('.boletin-image-listing').css('margin-left', maxSlide + 'px');
          } else {
            newMargin = -(middleFactor + ((paginatorIndex - 1) * slideWidth));
            $('.boletin-image-listing').css('margin-left', newMargin + 'px');
          }
        }
        return console.log('Page index: ' + paginatorIndex);
      });
    });
    $('.boletin-paginator a').click(function() {
      return false;
    });
    $('.boletin-arrows-control .back').click(function() {
      moveBack();
      return false;
    });
    return $('.boletin-arrows-control .forw').click(function() {
      moveForw();
      return false;
    });
  };

  $(window).on('load', boletinApp);

}).call(this);
