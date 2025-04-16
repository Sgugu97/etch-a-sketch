const sizer = document.createElement("button");
sizer.classList= "sizer";
sizer.textContent = "Select Size";
document.body.appendChild(sizer);

const container =document.createElement("div");
document.body.appendChild(container);
container.classList = "container";

let b = 16;


for (let a=0;a<b; a++){
        for(let a=0; a<b; a++){
            let box = document.createElement("div");
            box.classList = "box";
            container.appendChild(box);
            box.addEventListener("mouseover", () => {
                box.setAttribute("style", "background-color : blue;");
            });
        }
}

sizer.addEventListener("click", () => {
    for (let i=0; i<256; i++){
        const element = document.querySelector(".box");
    container.removeChild(element);
    };

    b=20;

    for (let a=0;a<b; a++){
        for(let a=0; a<b; a++){
            let box = document.createElement("div");
            box.classList = "box";
            container.appendChild(box);
            box.addEventListener("mouseover", () => {
                box.setAttribute("style", "background-color : blue;");
            });
        }
    }

    
})

