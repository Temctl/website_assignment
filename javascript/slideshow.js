let img = document.querySelector('img');
let text = document.querySelector('p.text');
slideNumber = 1;
function slides(i){
    slideNumber= slideNumber + i;
    if(slideNumber > 4){
        slideNumber = 1;
    }else if(slideNumber < 1){
        slideNumber = 4;
    }
    switch(slideNumber){
        case 1:
            img.src = "images/1st_pic.jpg";
            text.textContent = "On dessert"
            break;
        case 2:
            img.src = "images/2nd_pic.jpg";
            text.textContent = "On dirt";
            break;
        case 3:
            img.src = "images/3rd_pic.jpg";
            text.textContent = "On road";
            break;
        case 4:
            img.src = "images/4th_pic.jpg";
            text.textContent = "In rain";
            break;
    }
}