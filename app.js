let btn= document.querySelector("button");
btn.addEventListener("click",function(){
    let h3=document.querySelector("h3");
    let rand=getRandomColor();
    h3.innerText=rand;
    let div=document.querySelector("div");
    div.style.backgroundColor=rand;
});
function getRandomColor(){
    let red=Math.floor(Math.random()*256);
    let green=Math.floor(Math.random()*256);
    let blue=Math.floor(Math.random()*256);

    let color=`rgb(${red}, ${green}, ${blue})`;
    return color;
}