$(function () {
    function Trim(str,is_global)
    {
        var result;
        result = str.replace(/(^\s+)|(\s+$)/g,"");
        if(is_global.toLowerCase()=="g")
        {
            result = result.replace(/\s/g,"");
        }
        return result;
    }


    $(document).delegate('input','focus',function () {
        $(".code-err span").html('&nbsp;');
        $(".code-err2 span").html('&nbsp;');
    });
    $(document).delegate('input','blur',function () {
        // $(".btn-sendCode a").click();
    });

    $(".btn-sendCode a").click(function () {
        //判断
        //11111
        if(!$("#pagelu input").val()){
            $("#pagelu .code-err span").html('*页面路径不能为空');
            return;
        }
        var pagelu = $("#pagelu input").val();
        if(pagelu.indexOf(" ")>0){
            $("#pagelu .code-err span").html('*输入错误，请重新输入');
            return;
        }
        //22222
        if(!$("#appId").val()){
            $(".appId").html('*APPID不能为空');
            return;
        }
        var appId = $("#appId").val();
        if(appId.indexOf(" ")>0){
            $(".appId").html('*输入错误，请重新输入');
            return;
        }
        //33333
        if(!$("#appSecret").val()){
            $(".appSecret").html('*APPSecret不能为空');
            return;
        }
        var appSecret = $("#appSecret").val();
        if(appSecret.indexOf(" ")>0){
            $(".appSecret").html('*输入错误，请重新输入');
            return;
        }
        var param = [];
        if($(".addlist").length>0){
            var len = $(".addlist").length;
            for(var i=0;i<len;i++){
                //判断是否为空
                if(!$((".addP"+i)).val()){
                    $((".addP-err"+i)).html('*自定义参数不能为空');
                    return;
                }
                //判断是否为字母
                if(!/^[a-zA-Z]+$/.test($((".addP"+i)).val())){
                    $((".addP-err"+i)).html('*输入错误，请重新输入');
                    return;
                }
                //第二个表单
                if(!$((".addV"+i)).val()){
                    $((".addV-err"+i)).html('*参数值不能为空');
                    return;
                }
                if(!/^[a-zA-Z0-9]+$/.test($((".addV"+i)).val())){
                    $((".addV-err"+i)).html('*输入错误，请重新输入');
                    return;
                }
                //判断不能重复
                if($((".addP"+i)).val() == $((".addP"+(i+1))).val()){
                     $((".addP-err"+(i+1))).html('*自定义参数不能重复');
                    return;
                }
                if($((".addV"+i)).val() == $((".addV"+(i+1))).val()){
                    $((".addV-err"+(i+1))).html('*参数值不能重复');
                    return;
                }
                var k =  $((".addP"+i)).val();
                var v = $((".addV"+i)).val();
                param[i]={
                    'key':k,
                    'value':v

                };
                console.log(param[i]);
            }

        }

        //获取数据 等待请求接口
        var pageajax = $("#pagelu input").val();
        var appidajax = $("#appId").val();
        var appsecretajax = $("#appSecret").val();

        var sizeajax = $(".codeSize").html();
        console.log('pageajax----------'+pageajax);
        console.log('appidajax---------'+appidajax);
        console.log('appsecretajax------'+appsecretajax);
        console.log('sizeajax-----'+sizeajax);
        console.log('param-----'+param);

        //请求接口
        // $.ajax({
        //     method:'POST',
        //     url:"/Allocation/addJson?t="+Date.now(),
        //     data:{
        //         page:,
        //         events :events
        //     },
        //     dataType:'json',
        //     success:function(data){
        //         function timeh() {
        //             $(".layer-black").remove();
        //             //成功跳到事件列表
        //             $.pjax({
        //                 url:'/EventManage',
        //                 container: '#pjax-container',
        //                 dataType:'html',
        //                 maxCacheLength:0,
        //                 cache: false,
        //                 data:{
        //                     p:1,
        //                 },
        //                 type:"POST",
        //                 timeout: 8000
        //             });
        //         }
        //     }
        // })
    });

    //添加自定义事件
    var i = -1;
    $(".addParameter").click(function () {
        i++;
        var addLi = '<li class="addlist"><div class="code-del"><span class="code-del-btn'+i+'">删除</span></div><div class="code-name"><span>自定义参数</span></div><div class="code-in"><input class="addP'+i+'" type="text" placeholder="字母"> </div> <div class="code-name"> <span>参数值</span> </div> <div class="code-in"> <input class="addV'+i+'" type="text" placeholder="数字或者字母"> <i></i> </div> <div class="code-err2"> <span class="addP-err'+i+'">&nbsp; </span> <span class="addV-err'+i+'">&nbsp; </span> </div> </li>';
        $(".code-form ul").append(addLi);
        $(document).delegate(".code-del-btn"+i,'click',function () {
            $(this).parent().parent().remove();
        })
    });

    //选择二维码尺寸
    var codeSize = 1;
    $(".code-size > div").click(function () {
        codeSize++;
        if(codeSize %2 == 0){
            $(".code-size ul").slideDown();
        }else{
            $(".code-size ul").slideUp();
        }
    });
    $(".code-size ul li").click(function () {
       var size =  $(this).find('span').html();
       $(".code-size > div > span").html(size);
        $(".code-size ul").slideUp();
    });
    //查看密码
    $(".lookpwd img").mousedown(function () {
        var val = $("#appSecret").val();
        $("#appSecret").attr('type','text').attr('value',val);
    });
    $(".lookpwd img").mouseup(function () {
        var val = $("#appSecret").val();
        if(!val){
            $("#appSecret").attr('type','password').attr('placeholder','请填写微信提供的小程序APP Secret');
        }else{
            $("#appSecret").attr('type','password').attr('value',val);
        }
    });
});