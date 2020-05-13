function onError(err){
    console.log("Error Occurred :")
    console.log(err);
}

// function changeTextSize(tabs){
//     heading = document.querySelectorAll('h1');

    // if(details.frameId == 0){
    //     let textSizeProm = browser.storage.local.get(null);
    //     textSizeProm.then((textSize) =>{
    //         if(JSON.stringify(Object.keys(textSize)) == "[]"){
    //             textSize.fontSize = [0];
    //         }
    //         let targetSize = textSize.fontSize[0];
    //         console.log("Found Font Size(background) : " + targetSize);

    //         if(targetSize != 0){
                // let elem = document.querySelectorAll('div'), i;
                // for(i = 0; i<elem.length; i++){
                //     let style = window.getComputedStyle(elem[i],null).getPropertyValue('font-size');
                //     let fsize = parseFloat(style);
                //     elem[i].style.fontSize = (fsize + targetSize*2) + 'px';
                //     console.log("count");
                // }
                // console.log("Text Font-Size increased(background) by " + targetSize);
    //         }
    //     }, onError);
    // }
// }

// browser.tabs.onUpdated.addListener(changeTextSize);