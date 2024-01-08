# Dance Ready Score Project Overview

The Drs Project is a full-stack web application designed for conducting a comprehensive physical therapy test tailored for dancers. The application calculates a Dance Ready Score, providing insightful comments for users. Hosted on [AWS Amplify](https://aws.amazon.com/amplify/), the application is seamlessly integrated with a GitHub repository for automated deployment.

To optimize efficiency and maintain simplicity in design, we adopted a serverless architecture. The backbone of the website is powered by [AWS Lambda functions](https://aws.amazon.com/lambda/), triggered through a REST API managed by AWS API Gateway.

## Project Infrastructure Milestones

### 1. Front-end: Data Validation
- Implemented a responsive form using HTML, CSS, and JS.
- Developed data validation functions to guide users and ensure accurate data input.

![Data Validation](https://github.com/Farukh-AVA/Farukh-AVA.github.io/blob/main/portfolio/InputData.gif)

### 2. Backend: Data Preprocessing
- Created an AWS Lambda function to process input data, calculate scores, and generate physical therapy comments.
- Integration with the front-end is achieved through a REST API.
- Language: Node.js

### 3. Backend: PDF Generator
- Developed a Lambda function that generates PDF outputs from the processed data.
- Stored the generated PDFs in [AWS S3](https://aws.amazon.com/s3/) and returned them to the front end.
- Language: Python

![PDF Generator](https://github.com/Farukh-AVA/Farukh-AVA.github.io/blob/main/portfolio/GeneratedPDF.gif)

### 4. Backend: Email Notification
- Implemented a Lambda function that accepts an email address and S3 path, sending an email with the S3 file attached.
- Language: Node.js

![Email Notification](https://github.com/Farukh-AVA/Farukh-AVA.github.io/blob/main/portfolio/EmailPDF.gif)

### 5. Backend: Database Integration
- Developed a Lambda function to receive raw user input data, storing the data in AWS DynamoDB.
- Language: Node.js

### 6. Backend: Batch Upload
- Implemented a Lambda function to read an Excel file containing multiple tests for batch processing.
- The function iteratively calls the Lambda functions above to process Drs tests.
- Language: Python

This structured and detailed approach ensures the Drs Project's robustness, scalability, and seamless functionality across its various components.

