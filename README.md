# SQL-Query
SQL-Query is a web-based application capable of running SQL queries and displaying the results of said query. It provides a user-friendly interface for executing SQL queries and viewing the results in a tabular format.

## Walkthrough Video
[Click here to watch the walkthrough video](#)

## Frameworks and Tools Used
- **React**: A JavaScript library for building user interfaces. [Learn more about React](https://reactjs.org/)
- **PapaParse**: A powerful CSV parser for JavaScript. [Learn more about PapaParse](https://www.papaparse.com/)
- **Ag-Grid**: An advanced data grid for JavaScript. [Learn more about Ag-Grid](https://www.ag-grid.com/)

## Page Load Time
The page load time for SQL-Query is measured using Google Chrome's Lighthouse. Details are in this [doc](public/loadTime.pdf).

## Optimizations
As the application is already lightweight, no extra effort has been put to make it more performant in addition to what is already shipped in vite boilerplate and ag-grid.
To optimize page load time and increase performance, the following steps can be taken when required - 
- Lazy loading of non-essential components to prioritize loading critical content first.
- Optimizing image sizes and using responsive design techniques to improve rendering speed on different devices.
