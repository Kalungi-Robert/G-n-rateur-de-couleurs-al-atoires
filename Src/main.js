const containerEL = document.querySelector(".container");

for (let index = 0; index < 60; index++) {
    const colorContainerEL = document.createElement("div");
    colorContainerEL.classList.add
    ("color-container");
    containerEL.appendChild
    (colorContainerEL);

}

/For all the colors/
const colorContainerELs = document.querySelectorAll(".color-container");

generateColors();


/To create randomColors with generateColors function/
function generateColors(){
    colorContainerELs.forEach(
        (colorContainerEL)=> {
            const newColorCode = randomColor();
            colorContainerEL.Style.
            backgroundColor = "#" + newColorCode;
            colorContainerEL.innerText = "#" + 
            newColorCode;
        });
}


/To create random Numbers/
function randomColor() {
    const chars = "0123456789abcdef";
    const colorCodelength = 6;
    let colorCode = "";
    for (let index = 0; index <
        colorCodelength; index++) { 
        const randomNum = Math.floor(Math.random()
        * chars.length);
        colorCode += chars.substring(randomNum,randomNum + 1);
       
}
return colorCode;
  } 