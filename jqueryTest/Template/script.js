$("h1").addClass("hero");
$("button").text("Click me now").addClass("btn");
// $(document).keypress(function(e){
//     $("input").text("0");
//     $("h1").text(e.key);
// })

$("h1").on("click",function(e){
    $("h1").css("color","purple");
})
// $("h1").before("<button>new</button>");
// $("button").remove(); 
let bool = true;
$("button").on("click",function(e){
    // $("h1").slideToggle();
    // $("h1").animate({opacity:0.5});
    if(bool){
        $("h1").animate({opacity:0.1});
        $("button").text("Click to see");
        bool = false;
    }
    else{
        $("h1").animate({opacity:1});
        $("button").text("Click to fade");
        bool = true;
    }
})