$(function(){
    //�޸�������޸�����
    $(".userCoreTitle span").click(function(){
        $(".userCoreTitle span").removeClass("thatSpan");
        $(this).addClass("thatSpan");
    });
    $(".userCoreTitle span").eq(0).click(function(){
        $(".toggleHide1").show();
        $(".toggleHide2").hide();
    });
    $(".userCoreTitle span").eq(1).click(function(){
        $(this).removeClass("myhide");
        $(".toggleHide1").hide();
        $(".toggleHide2").show();
    });
    //�޸�������޸����Ͻ���

});