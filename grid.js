const items = document.querySelectorAll(".grid-item");
const body = document.querySelector("body");
const coordinates = document.querySelector(".coordinates");

coordinates.innerHTML = `X: 0\nY: 0` ; 



items.forEach((item) => {
    item.addEventListener("click", () => {
        item.classList.toggle("red");
    });

    item.addEventListener("mouseenter", () => {
        item.classList.add("outline");
    });
    
    item.addEventListener("mouseleave", () => {
        item.classList.remove("outline");
    }); 

    body.addEventListener("keydown", () => {
        item.innerHTML = event.key;
    });

    body.addEventListener('mousemove', (event) => {
        coordinates.innerHTML = `X: ${event.clientX}\nY:${event.clientY}` ; 
    });
});

