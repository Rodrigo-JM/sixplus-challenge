# SixPlus Coding Challenge

Welcome to the SixPlus coding challenge! Please read the following instructions carefully.

**Your goal is to set up an application which enables the user to view and manage shipments.**

# Contents

-   [Business need](#business-need)
-   [Use cases](#use-cases)
-   [Evaluation criteria](#evaluation-criteria)
    -   [Technology requirements](#technology-requirements)
    -   [Code requirements](Criteria.md#must-have)
-   [How to submit](#how-to-submit)
-   [How to run API server](#how-to-run-api-server)
-   [Time limit](#time-limit)

# Business need

The main goal is for the user to check the shipments at a glance. This allows users to take faster decisions and plan ahead of time.

Providing information to the customer increases transparency and reduces communication issues.

# Use cases

- The user shall be able to:
  - See shipments in pages of 20 elements per page
  - Search by shipment id
  - Sort by different fields (e.g. id, name) in ascending/descending order
  - View the shipment information for each shipment on a separate shipment details page
  - Update the shipment name (should persist when the page is reloaded)

You should not have to refresh the page to meet any of the above requirements.

# Evaluation criteria

# Givens
A RESTful API for `shipments` is provided with the challenge. To run, follow: [How to run API server](#how-to-run-api-server)

## Technology requirements

You should primarily use JavaScript to code this, but you are welcome to use any frameworks you are comfortable with, but keep in mind that your finished product should be a single page app.

## Code requirements

The full criteria for evaluating the coding challenge can be found [here](./Criteria.md).

# How to submit

- Complete your project as described above
- Make sure that there are scripts to start both the server and the client.
- Ensure everything you want to commit is committed before you bundle.
- Create a git bundle: `git bundle create your_name.bundle --all`
- Email the bundle file to jessica@sixplus.com.

**In order to be fair to all candidates, please refrain from sharing your solution in a public GitHub repo**

# How to run API server

The boilerplate includes a small service for data fetching. The file `db.json` includes all the necessary data to achieve the goal. Please follow the steps below to start the server:

```
yarn or npm install .
yarn server or npm run server
```

Check [json-server](https://github.com/typicode/json-server) for more information.

# Time limit

There is no hard time limit for this coding challenge, but please plan to have a version pepared by your follow up interview. While we appreciate all the effort put into the challenge, we also do not want to take up too much of your time. Our advice is to focus on making sure [that the tier one objectives are met](Criteria.md#must-have) before moving on to secondary objectives. Happy coding!
