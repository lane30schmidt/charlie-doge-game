$(document).ready(function () {
  //click on an image, get a message

  $("#dogeOne").click(function () {
    $("#outputDiv").hide();

    console.log("user clicked dogeOne 2");
    $("#outputMsg").text("You Lose! Pick the OG!");
    $("#outputDiv").toggle().fadeToggle(5000);
  });

  $("#dogeTwo").click(function () {
    $("#outputDiv").hide();
    console.log("user clicked dogeTwo 2");
    $("#outputMsg").text("OG doge deteced. So much wow");
    $("#outputDiv").toggle().fadeToggle(5000);
  });
});