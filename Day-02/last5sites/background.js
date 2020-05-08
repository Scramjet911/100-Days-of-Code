function addtolist(tabId, changeInfo, tabInfo){
    currSite = changeInfo.url;
    // console.log(currSite, tabId, tabInfo);
    if(currSite){
        var headRes = browser.storage.local.get(null);
        headRes.then((headVal) => {
            var listLen;
            console.log("Header File Read\n" + headVal.keys);
            if(JSON.stringify(Object.keys(headVal)) == JSON.stringify([])){
                listLen = 1;
                console.log("There is no stored Data");
                let storeVal = {"data":[currSite]};
                browser.storage.local.set(storeVal);
            }
            else{
                console.log("Stored Data Found : " + Object.keys(headVal));
                
                let urlList = headVal.data;
                if((currSite != undefined) && (urlList[urlList.length-1] != currSite)){
                    listLen = urlList.push(currSite);
                
                    console.log("Added element "+ currSite);
                    console.log("Current List Length : " + listLen);
                    if(listLen > 5){
                        let remElement = urlList.shift();
                        console.log("Number of Stored links greater than 5, Removed Element : " + remElement);
                    }
                    // console.log("Final array : " + urlList);
                    let storeVal = {"data":urlList};
                    browser.storage.local.remove("data");
                    browser.storage.local.set(storeVal);
                }
            }
            browser.storage.local.get(null,(storedData)=>console.log(storedData.data));

        },onError);
}
}


function onError(error) {
    console.log(error);
}

// console.log("Started Background Task")
browser.tabs.onUpdated.addListener(addtolist);
// browser.tabs.onActivated.addListener(addtolist);