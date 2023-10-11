document.addEventListener('DOMContentLoaded', function () {
    const generateQRForm = document.getElementById('generateQRForm');
    const phoneNumberInput = document.getElementById('phoneNumber');
    const generateQRButton = document.getElementById('generateQRButton');
    const generatedQR = document.getElementById('generatedQR');
    const qrCodeImage = document.getElementById('qrCodeImage');

    generateQRButton.addEventListener('click', async () => {
        const phoneNumber = phoneNumberInput.value;

        // Make a POST request to your backend API to generate the QR code
        try {
            const response = await fetch('/api/qr/generate', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ phoneNumber }),
            });

            if (response.ok) {
                const data = await response.json();

                if (data.success) {
                    // Display the generated QR code
                    qrCodeImage.src = data.qrCodeImageUrl;
                    generatedQR.style.display = 'block';
                }
            }
        } catch (error) {
            console.error(error);
        }
    });
});
