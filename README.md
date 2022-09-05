# Auto Call Activation System
<p align="center">
  <img width="1080" alt="view-all" src="https://user-images.githubusercontent.com/98270848/188439588-7dec1121-a411-4150-ac1e-f01fbb013b65.png">
</p>

## 1. Technology Used
| Area                      | Technology                                     | Associated Client / Library  |
|:-------------------------:|:----------------------------------------------:|:----------------------------:|
| Frontend                  | **ReactJS**                                    | Axios                        |
| Backend                   | **Django**                                     | REST Framework               |
| Database                  | **SQLite3**                                    | --                           |
| Cloud Services            | **AWS** Simple Email Service (SES)             | Boto3 (AWS SDK via Python3)  |
## 2. Project Objectives

### 2.1 Create, Read, Update, Delete (CRUD) Web Application
#### Frontend, Single Page Application (SPA):
  - Create New Users
    - <img width="650" alt="add-personnel" src="https://user-images.githubusercontent.com/98270848/188439688-1e732326-399d-465c-ae74-2c1aacf5c40d.png">
  - Read All Users
    - <img width="650" alt="view-all" src="https://user-images.githubusercontent.com/98270848/188439751-5486446d-b6d5-478c-8e0b-e653bbd61ea9.png">
  - Update Existing Users

https://user-images.githubusercontent.com/98270848/188439848-f59707f3-71aa-4205-881b-ae158073d897.mp4

  - Delete Existing Users

https://user-images.githubusercontent.com/98270848/188439940-93c2667f-ca92-4de9-b437-049facd5563f.mp4

#### Backend: 
  - Model View Controller (MVC)
    - <img width="500" alt="model" src="https://user-images.githubusercontent.com/98270848/188444661-63071631-a97c-4935-a26e-fc28eac039ca.png"> < model
    - <img width="600" alt="view" src="https://user-images.githubusercontent.com/98270848/188443442-cb437890-0caf-4395-939e-2e25d18abd0d.png"> < view (react)
    - <img width="700" alt="controller" src="https://user-images.githubusercontent.com/98270848/188444183-1c612060-3473-47c8-b85d-3762e8d32683.png"> < controller

  - REST Framework
    - <img width="500" alt="serializer" src="https://user-images.githubusercontent.com/98270848/188445958-7db839bb-532b-4c5b-9441-9f8cd9b2ff3c.png"> < Serializer
    - <img width="600" alt="routes" src="https://user-images.githubusercontent.com/98270848/188446186-0d5206a3-b317-4d4f-bfca-8328c09ebf00.png"> < Routing
    - <img width="700" alt="endpoints" src="https://user-images.githubusercontent.com/98270848/188446683-8f8730ee-f8cd-4337-9058-3a1d19fb4f32.png"> < HTTP Endpoints

### 2.2 Automate Call Activation via Email Service
- Automatically send email to all existing users saved in web application.

https://user-images.githubusercontent.com/98270848/188451932-afd35a52-dfac-4d82-8b25-0f9b1cc6556c.mp4

<img width="900" alt="send-email" src="https://user-images.githubusercontent.com/98270848/188452195-0f64f72c-f0b6-4abe-8099-489b894555a3.png">

## 3. Unit Testing
<img width="600" alt="test-email" src="https://user-images.githubusercontent.com/98270848/188459163-5a3eb294-fe24-4f4c-a3cf-7d08baa1e591.png">
<img width="600" alt="test-result" src="https://user-images.githubusercontent.com/98270848/188459209-ffbb1194-bd90-4ae9-ae3b-3c62bf1bb846.png">

## 4. Acknowledgements
- [React & Django Setup Tutorial](https://youtu.be/F9o4GSkSo40)
- [Django Testing](https://docs.djangoproject.com/en/4.1/topics/testing/overview/)
- [Single Page Application Template](https://www.kirupa.com/react/creating_single_page_app_react_using_react_router.htm)
