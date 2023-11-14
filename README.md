# React + NestJS + TypeScript Invoice App

## Description

This application is a full-stack solution using React, NestJS, and TypeScript, designed for handling and viewing invoices. The app allows users to log in, view a table of invoices, sort them, and view detailed information about each invoice. The backend is built with NestJS and TypeScript, while the frontend leverages React. The database is MySQL, and Prisma is used as the ORM. The frontend is styled with Material UI and Moment.js is used for date handling.

## Installation Instructions

1. Navigate to both the frontend and backend folders and run npm install to install all dependencies.
2. Create a MySQL database and update the .env file in the backend folder with your database URL in place of the default (mysql://root:password@127.0.0.1:3306/altametrics).
3. In the backend folder, run npm run migrate and npm run seed to migrate and seed the database.
4. Start the backend server with npm run start and the frontend application with npm run dev.

## Usage

Two test accounts are provided:

- Email: test@test.com, Password: password
- Email: test2@test.com, Password: password

Log in using these credentials to view a table of invoices. You can sort the invoices by clicking on the column titles or view detailed invoice information by clicking on individual rows.

## Technologies Used

- Backend: NestJS, TypeScript, Prisma, MySQL
- Frontend: React, TypeScript, Redux, Material UI, Moment.js

## Features

- User authentication with pre-seeded accounts.
- View and sort invoices in a table format.
- Click on an invoice to display detailed information.
- Backend API built with Node.js, NestJS, and TypeScript.
- Frontend application developed with React and TypeScript, using Material UI for styling and Moment.js for date handling.
