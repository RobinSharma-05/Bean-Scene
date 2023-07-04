$(".slick-slider").slick({
    slidesToShow: 1,
    infinite: true,
    slidesToScroll: 1,
    autoplay: true,
    fade: true,
    autoplaySpeed: 2000,
});

setTimeout(() => {
    const box = document.getElementById("box");

    box.style.display = "none";

    document.body.classList.remove("overflow-hidden");
}, 1000);

var btn = $('#button');

$(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
        btn.addClass('show');
    } else {
        btn.removeClass('show');
    }
});

btn.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, '300');
});