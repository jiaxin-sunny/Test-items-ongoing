function clearshow() {
    var s = document.getElementById("t");
    s.value = ""
}

function numr(num) {
    var s = document.getElementById("t");
    s.value = s.value + document.getElementById(num).value;
}

function resultshow() {
    var s = document.getElementById("t");
    s.value = eval(s.value);
}

function onload() {
    document.getElementById("t").focus();
}
