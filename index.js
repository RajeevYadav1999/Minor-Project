let displayImages = document.querySelectorAll(".img");

let count = 1;

function toggleImage(){
        if(count === 1){
            addActive(displayImages[0]);
            removeActive(displayImages[3]);
        }
        if(count === 2){
            addActive(displayImages[1]);
            removeActive(displayImages[0]);
        }
        if(count === 3){
            addActive(displayImages[2]);
            removeActive(displayImages[1]);
        }
        if(count === 4){
            addActive(displayImages[3]);
            removeActive(displayImages[2]);
        }
        count += 1;
        if(count > 4) {
            count = 1;
        }
}


function addActive(img) {
    if(!(img.classList.contains("active"))){
        img.classList.add("active");
    }
}
function removeActive(img) {
    img.classList.remove("active");
}

setInterval(toggleImage, 2000);