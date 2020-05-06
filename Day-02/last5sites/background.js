function addtolist(tabId, changeInfo, tabInfo){
    if(changeInfo.url){
        document.getElementById("siteList").innerHTML += changeInfo.url;
        var headVal = browser.storage.local.get("0");
        headVal.then(() =>{
            var listLen;
            console.log("Header File Read\n");
            if(headVal == null){
                listLen = "0";
            }
            else{
                listLen = headVal["0"];
            }
            if(parseInt(listLen) < 1){
                browser.storage.local.set("0") = "1";
                browser.storage.local.set("1") = changeInfo.url;
                console.log("Added First Element\n")
            }
            else if(parseInt(listLen < 5)){
                listLen = (parseInt(listLen)+1).toString();
                browser.storage.local.set(listLen) = changeInfo.url;
                browser.storage.local.set("0") = listLen;
                console.log("Added element "+changeInfo.url);
                console.log("Number of Stored links less than 5\n")
            }
            else if(parseInt(listLen) >= 5){
                var i;
                for(i = 1; i<=4; i++){
                    browser.storage.local.set((i).toString()) = browser.storage.local.get((i+1).toString);
                }
                browser.storage.local.set("5") = changeInfo.url;
                console.log("Added element "+changeInfo.url);
                console.log("Number of Stored links greater than 5\n")
            }
        },onError);
    }
}


function onError(error) {
    console.log(error);
}

// console.log("Started Background Task")
browser.tabs.onUpdated.addListener(addtolist);
// browser.tabs.onActivated.addListener(addtolist);