// donation.js

document.getElementById("donationForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const amount = document.getElementById("amount").value;
    const phone = document.getElementById("phone").value;
    const messageBox = document.getElementById("message");

    // Simple validation
    if (amount <= 0) {
        messageBox.innerHTML = "Please enter a valid amount.";
        return;
    }

    messageBox.innerHTML = "Processing your donation...";

    // Simulate a mobile money transaction request
    processDonation(amount, phone)
        .then(response => {
            messageBox.innerHTML = response.message;
        })
        .catch(error => {
            messageBox.innerHTML = "Error: " + error.message;
        });
});

function processDonation(amount, phone) {
    // Replace this with your real backend API call
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ message: "Thank you for your donation of GHC " + amount + "!" });
            // Or reject({ message: "Transaction failed. Please try again." });
        }, 2000);
    });
}
