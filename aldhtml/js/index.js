$(function(){
    var bannerHeight;

    function elesplitHeight(){
        bannerHeight = $(".banner  li > img.bannerImg").height();
        $(".banner").height(bannerHeight);
    }

    window.onload = function(){
        elesplitHeight();
    };

    $(window).resize(function(){
        elesplitHeight();
    })
});