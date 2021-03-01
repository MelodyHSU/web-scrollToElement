// 測試用 console.log("00");

// $(selector).each(function (index, element) {

// });


$("a").each(function (index, element) {
    
    console.log("編號：" + index);

    var target = $(this).attr("data-st-target");
    var duration = $(this).attr("data-st-duration");
    var offsetTop = $(this).attr("data-st-offset");

    console.log("目標：" + target);
    console.log("時間：" + duration);
    console.log("位移：" + offsetTop);

    var offset = $("#" + target).offset();
    var top = offset.top;

    // 上方 扣除 上方位移
    // top = top - offsetTop; 原始寫法
    // 如果 offsetTop 存在的話 才執行 減法運算
    // if是簡寫
    if (offsetTop) top-= offsetTop;

    console.log("上方：" + top);

    $(this).click(function (e) { 
        e.preventDefault();
        
        // parseInt() 將文字轉為數字
        // stop() 停止當前所有動畫
        $("html").stop().animate({
            scrollTop: top
        }, parseInt(duration));
    });
});

$("html").on("mousewheel" , function (){
    $("html").stop();
});