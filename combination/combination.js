const dragElement = document.querySelectorAll('.dragElement');
const dropZone = document.querySelectorAll('.dropZone');
const body = document.querySelector("body");
const coordinates = document.querySelector(".coordinates");

coordinates.innerHTML = `X: 0\nY: 0` ;

let dragged;

dragElement.forEach((dElement) => {
    dElement.addEventListener("drag", () =>{
        console.log("Item has been dragged.");
    });
    
    dElement.addEventListener("dragend", () =>{
        console.log("Drag operation finished.");
    });
    
    dElement.addEventListener("dragstart", (event) => {
        dragged = event.target;
    });

    dElement.addEventListener("click", () => {
        dElement.classList.toggle("red");
    });

    dElement.addEventListener("mouseenter", () => {
        dElement.classList.add("outline");
    });
    
    dElement.addEventListener("mouseleave", () => {
        dElement.classList.remove("outline");
    }); 

    body.addEventListener("keydown", () => {
        dElement.innerHTML = event.key;
    });

    body.addEventListener('mousemove', (event) => {
        coordinates.innerHTML = `X: ${event.clientX}\nY:${event.clientY}` ; 
    });
});



dropZone.forEach((dzone) => {
    dzone.addEventListener("dragover", (event) => {
        event.preventDefault();
    });
    
    dzone.addEventListener("drop", (event) => {
        event.preventDefault();
        console.log("Event fired");
        if (event.target.className === "dropZone") {
            console.log("2");
            dragged.parentNode.removeChild(dragged);
            event.target.appendChild(dragged);
        }
    });
})

