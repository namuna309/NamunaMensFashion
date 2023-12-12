var cur_h = 0;
var prev_h = 0;
var dh = 0;

$(window).scroll(() => {
    cur_h = $(window).scrollTop();
    
    dh = cur_h - prev_h;
    var opacity = (-1 / (546.8 - 136.7)) * cur_h + (546.8 / (546.8 - 136.7));
    $('.slogan .opacity').css('opacity', opacity);
})