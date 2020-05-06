function addtolist(tabId, changeInfo, tabInfo){
    if(changeInfo.url){
        document.getElementById("siteList").innerHTML += changeInfo.url;

    }
}
function openMain(){
    browser.runtime.openOptionsPage();
}
browser.browserAction.onClicked.addListener(openMain)
browser.tabs.onUpdated.addListener(addtolist);
browser.tabs.onActivated.addListener(addtolist);