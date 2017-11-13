var createXMLHTTPRequest = function () {
    if (window.XMLHttpRequest) {
        return new window.XMLHttpRequest();
    }
    else if (window.ActiveXObject) {
        return new ActiveXObject('Microsoft.XMLHTTP');
    }
}

window.onload = function () {
    var div = document.getElementById("showContent");
    var btn = document.getElementById("btn");
    btn.onclick = function () {
        var xml = createXMLHTTPRequest();
        xml.open("POST", "ajax.json", true);
        xml.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xml.onreadystatechange = function () {
            if (xml.readyState == 4) {
                if (xml.status == 200) {
                    var data = JSON.parse(xml.responseText);
                    div.innerText = data.module;
                }
                else {

                }
            }
        }
        xml.send(null);
    }
}