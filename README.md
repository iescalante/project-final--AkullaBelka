# AkullaBelka v1.0

![AkullaBelka Logo](./akullalogo.png)

What is AkullaBelka? This app is my final project for the Concordia Bootcamps.

![AkullaBelka Demo](./AkullaBelkaDemo.gif)

To summarize, it's a small money-lending app which allows Borrowers and Lenders to interact with each other in monetary transactions; in other words, build relationships with money as well as trust while keeping a flow of money between the users.

### Stack used:

- MongoDB
- Express
- React
- Node.js

### Features:

- Profile Access with personal info on user and also financial info regarding his account;

- Loan requests by using the user's score which allows him/her to receive different rates and can select a Lender depending on their funds available;

- Perform a payment to clear debts whether to pay the total amount or partial payments;

- View all the user's transactions whether it is a payment, a loan or accumulated interest due to late payments;

- Late payment tracker with Cron which adds interest depending on the selected rate and on the due date;

### Challenge

- The biggest challenge in this project was to keep track of how the money was moving around from user to user and be able to balance at the end to avoid having negative numbers. It demanded tremendous diligence in the Backend which has been my weakness throughout the bootcamp but I have seen quite the improvement in my Backend code and thus making me proud of what I was able to accomplish.

- Find the best way to integrate Cron as a late payment tracker without having previous knowledge of it.
