$(function(){   
    
    $(".button").click(function(){
	alert("this worked!");
  });

    $(".button2").click(function(){
    alert("this worked too!")
    });

    $(".button3").click(function(){
    alert("?")
    });

    $(".button4").click(function(){
    alert("DON'T CLICK ME!")
    });

    $(".button5").click(function(){
    alert("Button")
    });

     $(".button6").click(function(){
    alert("Click me!")
    });

    $(".button7").click(function(){
    alert("Why are you clicking these buttons?")
    });

    $(".button8").click(function(){
    alert("Keep clicking")
    });

    $(".button9").click(function(){
    alert("...")
    });

    $(".button10").click(function(){
    print("this page")
    });

    $(".button11").click(function(){
    alert("Buttons infinity")
    });

    $(".button12").click(function(){
    alert("push the 'a' key")
    });

    $(".button13").click(function(){
    alert("Click box")
    });

    $(".button14").click(function(){
    alert("Happy Holidays")
    });

    $(".button15").click(function(){
    alert("The last button... So far")
    });

});




window.addEventListener("keydown", checkKeyPressed, false);
 
function checkKeyPressed(e) {
    if (e.keyCode == "65") {
        alert("The 'a' key is pressed.");
    }
}
