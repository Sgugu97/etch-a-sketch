const sizer = document.createElement("button");
sizer.classList= "sizer";
sizer.textContent = "Select Size";
document.body.appendChild(sizer);

const container =document.createElement("div");
document.body.appendChild(container);
container.classList = "container";

let b = 16;



for (let a=0;a<b; a++){
    let column = document.createElement("div");
    column.classList = "column";
    container.appendChild(column);
    for(let a=0; a<b; a++){
        let box = document.createElement("div");
        box.classList = "box";
        column.appendChild(box);
        box.addEventListener("mouseover", () => {
            box.setAttribute("style", "background-color : blue;");
        });
    }
}

sizer.addEventListener("click", () => {
    for (let i=0; i<b; i++){
        const element = document.querySelector(".column");
        container.removeChild(element);
    };

    b=20;

    for (let a=0;a<b; a++){
        let column = document.createElement("div");
        column.classList = "column";
        container.appendChild(column);
        for(let a=0; a<b; a++){
            let box = document.createElement("div");
            box.classList = "box";
            column.appendChild(box);
            box.addEventListener("mouseover", () => {
                box.setAttribute("style", "background-color : blue;");
            });
        }
    }   
})

