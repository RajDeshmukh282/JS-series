 // Select the form element
        const form = document.getElementById("bmi-form");

        // Add an event listener for the form submission
        form.addEventListener("submit", function (event) {
            // Prevent the form from submitting in the traditional way
            event.preventDefault();

            // Select the input and results elements
            const heightInput = document.querySelector("#height");
            const weightInput = document.querySelector("#weight");
            const results = document.querySelector("#results");

            // Get the values and convert them to floating-point numbers
            const height = parseFloat(heightInput.value);
            const weight = parseFloat(weightInput.value);

            // 1. Clear previous results and error messages
            results.innerHTML = '';

            // 2. Validate the user's input
            // Check if height is not a number or is less than or equal to zero
            if (isNaN(height) || height <= 0) {
                results.innerHTML = `<span style="color: red;">Please enter a valid height.</span>`;
                return; // Stop the function execution
            }
            // Check if weight is not a number or is less than or equal to zero
            if (isNaN(weight) || weight <= 0) {
                results.innerHTML = `<span style="color: red;">Please enter a valid weight.</span>`;
                return; // Stop the function execution
            }

            // 3. Calculate the BMI
            // The formula is weight (kg) / [height (m)]^2. We convert cm to m by dividing by 100.
            // Math.pow(number, exponent) is used for squaring.
            // .toFixed(2) rounds the result to 2 decimal places.
            const bmi = (weight / Math.pow(height / 100, 2)).toFixed(2);

            // 4. Determine the BMI category and corresponding color for feedback
            let category = '';
            let color = '';

            if (bmi < 18.5) {
                category = 'Underweight';
                color = '#ffc107'; // A yellow/amber color
            } else if (bmi >= 18.5 && bmi <= 24.9) {
                category = 'Healthy Weight';
                color = '#28a745'; // A green color
            } else if (bmi >= 25 && bmi <= 29.9) {
                category = 'Overweight';
                color = '#fd7e14'; // An orange color
            } else {
                category = 'Obesity';
                color = '#dc3545'; // A red color
            }

            // 5. Display the final, styled result to the user inside the results div
            results.innerHTML = `
                <span>Your BMI is: <strong>${bmi}</strong></span>
                <br>
                <span style="color: ${color};">This is considered <strong>${category}</strong>.</span>
            `;
        });