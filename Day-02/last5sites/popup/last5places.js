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
                    listVal = document.createTextNode(headVal.data[i])
                    listElem.appendChild(listVal);
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

