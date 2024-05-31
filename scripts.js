


document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    const successMessage = document.querySelector('.success');
    const errorMessage = document.querySelector('.error');

    form.addEventListener('submit', async function (e) {
        e.preventDefault();
        const formData = new FormData(form);
        const response = await fetch(form.action, {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        });

        if (response.ok) {
            form.reset();
            successMessage.style.display = 'block';
            errorMessage.style.display = 'none';
        } else {
            successMessage.style.display = 'none';
            errorMessage.style.display = 'block';
        }
    });
});
