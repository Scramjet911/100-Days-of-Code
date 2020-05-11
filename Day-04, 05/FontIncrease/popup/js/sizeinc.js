input = document.getElementById('textSize');
const maxsize = 6;

function onError(err)
{
    console.log(err);
}

function storeChanges(size){
    if(size != undefined){
        let storeval = {"fontSize":[parseInt(size)]};
        browser.storage.local.set(storeval);
        console.log("Stored Changed value " + size);
    }
}

storePromise = browser.storage.local.get(null)
storePromise.then((storeVal) => {
    if(JSON.stringify(Object.keys(storeVal))=="[]" || storeVal.fontSize[0] == NaN){
        if(input.value != "")
            browser.storage.local.set({"fontSize":[parseInt(input.value)]});
        else
            browser.storage.local.set({"fontsize":[0]});
        console.log("There is no stored Data" + input.value);
    }
    else{
        input.value = parseInt(storeVal.fontSize[0]);
        console.log("Loaded value into extension : " + storeVal.fontSize[0]);
    }
},onError);
input.addEventListener("onchange",storeChanges());

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
    storeChanges(input.value);
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
    storeChanges(input.value);
});