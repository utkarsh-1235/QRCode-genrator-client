document.addEventListener('DOMContentLoaded', function () {
    const checkQrForm = document.getElementById('checkQrForm');
    const objectIdInput = document.getElementById('objectId');
    const checkQRButton = document.getElementById('checkQR');
    const resultDiv = document.getElementById('result');

    checkQRButton.addEventListener('click', async () => {
        const objectId = objectIdInput.value;

        try {
            // Make a POST request to your backend /check-user route with the objectId
            const response = await fetch('/api/auth/check-user', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ objectId }),
            });

            if (response.ok) {
                const data = await response.json();

                if (data.success) {
                    // Handle a successful response, e.g., display a message
                    resultDiv.innerHTML = 'QR Code is available for editing.';
                } else {
                    // Handle an unsuccessful response, e.g., display an error message
                    resultDiv.innerHTML = `Error: ${data.message}`;
                }
            } else {
                // Handle other HTTP errors
                resultDiv.innerHTML = 'Error: Failed to check QR Code.';
            }
        } catch (error) {
            console.error(error);
            resultDiv.innerHTML = 'Error: Something went wrong.';
        }
    });
});
