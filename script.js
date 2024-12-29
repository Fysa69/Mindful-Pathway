document.addEventListener("DOMContentLoaded", () => {
    const submitButton = document.getElementById("submitFeedback");
    const feedbackInput = document.getElementById("feedbackInput");
    const confirmationMessage = document.getElementById("confirmationMessage");

    submitButton.addEventListener("click", () => {
        if (feedbackInput.value.trim() === "") {
            alert("Please enter your feedback before submitting.");
        } else {
            confirmationMessage.classList.remove("hidden");
            feedbackInput.value = ""; // Clear the input field
            setTimeout(() => {
                confirmationMessage.classList.add("hidden"); // Hide the message after 3 seconds
            }, 3000);
        }
    });
});