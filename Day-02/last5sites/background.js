function addtolist(tabId, changeInfo, tabInfo){
    if(changeInfo.url){
        document.getElementById("siteList").innerHTML += changeInfo.url;
        var headVal = browser.storage.local.get("0");
        headVal.then(() =>{
            var listLen;
            if(headVal == null){
                listLen = "0";
            }
            else{
                listLen = headVal["0"];
            }
            if(parseInt(listLen) < 1){
                browser.storage.local.set("0") = "1";
                browser.storage.local.set("1") = changeInfo.url;
            }
            else if(parseInt(listLen < 5)){
                listLen = (parseInt(listLen)+1).toString();
                browser.storage.local.set(listLen) = changeInfo.url;
            }
            else if(parseInt(listLen) >= 5){
                var i;
                for(i = 1; i<=4; i++){
                    browser.storage.local.set((i).toString()) = browser.storage.local.get((i+1).toString);
                }
                browser.storage.local.set("5") = changeInfo.url;
            }
        },onError);
    }
}


function onError(error) {
    console.log(error);
}

function openMain(){
    browser.runtime.openOptionsPage();
}

browser.browserAction.onClicked.addListener(openMain)
browser.tabs.onUpdated.addListener(addtolist);
browser.tabs.onActivated.addListener(addtolist);