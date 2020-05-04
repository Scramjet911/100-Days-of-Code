function alertNotify(){
    browser.notifications.create({
        "type" : "basic",
        "title" : "Damn Its an alert",
        "message" : "Well what do we have here....",
        "iconUrl" : "icons/welldamn.jpg"
    });
}
browser.browserAction.onClicked.addListener(alertNotify);