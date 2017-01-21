$(function(){

   // 招聘信息
   $(".jobNav span").click(function(){
       $(".jobNav span").removeClass("btnSpan");
       $(this).addClass("btnSpan");

       var i = $(this).attr("data-index");

       $('.jobContainer .jobList').hide();
       $('.jobContainer .jobList').eq(i).show();

   });
   // 招聘信息结束
  //招聘信息list
  //招聘信息list结束
});