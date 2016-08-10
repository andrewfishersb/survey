$(document).ready(function(){
  $("button#fake").click(function(){
    window.open("https://www.youtube.com/watch?v=VzuDnbjIhbg");
    $(this).hide();
    $("#real").show();

  })
  $("form#yolo").submit(function(event){
    event.preventDefault();
    var nameInput = $("input#name").val();
    var birthInput = $("input#born").val();
    var locationInput = $("input:radio[name=location]:checked").val();
    var foodInput = $("#food").val();
    var colorInput = $("input#color").val();

    var year = birthInput.substring(0,4);
    var month = birthInput.substring(5,7);
    var day = birthInput.substring(8);




    $("#nameres").text(nameInput);
    $("#birthres").text(month +"/" + day+"/" +year);
    $("#placeres").text(locationInput);
    $("#foodres").text(foodInput);
    $("body").css("background-color", colorInput);
    $("#result").show();
  });

});
