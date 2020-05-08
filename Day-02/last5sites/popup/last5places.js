function extractHostname(url) {
    let hostname;
    //find & remove protocol (http, ftp, etc.) and get hostname

    if (url.indexOf("//") > -1) {
        hostname = url.split('/')[2];
    }
    else {
        hostname = url.split('/')[0];
    }

    //find & remove port number
    hostname = hostname.split(':')[0];
    //find & remove "?"
    hostname = hostname.split('?')[0];

    return hostname;
}
function showList(){
    var retVal = browser.storage.local.get(null);
    retVal.then((headVal) => {
        if(JSON.stringify(Object.keys(headVal)) != JSON.stringify([])){
            var listLen = headVal["data"].length;
            sites = document.getElementById('siteList');
            if(listLen>0){
                var i;
                for(i = 0; i<=listLen; i++){
                    if(headVal.data[i] == '' || headVal.data[i]==undefined)
                        continue;
                    listElem = document.createElement('li');
                    urlLink = document.createElement('a');
                    let hostname = extractHostname(headVal.data[i]);
                    linkText = document.createTextNode(hostname);
                    urlLink.appendChild(linkText);
                    urlLink.href = headVal.data[i];
                    listElem.appendChild(urlLink);
                    sites.appendChild(listElem);
                }
            }
        }
    },onError);
}

function onError(error) {
    console.log(error);
}

console.log("Extension Script Loaded")
showList();

