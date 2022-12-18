$(document).ready(function () {
    let text = $(".username").text().length;
    let blockWidth = $(".username").width();
    console.log(blockWidth);
    $(".username > span").css({"width" : text * 23 + "px"});
    $(".username > span").css({"left" : (blockWidth - text * 23) * 0.5 + "px"});
    $(window).resize(function () {
        let text = $(".username").text().length;
        let blockWidth = $(".username").width();
        console.log(blockWidth);
        $(".username > span").css({"width" : text * 23 + "px"});
        $(".username > span").css({"left" : (blockWidth - text * 23) * 0.5 + "px"});
    })
});