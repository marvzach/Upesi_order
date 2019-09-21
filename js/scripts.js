function eric() {
  document.getElementById('order1').innerHTML = "Quarter Kg:200 Ksh";
}

function marvo() {
  document.getElementById('order2').innerHTML = "Mbuzi half kg: 200 Ksh";
}

function marvo2() {
  document.getElementById('order3').innerHTML = "Mbuzi 1kg: 700 Ksh";
}

function marvo3() {
  document.getElementById('order4').innerHTML = "Mbuzi Fry quater: 200 Ksh";
}

$(document).ready(function() {
  $("#1").click(function() {
    $("#order1").slideToggle();
  })
})