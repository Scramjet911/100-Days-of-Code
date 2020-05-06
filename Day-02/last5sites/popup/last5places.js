function showList(){
    var headVal = browser.storage.local.get("0");
    headVal.then(() => {
        if(headVal != null){
            var listLen = headVal["0"];
            list = document.getElementById('siteList');
            if(parseInt(listLen)>0){
                var i;
                for(i = 0; i<=parseInt(listLen); i++){
                    listDisplay = document.createElement('div');
                    para = document.createElement('p')
                    para.textContent((browser.storage.local.get(i.toString()))[i.toString()]);
                    listDisplay.appendChild(para);
                }
                list.appendChild(listDisplay);
            }
        }
    },onError);
}

function onError(error) {
    console.log(error);
}

console.log("Extension Script Loaded")
showList();

