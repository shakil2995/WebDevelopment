let sequence=[];
let level=1;
let click=0;
let score=0;
let  x=0;
let isAlive = true;

function giveRandom(){
    let random=Math.floor(Math.random()*4)+1;
    return random;
}
    $("button").on("click",function(e){
        if(click<level){
            let buttonclicked = this.innerHTML;
        // console.log(buttonclicked)
        animate(buttonclicked); 
        compare(buttonclicked);
        }
    }) 
function animate(button){
    switch (button) {
        case "RED":
            $(".red").addClass("pressed");
        setTimeout(function(){
            $("button").removeClass("pressed");},100);
            break;
            case "GREEN":
            $(".green").addClass("pressed");
        setTimeout(function(){
            $("button").removeClass("pressed");},100);
            break;
            case "BLUE":
                $(".blue").addClass("pressed");
        setTimeout(function(){
            $("button").removeClass("pressed");},100);
            break;
            case "YELLOW":
                $(".yellow").addClass("pressed");
        setTimeout(function(){
            $("button").removeClass("pressed");},100);
            break;
    
        default:
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
    click++;
    if(val==sequence[x++]){
        console.log("True");
        score++;
    }
    else{
        console.log("False");
        endGame();
    }
    if(click ==level && isAlive==true){
        playGame(++level);
    }
}
function populateLevel(lev){

    for(let i=0;i<lev;i++){
        sequence[i]=giveRandom();
        }
}
function resetStage(lev){
    let level=lev;
    sequence=[];
    click=0;
    x=0;
    isAlive = true;
    populateLevel(level);
}
function playGame(lev){
    resetStage(lev);
    console.log(sequence);
}
function nextLevel(){
    playGame(++level);
}
function endGame(){
    alert("Game end\n"+"Your score = "+score);
    score=0;
    alert();
    playGame(1);
}
function playSequence(){

}
playGame(1);