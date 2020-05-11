var textSizeProm = browser.storage.local.get(null);
textSizeProm.then((textSize) =>{
    if(JSON.stringify(Object.keys(textSize)) == "[]"){
        textSize.fontSize = [0];
    }
    if(textSize.fontSize[0] != 0){
        let elem = document.querySelectorAll('div'), i;
        for(i = 0; i<elem.length; i++){
            let style = window.getComputedStyle(elem[i],null).getPropertyValue('font-size');
            let fsize = parseFloat(style);
            elem[i].style.fontSize = (fsize + textSize.fontSize[0]*2) + 'px';
        }
        console.log("Text Font-Size increased");
    }
});