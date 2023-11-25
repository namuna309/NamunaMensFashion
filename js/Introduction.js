var carousel_pos = $('.thumb-slide-box').position().top - $('#header').height();
var scroll_pos = 0;
var Introduction_top = $('.Introduction').position().top - $('#header').height();
var fashion_show_showPoint = Introduction_top + $('.Introduction').height() + $('.blank').height() * 2.5 - $('.Introduction-container').height();
var Introduction_height = $('.Introduction').height();
var slogan_txt = [""]
var picsNum = $('.Introduction-img img').length

$(window).scroll(() => {
    scroll_pos = $(window).scrollTop();
    if (scroll_pos >= carousel_pos && !$('.Introduction-container').hasClass('show')) {
        $('.Introduction-container').removeClass('hide');
        $('.Introduction-container').addClass('show');
    }

    for (let i = 0; i < picsNum; i++) {
        if (is_changable(scroll_pos, i)) {
            changePicture(i);
        } 
    }

    if(scroll_pos >= fashion_show_showPoint) {
        $('.fashion-show-container').removeClass('hide');
        $('.fashion-show-container').removeClass('down');
        $('.fashion-show-container').addClass('show');
        $('.fashion-show-container').addClass('up');
        $('video').get(0).play();
    } else {
        $('.fashion-show-container').removeClass('show');
        $('.fashion-show-container').removeClass('up');
        $('.fashion-show-container').addClass('hide');
        $('.fashion-show-container').addClass('down');
        $('video').get(0).pause();
    }
})

function is_changable(pos, idx) {
    
    if (pos >= Introduction_top + idx * Introduction_height / picsNum && pos < Introduction_top + (idx + 1) * Introduction_height / picsNum && !$('.Introduction-img img').eq(idx).hasClass('show') && !$('.Introduction-text .text-box').eq(idx).hasClass('show')) {
        return true;
    }
    else false
}

function changePicture(idx) {
    $('.Introduction-img img').each((j) => {
        $('.Introduction-img img').eq(j).removeClass('show');
        $('.Introduction-img img').eq(j).addClass('hide');
    })
    $('.Introduction-text .text-box').each((j) => {
        $('.Introduction-text .text-box').eq(j).removeClass('show');
        $('.Introduction-text .text-box').eq(j).addClass('hide');
    })

    $('.Introduction-img img').eq(idx).removeClass('hide');
    $('.Introduction-img img').eq(idx).addClass('show');
    $('.Introduction-text .text-box').eq(idx).removeClass('hide');
    $('.Introduction-text .text-box').eq(idx).addClass('show');
}