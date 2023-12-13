function calculateBMI() {
    // Get input values
    var weight = document.getElementById('weight').value;
    var height = document.getElementById('height').value;

    // Check if input values are valid
    if (weight > 0 && height > 0) {
        // Calculate BMI
        var bmi = (weight / Math.pow(height / 100, 2)).toFixed(2);

        // Display result
        var resultElement = document.getElementById('result');
        resultElement.innerHTML = 'Your BMI is: ' + bmi;

        // Additional BMI categories can be added based on the calculated BMI value
        // For simplicity, this example includes only one category
        if (bmi < 18.5) {
            resultElement.innerHTML += '<br>Underweight';
        } else if (bmi >= 18.5 && bmi <= 24.9) {
            resultElement.innerHTML += '<br>Normal weight';
        } else if (bmi >= 25 && bmi <= 29.9) {
            resultElement.innerHTML += '<br>Overweight';
        } else {
            resultElement.innerHTML += '<br>Obese';
        }
    } else {
        alert('Please enter valid values for weight and height.');
    }
}
