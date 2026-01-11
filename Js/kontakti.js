
document.addEventListener('DOMContentLoaded', () => {
    emailjs.init({
        publicKey: "PFSM7YNaYtGpgcvzA"
    });

    const form = document.getElementById("contactForm");
    const feedback = document.getElementById("formFeedback");

    if (!form) {
        console.error("Contact form not found!");
        return;
    }

    form.addEventListener("submit", async function(e) {
        e.preventDefault();

        const submitBtn = form.querySelector('#btnSubmit');
        submitBtn.disabled = true;
        submitBtn.textContent = "Sūta...";

        feedback.textContent = "Sūtu ziņu...";
        feedback.style.color = "var(--bs-primary)";
        feedback.style.display = "block";

        try {
            const result = await emailjs.sendForm(
                'default_service',
                'template_ttqfld4',
                form
            );

            console.log("SUCCESS!", result.status, result.text);

            feedback.textContent = "Ziņa nosūtīta veiksmīgi! ✓";
            feedback.style.color = "green";

            form.reset();

            setTimeout(() => {
                feedback.style.display = "none";
            }, 6000);

        } catch (err) {
            console.error("FAILED...", err);
            feedback.textContent = "Radās kļūda. Lūdzu mēģiniet vēlreiz vai rakstiet uz mcmari.info@gmail.com";
            feedback.style.color = "red";
        }
        finally {
            submitBtn.disabled = false;
            submitBtn.textContent = "Nosūtīt!";
        }
    });
});