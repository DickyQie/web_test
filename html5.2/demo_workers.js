var i=0;

function timedCount1()
{
    i=i+1;
    //以上代码中重要的部分是 postMessage() 方法 - 它用于向 HTML 页面传回一段消息。
    postMessage(i);
    setTimeout("timedCount1()",1000);
}

timedCount1(); 