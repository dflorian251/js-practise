const dragElement = document.querySelectorAll('.dragElement');
const dropZone = document.querySelectorAll('.dropZone');
let dragged;


dragElement.forEach((dElement) => {
    dElement.addEventListener("drag", () =>{
        console.log("Items has been dragged.");
    });
    
    dElement.addEventListener("dragend", () =>{
        console.log("Drag operation finished.");
    });
    
    dElement.addEventListener("dragstart", (event) => {
        dragged = event.target;
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

