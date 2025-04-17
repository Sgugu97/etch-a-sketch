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
            function rgb(x, y ,z){
                return "rgb(" +x+ "," +y+ "," +z+ ")";
            }
            let x= Math.random()*225;
            let y= Math.random()*225;
            let z= Math.random()*225;
            box.style.backgroundColor = rgb(x, y, z);
        });
    }
}

sizer.addEventListener("click", () => {
    let newGrid = prompt("Please select new grid width.")
    if (newGrid < 100){
        for (let i=0; i<b; i++){
            const element = document.querySelector(".column");
            container.removeChild(element);
        };

        b=newGrid;

        for (let a=0;a<b; a++){
            let column = document.createElement("div");
            column.classList = "column";
            container.appendChild(column);
            for(let a=0; a<b; a++){
                let box = document.createElement("div");
                box.classList = "box";
                column.appendChild(box);
                box.addEventListener("mouseover", () => {
                    function rgb(x, y ,z){
                        return "rgb(" +x+ "," +y+ "," +z+ ")";
                    }
                    let x= Math.random()*225;
                    let y= Math.random()*225;
                    let z= Math.random()*225;
                    box.style.backgroundColor = rgb(x, y, z);
                });
            }
        }  
    }else if(newGrid > 99){
        alert("The width must be lower than 100.")
    } 
})

