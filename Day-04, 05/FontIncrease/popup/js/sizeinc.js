textBox = document.getElementById('textSize');
const maxsize = 6;

function onError(err)
{
    console.log(err);
}

function storeChanges(size){
    if(size != undefined && size != NaN){
        let storeval = {"fontSize":[parseInt(size)]};
        browser.storage.local.set(storeval);
        console.log("Stored Changed value " + size);
    }
}
function reloadPage(){
    browser.tabs.query({active: true, currentWindow: true}, function(tabs) {
        browser.tabs.update(tabs[0].id, {url: tabs[0].url});
    });
}
storePromise = browser.storage.local.get(null)
storePromise.then((storeVal) => {
    if(JSON.stringify(Object.keys(storeVal))=="[]" || storeVal.fontSize[0] == NaN){
        if(textBox.innerHTML != "")
            browser.storage.local.set({"fontSize":[parseInt(textBox.innerHTML)]});
        else{
            browser.storage.local.set({"fontsize":[0]});
            textBox.innerHTML = 0;
        }
        console.log("There is no stored Data : " + textBox.innerHTML);
    }
    else{
        textBox.innerHTML = parseInt(storeVal.fontSize[0]);
        console.log("Loaded value into extension : " + storeVal.fontSize[0]);
    }
},onError);

document.getElementById('plus').addEventListener("click",() => {
    let oldVal = textBox.innerHTML;
    if(textBox.innerHTML < -maxsize){
        textBox.innerHTML = -maxsize;
    }
    else if(textBox.innerHTML < maxsize){
        textBox.innerHTML = parseInt(textBox.innerHTML) + 1;
    }
    else if(textBox.innerHTML > maxsize){
        textBox.innerHTML = maxsize;
    }    
    if(oldVal != textBox.innerHTML){
        storeChanges(textBox.innerHTML);
        reloadPage();
    }
});
document.getElementById('minus').addEventListener("click",() => {
    let oldVal = textBox.innerHTML;
    if(textBox.innerHTML > maxsize){
        textBox.innerHTML = maxsize;
    }
    else if(textBox.innerHTML > -maxsize){
        textBox.innerHTML = parseInt(textBox.innerHTML) - 1;
    }
    else if(textBox.innerHTML < -maxsize){
        textBox.innerHTML = -maxsize;
    }
    if(oldVal != textBox.innerHTML){
        storeChanges(textBox.innerHTML);
        reloadPage();
    }
});

