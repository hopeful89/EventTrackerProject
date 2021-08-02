# Application Tracker

## REST API SD week 12 - July, 30th 2021


## Overview
* IMPORTANT: No auth/security is used. Please do not use real information. The information will not be secure.<br>
This REST API is a program the does CRUD operations on applications, users, and contacts using a MySQL database and connecting with Spring Data JPA.

## REST Endpoints


| Method | URI                | Request Body | Response Body | Function        |
|--------|--------------------|--------------|---------------|-----------------|
| GET    |  `api/user`        |              | `List<User>`  | shows all users |
| POST   | `api/user` | `{"username":"superboy89","password":"password"}` | `User`<br>`400` bad input<br>`403`duplicate username| Create a user   |
| PUT    |  `api/user/` | `{"id":6,"username":"superboy89","password":"paasdfsad","role":"false","enabled":"false"}` | `User` | Update user by id|
| POST   | `/api/user/{userID}/applications`| `"name":"Post","applyDate":"2021-07-30","deadline":"2021-08-01","linkToJob":"https://www.google.com","description":"asdfsdfsdfsdfsdfsdf","location":"anyway","salary":120000.0,"interviewDate":"2021-08-09","jobTitle":"Developer","status"`<br>the only required is name| `Application`| Create new application for user |
| GET    | `/api/user/{userID}/applications`      |              | `List<Application>`| All applications by user |
| GET    | `/api/user/{userID}/applications/{appId}`|   | `Application`| Single application by user and application id|
| PUT    | `/api/user/{userID}/applications`| `{"id":1,"name":"Postmana","applyDate":"2021-07-30","deadline":"2021-08-01","linkToJob":"https://www.google.com","description":"sweet","location":"anyway","salary":120000.0,"interviewDate":"2021-08-09","jobTitle":"Developer"}`<br>Can also take a status.  If not set it defaults to not started| `Application`| Update application for user|
| DEL    | `/api/user/{userID}/applications/{appId}` | | `void`| delete user application |
| GET    | `/api/applications/{appId}/contact` ||`List<Contact>`| Show contacts for an application by id |
| POST   | `/api/applications/{appId}/contact` |`minimum`<br> email<br>``{firstName":"Brandon","email":"bstine@gams.com","lastName":"Stine","phoneNumber":"8675309"}``|`Contact`| Create new contact for application by id |
| PUT    | `api/applications/{appId}/contact/` |``{"id":1,"firstName":"Brandon","email":"bstine@gams.com","lastName":"Stine","phoneNumber":"8675309"}``|`Contact` | Update existing contact on application by id|
| DEL    | `/api/applications/{appId}/contact/{contactId}` | | `void`| Delete contact from application|

### Technologies used
* Java, Java Persistence API, REST API, Spring Boot, Gradle, MySQL Workbench, Postman, JSON, Apache, Tomcat

### Lessons learned

This project just enforced even more than I cant memorize everything.  Reference material is golden for when you miss one small step.  Creation of a JPA/Boot project still seems robust but it is getting easier. I was able to learn to use the MySQL workbench better, continue solidifying entity mapping, and learned something new about hibernate and lazy initialization that Eagerly fetching doesn't fix.  This project was great practice for all the annotations.  
