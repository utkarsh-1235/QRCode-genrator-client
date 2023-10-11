document.addEventListener('DOMContentLoaded', function () {
    const otpForm = document.getElementById('otpForm');
    const phoneNumberInput = document.getElementById('phoneNumber');
    const sendOTPButton = document.getElementById('sendOTP');
    const verifyOTPForm = document.getElementById('verifyOTPForm');
    const otpCodeInput = document.getElementById('otpCode');
    const verifyOTPButton = document.getElementById('verifyOTP');
    const resultDiv = document.getElementById('result');

    sendOTPButton.addEventListener('click', async () => {
        const phoneNumber = phoneNumberInput.value;
        const requestData = {
            phoneNumber: phoneNumber
        };

        try {
            // Make a POST request to your backend /send-otp route
            const response = await fetch('/api/auth/send-otp', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(requestData),
            });

            if (response.ok) {
                const data = await response.json();

                if (data.success) {
                    // Handle a successful response, e.g., display a message
                    resultDiv.innerHTML = `OTP sent successfully to ${phoneNumber}`;
                } else {
                    // Handle an unsuccessful response, e.g., display an error message
                    resultDiv.innerHTML = `Error: ${data.message}`;
                }
            } else {
                // Handle other HTTP errors
                resultDiv.innerHTML = 'Error: Failed to send OTP.';
            }
        } catch (error) {
            console.error(error);
            resultDiv.innerHTML = 'Error: Something went wrong.';
        }
    });

    // Add similar logic for verifying OTP when the verifyOTPButton is clicked
});
