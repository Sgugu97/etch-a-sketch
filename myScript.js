const sizer = document.createElement("button");
sizer.classList= "sizer";
sizer.textContent = "Select Size";
document.body.appendChild(sizer);


const container =document.createElement("div");
document.body.appendChild(container);
container.classList = "container";




for (let i=0;i<64; i++){
    let box = document.createElement("div");
    box.classList = "box";
    container.appendChild(box);
    box.addEventListener("mouseover", () => {
        box.setAttribute("style", "background-color : blue;");
    });
}

