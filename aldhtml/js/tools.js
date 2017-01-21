$(function () {
    var winHeight = $(document).scrollTop();
    var banerHeight = $(".toolsBanner").height();
    banerHeight+=100;
    $(window).scroll(function() {
        var scrollY = $(document).scrollTop();// 获取垂直滚动的距离，即滚动了多少

        if (scrollY > banerHeight){ //如果滚动距离大于550px则隐藏，否则删除隐藏类
            // $('.top-title').addClass('hiddened');
            $(".toolsId").addClass("scrollUL");
            $(".toolsnavbar").show();
        }
        else {
            $('.toolsId').removeClass('scrollUL');
            $(".toolsnavbar").hide();
        }
    });


    //toolsfun  bananer hover
    $(".toolsfun a").hover(function () {
        $(".toolsfun a").removeClass("toolsthis");
        $(this).addClass("toolsthis");
    },function () {
        $(this).removeClass("toolsthis");
        $(this).addClass("toolsthis");
    });
    
    //toolsId hover
    $(".toolsId ul li").hover(function () {
        $(".toolsId ul li").removeClass("thisLi");
        $(this).addClass("thisLi");
    },function () {
        $(this).removeClass("thisLi");
        $(this).addClass("thisLi");
    })

    //toolsIdnav hover
    $(".toolsIdnav a").hover(function () {
        $(".toolsIdnav a").removeClass("toolsthis");
        $(this).addClass("toolsthis");
    },function () {
        $(this).removeClass("toolsthis");
        $(this).addClass("toolsthis");
    })
});