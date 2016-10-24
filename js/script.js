var wrapper = document.getElementById("wrapper");
document.getElementById("signup-button").addEventListener("click", function() {
    var popup = document.getElementById("popup");
    popup.style.opacity = 1;
    popup.style.visibility = "visible";
    var iframe = popup.children[1];
    iframe.src = "https://splice.com/accounts/sign_up";
    iframe.width = "500px";
    iframe.height = "500px";
})
document.getElementById("vote-button").addEventListener("click", function() {
    var popup = document.getElementById("popup");
    popup.style.opacity = 1;
    popup.style.visibility = "visible";
    var iframe = popup.children[1];
    iframe.src = "https://splice.com/accounts/sign_up";
    iframe.width = "500px";
    iframe.height = "500px";
})

document.getElementById("exit-button").addEventListener("click", function() {
    popup.style.opacity = 0;
    popup.style.visibility = "hidden";
})

