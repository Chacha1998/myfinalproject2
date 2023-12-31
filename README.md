# myfinalproject2

Here's an updated and comprehensive breakdown of the steps needed to run my code successfully:

1. Clone or Download the Repository:

Clone the repository to your local machine using Git, or download the ZIP file and extract it.

2. Navigate to Project Directory:

Open a terminal or command prompt and navigate to the project directory.

3. Open Visual Studio Code:

Open the project in Visual Studio Code or your preferred code editor. QUICK NOTE. On line 17 you will see INSERT API KEY HERE in quotes. I submited the API key seprately as to not have my key public on github. If for any reason you are unable to see the key upon submission of the project, please email me at zac.chavez98@gmail.com or DM me in Slack and I can provide the key to run the code successfully! PS to woever is reading this please keep the '' quotes when inserting the key. You probably already knew that but better to be safe than sorry!

4. Install http-server:

Run the following command to install the http-server globally:
bash
Copy code below:

sudo npm install -g http-server

5. Start Local Server:

Start the local server using the following command:
bash
Copy code below:

http-server

This will provide you with a local server address, usually http://127.0.0.1:8080.

6. Install Moesif CORS Changer Extension:

Open Google Chrome and navigate to the Moesif CORS Changer extension page.
Add the extension to your browser.

7. Access The Application:

Open your web application in Google Chrome.
Activate the Moesif CORS Changer extension (you may need to click on the extension icon in your browser toolbar).
Enable CORS by clicking on the extension icon. You will then be taken to an Index of page. Click any of the 3 html links (about.html, home.html, contact.html). However to see the "brains" of this project, you will need to be on the home page!

8. Enter Answers to the Questions as Well as Home and Work Addresses:

Fill in all of the questions and home and work addresses in your application.

9. Calculate Distance and Expenses:

Click the "Calculate Distance" button to trigger the distance calculation and expense results.

10. View Results:

The calculated distance should be displayed on your webpage as well as results from food, clothes, gas, MPG, annual expense, and of course the total of annual expenses of going into the office!

These steps should help you run the application successfully while using the Moesif CORS Changer extension to handle CORS issues.

Now that you know how to run the code, here are the requirement I went for when building out my project:

For visual appeal and responsiveness, I went with a very basic layout but made sure to keep the same color scheme as well as keep my Nav bar clean, easy to use, and adjustable to smaller screens via hamburger menu. I made sure to complete these tasks using CSS Grid and Flexbox. The hamburger menu may not show on a small computer screen depending on screen size but I confirmed it shows for mobile devices when using the inspect tool when testing my site. Additionally while playing with code and making changes I also made sure to make enough commits and hit 14 commits at the time of this writing. UPDATE: Due to my API key being in old commits on my previous repo I decided to delete it and transfer all my code over into this repo. I will make sure too have at least 5 commits before the deadline but wanted to add reasoning as to why my amount of commits may look small. Now for the features.

I will now provide the following 3 Capstone Features I chose to go for and why I believe I achieved them.

1. Retrieve data from a third-party API and use it to display something within your app.

I achieved this by opting in for the Google Maps Matrix API as seen in my script.js file. Without referring to this API, you would not be able to calculate the distance between your home and work address. Without this, the additional calculations that come after would be incomplete and incorrect. For safety, I currently have removed the API key from my JS. I will have provided the API key upon submitting this project as well as leaving you with my email zac.chavez98@gmail.com if you need to retrieve the key to run my code!

2. Create a function that accepts two or more input parameters and returns a value that is calculated or determined by the inputs. Basic math functions don’t count (e.g. addition, etc).

I achieved this by having my js calculation accepting the home and work address inputs, taking that and calculating the distance, converting it into miles, make a special calculation that takes in the cost of gas, MPG, address distances and multiplying all of that to find the yearly consumption of gas, as well as the other calculations you can see in my js, all coming together to help you find the annual expense of going into office 5 days a week.

3. Convert user input between two formats and display the result. (e.g. Fahrenheit to Celcius, kilograms to pounds, etc)

I achieved this as in the earlier stages of getting my API key to work with my site, I finally was able to get the distance to display, however the data returned kilometers into miles. This would not be a problem in Germany, but in the US it will have an effect when calculating for MPG instead of km/l (kilometers per liter). To fix this I had to adjust my calculation to adjust the results shown to display as miles instead of kilometers. This happens at around line 29 in my js!

I believe I also may have accomplished the following Capstone features as well but was unsure and wanted to mention:

1. Calculate and display data based on an external factor (ex: get the current date, and display how many days remaining until some event)

I believe the "external factor" I accomplished would be the user inputs and getting results displayed because of those inputs

This was not required but I enjoyed making this and want to continue making it better so I thought it would be cool to add some features that I had thought of but did not have time to add but plan to do in the future:

1. Add another calculate distance button that converts everything into kilometers

2. Improve the current CSS to make it even better

3. Improve the third question (about clothes) to where it autofills based on the response from question 1 (yearly salary)

4. Host the Website onto the Web instead of the local server!
