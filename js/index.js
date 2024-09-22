document.getElementById("donation-btn")
    .addEventListener("click", function () {
        document.getElementById("history-div").classList.add("hidden");
        document.getElementById("donation-div").classList.remove("hidden");

        // color change
        document.getElementById("donation-btn").classList.add("bg-primary-color");
        document.getElementById("donation-btn").classList.remove("bg-white");
        document.getElementById("history-btn").classList.add("bg-white");
    })

document.getElementById("history-btn")
    .addEventListener("click", function () {
        document.getElementById("history-div").classList.remove("hidden");
        document.getElementById("donation-div").classList.add("hidden");
        // color change
        document.getElementById("history-btn").classList.add("bg-primary-color");
        document.getElementById("history-btn").classList.remove("bg-white");
        document.getElementById("donation-btn").classList.remove("bg-primary-color");
        document.getElementById("donation-btn").classList.add("bg-white");
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
        document.getElementById("my_modal").showModal();
    })


document.getElementById("donate-btn-2").
    addEventListener("click", function () {
        const event = document.getElementById("event-2").innerText;
        const amount = document.getElementById("donation-2").value;
        const oldBalance = document.getElementById("balance-amount").innerText;
        const newBalance = parseInt(oldBalance) + parseInt(amount);
        document.getElementById("balance-amount").innerText = newBalance;
        document.getElementById("event-2").innerText = parseFloat(event) + parseFloat(amount);

        // show modal
        document.getElementById("my_modal").showModal();
    })

document.getElementById("donate-btn-3").
    addEventListener("click", function () {
        const event = document.getElementById("event-3").innerText;
        const amount = document.getElementById("donation-3").value;
        const oldBalance = document.getElementById("balance-amount").innerText;
        const newBalance = parseInt(oldBalance) + parseInt(amount);
        document.getElementById("balance-amount").innerText = newBalance;
        document.getElementById("event-3").innerText = parseFloat(event) + parseFloat(amount);

        // show modal
        document.getElementById("my_modal").showModal();
    })