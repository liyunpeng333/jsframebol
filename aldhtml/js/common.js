$(function(){
    //ͨ�õ���
    $(".navMenu li").hover(function(){
        $(this).addClass("active");
    },function(){
        $(this).removeClass("active");
    });

    // $(".navMenu li").click(function(){
    //     var href = $(this).children().attr("href");
    //     window.open(href,'_self')
    // });
    //ͨ�õ�������


    //��¼�������ʽ
    $(".signIn a,.signIn b").hover(function(){
        $(this).parent().addClass("hoverColoer")
    },function(){
        $(this).parent().removeClass("hoverColoer")
    });
    //��¼�������ʽ����


    //���ͼ������¼
    $(".wxLand").attr("onclick","window.location.href='signIn.html';")
    //���ͼ������¼����





});
