console.log("WOrking")
document.getElementById("w").addEventListener("click",playW);
document.getElementById("a").addEventListener("click",playA);
document.getElementById("s").addEventListener("click",playS);
document.getElementById("d").addEventListener("click",playD);
document.getElementById("j").addEventListener("click",playJ);
document.getElementById("k").addEventListener("click",playK);
document.getElementById("l").addEventListener("click",playL);


function playW(){
    console.log("W played");
    w=document.getElementById("wDrum");
    w.play();
    console.log("W end")
}
function playA(){
    console.log("A played");
    a=document.getElementById("aDrum");
    a.play();
}
function playS(){
    console.log("S played");
    s=document.getElementById("sDrum");
    s.play();
}
function playD(){
    console.log("D played");
    d=document.getElementById("dDrum");
    d.play();
}
function playJ(){
    console.log("J played");
    j=document.getElementById("jDrum");
    j.play();
}
function playK(){
    console.log("K played");
    k=document.getElementById("kDrum");
    k.play();
}
function playL(){
    console.log("L played");
    l=document.getElementById("lDrum");
    l.play();
}