document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementsByClassName('toggle-button')[0];
    const navBarLinks = document.getElementsByClassName('navbar-links')[0];

    toggleButton.addEventListener('click', () => {
        navBarLinks.classList.toggle('active');
    });

    function calculateDistance() {
        var homeAddress = document.getElementById('homeAddress').value;
        var workAddress = document.getElementById('workAddress').value;
        var yearlySalary = document.getElementById('salary').value;
        var mpg = document.getElementById('mpg').value;
        var gasCost = document.getElementById('gasCost').value;
        var clothesExpense = document.getElementById('clothes').value;

        const apiKey = 'INSERT API KEY HERE';

        // Update the API request URL based on user input
        const url = `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${homeAddress}&destinations=${workAddress}&key=${apiKey}`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                if (data.status === 'OK') {
                    // Extract distance in the formatted text
                    const distanceText = data.rows[0].elements[0].distance.text;

                    // Extract numeric distance in kilometers (remove 'km' and convert to number)
                    const distanceInKm = parseFloat(distanceText.replace(' km', ''));

                    // Convert distance to miles (1 kilometer is approximately 0.621371 miles)
                    const distanceInMiles = distanceInKm * 0.621371;

                    // Display the distance in miles in the HTML
                    document.getElementById('distanceResult').innerText = `Distance: ${distanceInMiles.toFixed(2)} miles`;

                    // Display the yearly salary
                    document.getElementById('additionalInfo').innerText = `Your yearly salary is $${yearlySalary}.`;

                    // Calculate and display gas expense
                    const gasExpense = (gasCost / mpg) * distanceInMiles * 2 * 5 * 50;
                    document.getElementById('gasExpenseResult').innerText = `This is what you spend in gas every year assuming you take 2 weeks for vacation, the distance between your home and work, car MPG, and cost of gas in your area: $${gasExpense.toFixed(2)}`;

                    // Calculate and display car maintenance expense
                    const maintenanceExpense = 0.0968 * distanceInMiles * 2 * 5 * 50;
                    document.getElementById('maintenanceCostResult').innerText = `This is what the cost of car maintenance would look like going to work and back home 5 days a week assuming you take 2 weeks of vacation with the cost of maintenance per mile being 0.0968 cents: $${maintenanceExpense.toFixed(2)}`;

                    // Display clothes expense
                    document.getElementById('clothesExpenseResult').innerText = `You would spend $${clothesExpense} on clothes going into the office.`;

                    // Display lunch expense
                    const lunchOption = document.querySelector('input[name="lunchOption"]:checked');
                    const lunchExpense = lunchOption ? parseInt(lunchOption.getAttribute('data-cost')) : 0;
                    document.getElementById('lunchExpenseResult').innerText = `This is how much you currently spend on Breakfast and Lunch: $${lunchExpense.toFixed(2)}`;

                    // Calculate and display total expense
                    const totalExpense = gasExpense + maintenanceExpense + parseFloat(clothesExpense) + lunchExpense;

                    // Check if the element with ID totalExpenseResult exists
                    const totalExpenseResultElement = document.getElementById('totalExpenseResult');

                    if (totalExpenseResultElement) {
                        totalExpenseResultElement.innerText = `Total Annual Expense: $${totalExpense.toFixed(2)}`;
                    } else {
                        console.error('Element with ID totalExpenseResult not found');
                    }

                    // Display total yearly expense for going into the office
                    document.getElementById('totalExpenseMessage').innerText = `This is what you would spend yearly going into the office: $${totalExpense.toFixed(2)}`;

                    // Calculate and display additional amount needed for the same cost of living
                    const additionalAmount = totalExpense + parseFloat(yearlySalary);
                    document.getElementById('additionalAmountResult').innerText = `You would need to make $${additionalAmount.toFixed(2)} a year working in the office to keep the same cost of living lifestyle as you would working from home!`;

                } else {
                    console.error('Error fetching data from the API');
                }
            })
            .catch(error => console.error('Error:', error));
    }

    // Attach the function to the button click event
    document.getElementById('calculateButton').addEventListener('click', calculateDistance);
});