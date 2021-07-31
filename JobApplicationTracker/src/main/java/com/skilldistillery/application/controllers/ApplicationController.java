package com.skilldistillery.application.controllers;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.application.entities.Application;
import com.skilldistillery.application.services.ApplicationService;

@RestController
@RequestMapping("api")
public class ApplicationController {
	
	@Autowired
	private ApplicationService appSvc;
	
	@GetMapping("applications")
	public List<Application> getAllApplications(){
		return appSvc.allApplications();
	}
	
	@PostMapping("user/{userID}/applications")
	public Application createNewUserApplication(@RequestBody Application app, @PathVariable int userID, HttpServletResponse res, HttpServletRequest req) {
		Application newApp = appSvc.createNewApplication(app, userID);
		if(newApp == null) {
			res.setStatus(400);
			return newApp;
		}
		res.setStatus(201);
		StringBuffer url = req.getRequestURL();
		url.append("/").append(app.getId());
		res.setHeader("location", url.toString());
		return newApp;
	}
	
	@GetMapping("user/{userId}/applications")
	public List<Application> showApplicationsByUserId(@PathVariable int userId){
		return appSvc.findAllApplicationsByUserId(userId);
	}
	
	@GetMapping("user/{userId}/applications/{appId}")
	public Application showSingleApplication(@PathVariable int userId, @PathVariable int appId, HttpServletResponse res){
		Application app = appSvc.findApplicationByUserAndAppId(appId, userId);
		if(app == null) {
			res.setStatus(404);
		}
		
		return app;
	}
}
