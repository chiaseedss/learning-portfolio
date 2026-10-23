# Farmers Market Management System

## Overview

A Flask/MySQL application for vendor, product, inventory and order administration with customer purchasing and receipts.

## Objectives

- Centralize vendor, product, stock and order records
- Support customer purchasing and digital receipts

## Technologies Used

Python, Flask, MySQL, Jinja/HTML.

## Methodology and Implementation

- Flask routes and Jinja templates implement administrative CRUD and a customer ordering interface.
- MySQL relations store vendors, products, inventory and orders; SQL queries support search and available-stock views.
- Database configuration is read from environment variables.

## Results and Outputs

- Source routes, schema and templates implement core management and receipt workflows. No automated execution result or production benchmark is documented.

## Limitations

- The report describes Flask-Login, role checks and penetration-test objectives, but these controls and test results are not established by the inspected source. They are not claimed as verified implemented security features.
- Deletion routes use GET; authentication and CSRF protection need further work. Personal seed data and credentials are excluded.

## Contributors

Sean Xander B. Aquino — MySQL schema, database connection module, initial Flask routes and templates; Remar F. Malanon — documentation and presentation introduction; Tischia Ann R. Olivares — application structure, additional features, completed frontend, remaining backend logic, documentation editing and installation demonstration. Roles are documented in the project report.
