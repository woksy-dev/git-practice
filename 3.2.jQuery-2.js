function action1() {
$("p")
.replaceWith(function() {

    return "<a href='https://www.youtube.com'>" + $(this).text() + "</a>";

})

}

function action2() {
    $("a").hover(
        function() {
            $(this).animate({ fontSize: "20px" }, 200);
        },
        function() {
            $(this).animate({ fontSize: "16px" }, 200);
        }
    );
}

function action3(btn) {
$("p, a").fadeOut("slow")
$("button").slideUp("slow")
}
