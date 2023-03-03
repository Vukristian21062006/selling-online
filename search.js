var button = document.getElementById("search_button");
button.onclick = function () {
    var input = document.hetElementByld("search_field");
    var url = "https://the-internetshop.com/" + input.value;
    var google = window.open(url, "_blank");
    google.focus();
}