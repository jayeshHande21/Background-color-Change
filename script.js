const bodyy = document.querySelector("#ii");

const button = document.querySelector("#i");

const colors = ["red", "purple","orange","pink","green","violate" , "yellow"]

function changeBackgroumdColor(){

    const colorIndex = parseInt(Math.random()*colors.length);
    bodyy.style.backgroundColor = colors[colorIndex];

}


bodyy.style.backgroundColor="yellow"
button.addEventListener("click" , changeBackgroumdColor);