// Color array
const colors = ["red","blue","green","orange","yellow"];

const btn = document.getElementById("btn");

btn.addEventListener("click", function (){ 
    //pick random number from Color Array
    const randomNumber = getRandomNumber();

    document.body.style.backgroundColor = colors[randomNumber]
})

function getRandomNumber (){
    return Math.floor (Math.random() *colors.length);
}