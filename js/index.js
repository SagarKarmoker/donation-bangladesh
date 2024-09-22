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

        // input validation
        inputValidation(amount, oldBalance);

        const checkValidation = inputValidation(amount, oldBalance);

        if (checkValidation) {
            const newBalance = parseInt(oldBalance) - parseInt(amount);
            document.getElementById("balance-amount").innerText = newBalance;
            document.getElementById("event-1").innerText = parseFloat(event) + parseFloat(amount);

            // show modal
            document.getElementById("my_modal").showModal();

            // create history
            const history = createHistory(amount, "Flood-2024", "Noakhali, Bangladesh");
            document.getElementById("histories").appendChild(history);
        }
    })


document.getElementById("donate-btn-2").
    addEventListener("click", function () {
        const event = document.getElementById("event-2").innerText;
        const amount = document.getElementById("donation-2").value;
        const oldBalance = document.getElementById("balance-amount").innerText;

        // input validation
        inputValidation(amount, oldBalance);

        const checkValidation = inputValidation(amount, oldBalance);

        if (checkValidation) {
            const newBalance = parseInt(oldBalance) - parseInt(amount);
            document.getElementById("balance-amount").innerText = newBalance;
            document.getElementById("event-2").innerText = parseFloat(event) + parseFloat(amount);

            // show modal
            document.getElementById("my_modal").showModal();

            // create history
            const history = createHistory(amount, "Flood Relief", "Feni, Bangladesh");
            document.getElementById("histories").appendChild(history);
        }
    })

document.getElementById("donate-btn-3").
    addEventListener("click", function () {
        const event = document.getElementById("event-3").innerText;
        const amount = document.getElementById("donation-3").value;
        const oldBalance = document.getElementById("balance-amount").innerText;

        // input validation
        const checkValidation = inputValidation(amount, oldBalance);

        if (checkValidation) {
            const newBalance = parseInt(oldBalance) - parseInt(amount);
            document.getElementById("balance-amount").innerText = newBalance;
            document.getElementById("event-3").innerText = parseFloat(event) + parseFloat(amount);

            // show modal
            document.getElementById("my_modal").showModal();

            // create history
            const history = createHistory(amount, "Aid for Injured", "Dhaka, Bangladesh");
            document.getElementById("histories").appendChild(history);
        }
    })

function createHistory(amount, event, place) {
    const currentTime = new Date();
    const txDiv = document.createElement("div");
    txDiv.innerHTML = `
    <div class="card lg:card-side bg-base-100 border p-6 gap-x-4">
        <div class="flex flex-col gap-y-3">
            <p class="font-bold">${amount} Taka is Donated for ${event} at ${place}</p>
            <p>Date : ${currentTime.toString()}</p>
        </div>
    </div>
        `
    return txDiv;
}

function inputValidation(input, balance) {
    let valid = true;
    if (parseFloat(input) < 0) {
        alert("Negative value is not allowed");
        valid = false;
    }
    else if (parseFloat(input) > parseFloat(balance)) {
        alert("Insufficient balance");
        valid = false;
    } else if (parseFloat(input) == 0) {
        alert("Zero value is not allowed");
        valid = false;
    } else if (input == "") {
        alert("Empty value is not allowed");
        valid = false;
    }

    return valid;
}