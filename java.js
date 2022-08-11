// Color array
const colors = ["red","blue","green","orange","yellow", "black", "white",
 "silver", "purple","violet","pink","aqua",];

const btn = document.getElementById("btn");
const color = document.querySelector(".color")

btn.addEventListener("click", function (){ 
    // assing getRandomNumber function to randomNumber
    const randomNumber = getRandomNumber();
    //change color of background using the fucntion with the array
    document.body.style.backgroundColor = colors[randomNumber]
    color.textContent = colors[randomNumber];
})

//Function to get random color 
function getRandomNumber (){
    return Math.floor (Math.random() * colors.length);
}