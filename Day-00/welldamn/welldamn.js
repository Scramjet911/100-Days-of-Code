function alertNotify(){
    browser.notifications.create({
        "type" : "basic",
        "title" : "Damn Its an alert",
        "message" : "Well what do we have here....",
        "iconUrl" : "icons/welldamn.jpg"
    });
    console.log("Background Script Loaded");

}
browser.browserAction.onClicked.addListener(alertNotify);