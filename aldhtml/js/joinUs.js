$(function(){

   // ��Ƹ��Ϣ
   $(".jobNav span").click(function(){
       $(".jobNav span").removeClass("btnSpan");
       $(this).addClass("btnSpan");

       var i = $(this).attr("data-index");

       $('.jobContainer .jobList').hide();
       $('.jobContainer .jobList').eq(i).show();

   });
   // ��Ƹ��Ϣ����
  //��Ƹ��Ϣlist
  //��Ƹ��Ϣlist����
});