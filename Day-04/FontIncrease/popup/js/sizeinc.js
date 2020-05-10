input = document.getElementById('textSize');
const maxsize = 6;
document.getElementById('plus').addEventListener("click",() => {
    if(input.value < -maxsize){
        input.value = -maxsize;
    }
    else if(input.value < maxsize){
        input.value = parseInt(input.value) + 1;
    }
    else if(input.value > maxsize){
        input.value = maxsize;
    }    
});
document.getElementById('minus').addEventListener("click",() => {
    if(input.value > maxsize){
        input.value = maxsize;
    }
    else if(input.value > -maxsize){
        input.value = parseInt(input.value) - 1;
    }
    else if(input.value < -maxsize){
        input.value = -maxsize;
    }
});