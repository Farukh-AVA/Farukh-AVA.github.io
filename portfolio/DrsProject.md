## Drs Project
This full-stack web application performs a physical therapy test for dancers and calculates dance ready score with comments. This website is hosted on [AWS Amplify](https://aws.amazon.com/amplify/) and is linked to the github repository for automatic deploy.

In order to simplify the design we went with a serverless architecture. The back-end of the website are [aws lamba functions](https://aws.amazon.com/lambda/). These functions are triggered by a REST API. AWS API Gateway's are used to create those rest APIs to call the lambda function.

# The project Infrastructure divided into 5 milestones.   
- [x] Front-end: Data Validation.<br>
  * Implemented a responsev form by using HTML, CSS, JS. Implemented data validation functions to prompt and check users' data.  
  <img src="https://github.com/Farukh-AVA/Farukh-AVA.github.io/blob/main/portfolio/InputData.gif"  width=500><br>
- [x] Backend: Data Preprocesing. <br>
  * Implemented AWS Lambda function that processes input data and calculates score and PT comments for each test. The function triggers from the front-end via REST API.
  * Language: Node.js
- [x] Backend: PDF Generator. <br>
   * This Lambda function generates PDF output from the data of the function above, stores it in [AWS s3](https://aws.amazon.com/s3/), and returns it to the front end.
   * Language: Python
   <img src="https://github.com/Farukh-AVA/Farukh-AVA.github.io/blob/main/portfolio/GeneratedPDF.gif"  width=500><br>
- [x] Backend: Send Email. <br>
   * This Lambda function recieves email address and s3 path and sends email to the email address with the s3 file as an attachment.
   * Language: Node.js
   <img src="https://github.com/Farukh-AVA/Farukh-AVA.github.io/blob/main/portfolio/EmailPDF.gif"  width=500><br>
- [x] Backend: Store data to Database. <br>
   * This Lambda function receive raw user input data and stores data in AWS DynamoDB.
   * Language: Node.js
- [x] Backend: Batch Upload. <br>
   * This Lambda function read an excel file with multiple tests for batch processing. The function is looping and calling Lambda functions above for precessing Drs test.
   * Language: Python
