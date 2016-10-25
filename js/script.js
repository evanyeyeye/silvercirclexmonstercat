var wrapper = document.getElementById("wrapper");
document.onclick = function() {
    document.getElementById("signup-button").onclick = function() {};
    document.getElementById("next-button").onclick = function() {
        this.remove();
        document.getElementById("bar-title").innerText = "2. Like my track";
    };
}
document.getElementById("signup-button").addEventListener("click", function() { togglePopup("https://splice.com/accounts/sign_up") });
document.getElementById("signup-button").addEventListener("touchstart", function() { togglePopup("https://splice.com/accounts/sign_up") });
document.getElementById("next-button").addEventListener("click", function() { togglePopup("https://splice.com/SilverCircle/mcatmix2016") });
document.getElementById("next-button").addEventListener("touchstart", function() { togglePopup("https://splice.com/SilverCircle/mcatmix2016") });

function togglePopup(url) {
    var popup = document.getElementById("popup");
    document.getElementById("bar-title")
    popup.style.opacity = 1;
    popup.style.visibility = "visible";
    var iframe = popup.children[1];
    iframe.src = url;
    iframe.width = "500px";
    iframe.height = "500px";
}

document.getElementById("exit-button").onclick = function() {
    popup.style.opacity = 0;
    popup.style.visibility = "hidden";
}