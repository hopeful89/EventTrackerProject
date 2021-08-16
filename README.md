# Application Tracker

## REST API SD week 12 - July, 30th 2021 - August 16,2021


## Overview
Tired of bloated job application tracking apps? Me too. I wanted a simple, lightweight, easy to use job application tracking app. You can see some basic metrics about the app on the home page, gain some knowledge on the about page, and track your jobs after you login.

This REST API is a program the does CRUD operations on applications, users, and contacts using a MySQL database and connecting with Spring Data JPA/Hibernate.

This is hosted at http://3.139.183.62:8080/JobApplicationTracker/

## REST Endpoints


| Method | URI                | Request Body | Response Body | Function        |
|--------|--------------------|--------------|---------------|-----------------|        
| GET    | `/login`        |              | auth  | shows all users |
| POST   | `/signup` | `{`<br>`"username":"superboy89",`<br>`"password":"password"`<br>`}` | `User`<br>`400` bad input<br>`409`duplicate username| Create a user   |
| PUT    |  `/api/user` | `{`<br>`"id":1,`<br>`"username":"superboy89",`<br>`"password":"paasdfsad",`<br>`"role":"false",`<br>`"enabled":"false"`<br>`}` | `User` | Update user by id|
| POST   | `/api/user/applications`| `{`<br>`"name":"Postmana",`<br>`"applyDate":"2021-07-30",`<br>`"deadline":"2021-08-01",`<br>`"linkToJob":"https://www.google.com",`<br>`"description":"sweet",`<br>`"location":"anyway",`<br>`"salary":120000.0,`<br>`"interviewDate":"2021-08-09",`<br>`"jobTitle":"Developer"`<br>`}`<br>the only required is name| `Application`| Create new application for user |
| GET    | `/api/user/applications`      |              | `List<Application>`| All applications by user |
| GET    | `/api/user/applications/{appId}`|   | `Application`| Single application by user and application id|
| PUT    | `/api/user/applications`| `{`<br>`"id":1,`<br>`"name":"Postmana",`<br>`"applyDate":"2021-07-30",`<br>`"deadline":"2021-08-01",`<br>`"linkToJob":"https://www.google.com",`<br>`"description":"sweet",`<br>`"location":"anyway",`<br>`"salary":120000.0,`<br>`"interviewDate":"2021-08-09",`<br>`"jobTitle":"Developer"`<br>`}`<br>Can also take a status.  If not set it defaults to not started| `Application`| Update application for user|
| DEL    | `/api/user/applications/{appId}` | | `void`| delete user application |
| GET    | `/api/applications/{appId}/contact` ||`List<Contact>`| Show contacts for an application by id |
| POST   | `/api/applications/{appId}/contact` |`minimum`<br> email<br>`{`<br>`firstName":"Brandon",`<br>`"email":"bstine@gams.com",`<br>`"lastName":"Stine",`<br>`"phoneNumber":"8675309"`<br>`}`|`Contact`| Create new contact for application by id |
| PUT    | `api/applications/{appId}/contact/` |`{"id":1,`<br>`"firstName":"Brandon",`<br>`"email":"bstine@gams.com",`<br>`"lastName":"Stine",`<br>`"phoneNumber":"8675309"`<br>`}`|`Contact` | Update existing contact on application by id|
| DEL    | `/api/applications/{appId}/contact/{contactId}` | | `void`| Delete contact from application|
| GET    | api/user | | long | total user count |
| GET | api/applications | | long | total application count

### Technologies used
* Java, Java Persistence API, REST API, Spring Boot, Gradle, MySQL Workbench, Postman, JSON, Tomcat, Javascript, Typescript, Angular, Tailwind CSS

### Lessons learned

This project just enforced even more than I cant memorize everything.  Reference material is golden for when you miss one small step.  Creation of a JPA/Boot project still seems robust but it is getting easier. I was able to learn to use the MySQL workbench better, continue solidifying entity mapping, and learned something new about hibernate and lazy initialization that Eagerly fetching doesn't fix.  This project was great practice for all the annotations.  

The angular front end took way more time than I thought it would.  I got to learn about responsive web design, tailwind css, and a host of issues that come from typescript. Overall I learned a lot from angular especially event bindings and model bindings.
