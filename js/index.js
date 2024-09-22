document.getElementById("donation-btn")
    .addEventListener("click", function () {
        document.getElementById("history-div").classList.add("hidden");
        document.getElementById("donation-div").classList.remove("hidden");
    })

document.getElementById("history-btn")
    .addEventListener("click", function () {
        document.getElementById("history-div").classList.remove("hidden");
        document.getElementById("donation-div").classList.add("hidden");
    })

// donation
document.getElementById("donate-btn-1").
    addEventListener("click", function () {
        const event = document.getElementById("event-1").innerText;
        const amount = document.getElementById("donation-1").value;
        const oldBalance = document.getElementById("balance-amount").innerText;
        const newBalance = parseInt(oldBalance) + parseInt(amount);
        document.getElementById("balance-amount").innerText = newBalance;
        document.getElementById("event-1").innerText = parseFloat(event) + parseFloat(amount);
        
        // show modal
        document.getElementById("my_modal_1").showModal()
    })
    