

$(document).ready(function () {

    $('.tags__item').on('click', function (e) {
        e.preventDefault();
        let n = $(this).index();

        $('.tags .tags__item').removeClass('active');
        $(this).addClass('active');
        $('.gallery-wrapper .gallery').removeClass('active');
        $('.gallery-wrapper').find('.gallery').eq(n).addClass('active');
    });


    var animation = bodymovin.loadAnimation({
        container: document.getElementById("call-icon"),
        path: "f//i/phone.json",
        renderer: "svg",
        loop: true,
        autoplay: true,
    })
    


    window.addEventListener('click', function (evt) {
        if (evt.detail === 3) {
            $('h1').html('НЕЛЬСОН —<br>ГЕЙ');
            $('.subline').html('Жулики которым нельзя доверять');
        }
    });

    $(".js-smartPhoto").SmartPhoto();


    $('.show-modal').on('click', function (e) {
        e.preventDefault();
        $('.modal, .modal-bg').addClass('active');
    });
    
    $('.modal__x').on('click', function (e) {
        e.preventDefault();
        $('.modal, .modal-bg').removeClass('active');
    });


});

$(window).scroll(function() {

});


