var email = "";
var subject = "";
var message = "";

$('.contact').on('click', function() {
    $('.black-bg').addClass('show-modal')
})
$('#close').on('click', function() {
    reset_modal();
    $('.black-bg').removeClass('show-modal')
})

// 검은색 배경 클릭시 모달창 닫음
$('.black-bg').on('click', function(e) {
    if ($('.black-bg').is($(e.target))) {
        reset_modal();
        $('.black-bg').removeClass('show-modal')
    }
})

$('#mail-address').on('blur', () => {
    email = $('#mail-address').val().trim();
    test_email(email);
})

$('#mail-subject').on('blur',() => {
    subject = $('#mail-subject').val().trim();
    console.log(subject);
    test_subject(subject);
})

$('#mail-message').on('blur',() => {
    message = $('#mail-message').val().trim();
    console.log(message);
    test_message(message);
})

function reset_modal() {
    if ($('#mail-address').hasClass('is-invalid')) {
        $('#mail-address').removeClass('is-invalid');
    }
    if ($('#mail-subject').hasClass('is-invalid')) {
        $('#mail-subject').removeClass('is-invalid');
    }
    if ($('#mail-message').hasClass('is-invalid')) {
        $('#mail-message').removeClass('is-invalid');
    }
}

function test_submit() {
    email = $.trim($('#mail-address').val());
    subject = $.trim($('#mail-subject').val());
    message = $.trim($('#mail-message').val());


    if(!test_email(email) && !test_subject(subject) && !test_message(message)) {
        return false;
    }
    return true;
}

function test_email(email) {
    if (/\S+@\S+\.\S+/.test(email) == false) {
        $('#mail-address').addClass('is-invalid');
        return false;
    } else {
        if ($('#mail-address').hasClass('is-invalid')) {
            $('#mail-address').removeClass('is-invalid');
        }
        return true;
    }
}

function test_subject(subject) {
    if (subject.length < 1) {
        $('#mail-subject').addClass('is-invalid');
        return false;
    } else {
        if ($('#mail-subject').hasClass('is-invalid')) {
            $('#mail-subject').removeClass('is-invalid');
        }
        return true;
    }
}

function test_message(message) {
    if (message.length < 1) {
        $('#mail-message').addClass('is-invalid');
        return false;
    } else {
        if ($('#mail-message').hasClass('is-invalid')) {
            $('#mail-message').removeClass('is-invalid');
        }
        return true;
    }
}