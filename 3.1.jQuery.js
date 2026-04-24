function action1() {
  let elem = $("#para3");
  $(document).ready(function () {
    elem.next().css("background-color", "yellow");
  });
}

function action2() {
  $(document).ready(function () {
    $("div:first-of-type").css("text-align", "right");
  });
}

function action3() {
  $(document).ready(function () {
    $("p:even").css("font-size", "20px");
  });
}
