document.getElementById("donation-btn")
.addEventListener("click", function() {
    document.getElementById("history-div").classList.add("hidden");
    document.getElementById("donation-div").classList.remove("hidden");
})

document.getElementById("history-btn")
.addEventListener("click", function() {
    document.getElementById("history-div").classList.remove("hidden");
    document.getElementById("donation-div").classList.add("hidden");

})