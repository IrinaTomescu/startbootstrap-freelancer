$(document).ready(function() {
    $("#picPanzaCarousel").swiperight(function() {
        $(this).carousel('prev');
    });
    $("#picPanzaCarousel").swipeleft(function() {
        $(this).carousel('next');
    });
});