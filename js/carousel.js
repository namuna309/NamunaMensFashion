// 착장 사진 캐러셀
var onModel_w = $('.onModel .slide-item').width();
var onModel_curPic = 0;
var onModel_maxPicnum = $('.onModel .slide-item img').length;

// 옷 사진 캐러셀
var cloth_w = $('.cloth .slide-item').width();
cloth_w += parseInt($('.cloth .slide-item').css('margin-right')) * 2;
var cloth_curPic = 0;
var cloth_maxPicnum = $('.cloth .slide-item img').length - 2;

let onModel_carousel = setInterval(() => {
  onModel_curPic = infiniteCarousel('.onModel .slide-container', onModel_curPic, onModel_maxPicnum, onModel_w);
  cloth_curPic = infiniteCarousel('.cloth .slide-container', cloth_curPic, cloth_maxPicnum, cloth_w)
}, 2000);


// 무한 캐러셀 로직
function infiniteCarousel(box, pic_num, max_pics, box_width) {
  pic_num++;
  if (pic_num >= max_pics) {
    pic_num = 0;
    $(box).removeClass('trans');
    $(box).css('transform', `translateX(0px)`);
    pic_num++;
    setTimeout(() => {
      $(box).addClass('trans');
      $(box).css('transform', `translateX(${(-1) * pic_num * box_width}px)`);
    }, 0);

  }
  else {
    $(box).css('transform', `translateX(${(-1) * pic_num * box_width}px)`);
  }
  return pic_num;
}


