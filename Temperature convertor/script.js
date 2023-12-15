function convertTemperature() {
    // Get input values
    var temperature = parseFloat(document.getElementById('temperature').value);
    var unit = document.getElementById('unit').value;

    // Check if the input temperature is a valid number
    if (!isNaN(temperature)) {
        // Perform the temperature conversion
        var result;
        if (unit === 'celsius') {
            result = (temperature * 9/5) + 32;
            result = result.toFixed(2) + ' °F';
        } else if (unit === 'fahrenheit') {
            result = (temperature - 32) * 5/9;
            result = result.toFixed(2) + ' °C';
        }

        // Display the result
        var resultElement = document.getElementById('result');
        resultElement.innerHTML = 'Converted Temperature: ' + result;
    } else {
        alert('Please enter a valid temperature.');
    }
}
