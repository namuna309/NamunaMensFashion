$('.contact').on('click', function() {
    $('.black-bg').addClass('show-modal')
})
$('#close').on('click', function() {
    $('.black-bg').removeClass('show-modal')
})

// 이벤트 버블링
$('.black-bg').on('click', function(e) {
    //e.target;               // 유저가 실제로 누른거
    //console.log(e.target);
    //e.currentTarget;        // 이벤트리스너 달린 곳 -> this
    //e.preventDefault();     // 이벤트 기본동작 막아줌
    //e.stopPropagation();    // 내 상위요소로 이벤트 버블링 막아줌
    
    // $('.black-bg').removeClass('show-modal')
    
    if(e.target == document.querySelector('.black.bg')) {
        document.querySelector('.black-bg').remove('show-modal');
    }

    // jQuery
    if ($('.black-bg').is($(e.target))) {
        $('.black-bg').removeClass('show-modal')
    }
})