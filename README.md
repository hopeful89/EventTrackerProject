# Application Tracker

## REST API SD week 12 - July, 30th 2021


## Overview
* IMPORTANT: No auth/security is used. Please do not use real information. The information will not be secure.
* TODO: description

## REST Endpoints


| Method | URI                | Request Body | Response Body | Function        |
|--------|--------------------|--------------|---------------|-----------------|
| GET    |  `api/user`        |              | `List<User>`  | shows all users |
| POST   | `api/user` | `{"username":"superboy89","password":"password"}` | `User`<br>`400` bad input<br>`403`duplicate username| Create a user   |
| PUT    |  `api/user/{userId}` | `{"id":6,"username":"superboy89","password":"paasdfsad","role":"false","enabled":"false"}` | `User` | Update user by id|
| POST   | `/api/user/{userID}/applications`| `"name":"Post","applyDate":"2021-07-30","deadline":"2021-08-01","linkToJob":"https://www.google.com","description":"asdfsdfsdfsdfsdfsdf","location":"anyway","salary":120000.0,"interviewDate":"2021-08-09","jobTitle":"Developer","status"`<br>the only required is name| `Application`| Create new application for user |
| GET    | `/api/user/{userID}/applications`      |              | `List<Application>`| All applications by user |
| GET    | `/api/user/{userID}/applications/{appId}`|   | `Application`| Single application by user and application id|
| PUT    | `/api/user/{userID}/applications`| `{"id":1,"name":"Postmana","applyDate":"2021-07-30","deadline":"2021-08-01","linkToJob":"https://www.google.com","description":"sweet","location":"anyway","salary":120000.0,"interviewDate":"2021-08-09","jobTitle":"Developer"}`<br>Can also take a status.  If not set it defaults to not started| `Application`| Update application for user|
| DEL    | `/api/user/{userID}/applications/{appId}` | | `void`| delete user application |
| GET    | `/api/applications/{appId}/contact` ||`List<Contact>`| Show contacts for an application by id |
| POST   | `/api/applications/{appId}/contact` |`minimum`<br> email|`Contact`| Create new contact for application by id |
| PUT    | `/api/applications/{appId}/contact/{contactId}` |`minimum`<br>email<br>`{"id":1,"firstName":"Brandon","email":"bstine@gams.com","lastName":"Stine","phoneNumber":"8675309"}`|`Contact` | Update existing contact on application by id|
| DEL    | `/api/applications/{appId}/contact/{contactId}` | | `void`| Delete contact from application|
