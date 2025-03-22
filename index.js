document.addEventListener("DOMContentLoaded", function () {
    const resetForm = document.getElementById("resetForm");

    if (resetForm) {
        resetForm.addEventListener("submit", function (event) {
            event.preventDefault();
            const email = document.getElementById("resetEmail").value;
            alert("Un lien de réinitialisation a été envoyé à : " + email);
        });
    }
});
