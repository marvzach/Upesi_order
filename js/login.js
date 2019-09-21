$(document).ready(function() {
  $("button#signin").click(function() {
    var email = $("input#email").val();
    var password = $("input#password").val();

    if (!email && !password) {
      $("#empty1, #empty2").show();
      return 0;
    } else if (!password) {
      $("#empty2").show();
      return 0;
    } else if (!email) {
      $("#empty1").show();
      return 0;
    } else if (email && !password) {
      $("#empty2").show();
      $("#empty1").hide()
      return 0;
    } else if (!email && password) {
      $("#empty1").show();
      $("#empty2").show();
      return 0;
    } else if (email && password) {
      $("#empty1").hide();
      $("#empty2").hide();
    }


  });
});