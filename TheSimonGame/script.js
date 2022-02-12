let sequence=[];
let level=1;
let click=0;
let score=0;
let  x=0;
let isAlive = true;
$(document).on("keypress",function(e){
    $("h1").text("Level "+ level);

})
function giveRandom(){
    let random=Math.floor(Math.random()*4)+1;
    return random;
}
    $("button").on("click",function(e){
        if(click<level){
            let buttonclicked = this.innerHTML;
        // console.log(buttonclicked)
        animate(buttonclicked); 
        // console.log(buttonclicked);
        compare(buttonclicked);
        }
    }) 
function animate(button){
    switch (button) {
        case "RED":
        case 1:
            $(".red").addClass("pressed");
        setTimeout(function(){
            $("button").removeClass("pressed");},100);
            break;
        case "GREEN":
        case 2:
            $(".green").addClass("pressed");
        setTimeout(function(){
            $("button").removeClass("pressed");},100);
            break;
        case "BLUE":
        case 3:
                $(".blue").addClass("pressed");
        setTimeout(function(){
            $("button").removeClass("pressed");},100);
            break;
        case "YELLOW":
        case 4:
                $(".yellow").addClass("pressed");
        setTimeout(function(){
            $("button").removeClass("pressed");},100);
            break;
    
        default:
            console.log("wrong button");
            break;
    }
}
function gameLogic(){

}
function compare(val){
        switch (val) {
            case "RED":
                val=1;
                break;
                case "GREEN":
                    val=2;
                break;
                case "BLUE":
                    val=3;
                break;
                case "YELLOW":
                    val=4;
                break;
            default:
                break;
        }

    if(val==sequence[x]){
        console.log("True");
        score++;
        x++;
    }
    else{
        console.log("False");
        endGame();
    }
    if(level ==x && isAlive==true){

        // console.log("click "+click);
        // console.log("x "+x);
        // console.log("isalive "+isAlive);
        nextLevel();
    }
    else{
        // console.log("click "+click);
        // console.log("x "+x);
        // console.log("isalive "+isAlive);
        // console.log("Stuck");
        // endGame();
    }
    click++;
}
function populateLevel(){
    sequence.push(giveRandom());
}
function resetStage(lev){
  
}
function createStage(lev){
    // level=lev;
     click=0;
     x=0;
     isAlive = true;
     populateLevel();
     // sequence=[];
     // populateLevel(level);
}
function nextLevel(){
    // populateLevel();
    console.log("nextlvl");
    playGame(++level);
}
function endGame(){
    console.log("Game end\n"+"Your score = "+score);
    score=0;
    sequence=[];
    console.log("game restarting");
    resetStage(1);
    playGame(1);

}
function playSequence(){
    let lastEement=sequence.reverse()[0];
    animate(lastEement);
}

function playGame(lev){
    createStage(lev);
    // resetStage(lev);
    setTimeout(function(){
        playSequence();
     },300);
     console.log(sequence);
}
playGame(1);

// $("h1").on("click",function(e){
//     gameEngine();
// })
// function gameEngine(){

//     // populate an Array;
//     // play the last sequence;
//     // user clicks button according to sequence;
//     // if success add child to Array;
//     // play the last sequence;
//     // user presses from first sequence;
// // populateLevel(3);
// sequence.push(giveRandom());
// console.log(sequence);
// }
// gameEngine()