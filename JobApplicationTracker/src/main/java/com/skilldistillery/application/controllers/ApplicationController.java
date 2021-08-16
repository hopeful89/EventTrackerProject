package com.skilldistillery.application.controllers;

import java.security.Principal;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.application.entities.Application;
import com.skilldistillery.application.services.ApplicationService;

@CrossOrigin({"*", "http:localhost:4205"})
@RestController
@RequestMapping("api")
public class ApplicationController {
	
	@Autowired
	private ApplicationService appSvc;
	

	
	@PostMapping("user/applications")
	public Application createNewUserApplication(@RequestBody Application app, HttpServletResponse res, HttpServletRequest req, Principal principal) {
		System.out.println(app);
		System.out.println("**********************");
		Application newApp = appSvc.createNewApplication(app, principal.getName());
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
	
	@GetMapping("user/applications")
	public List<Application> showApplicationsByUsername(Principal principal){
		return appSvc.findAllApplicationsByUsername(principal.getName());
	}
	
	@GetMapping("user/applications/{appId}")
	public Application showSingleApplication(@PathVariable int appId, HttpServletResponse res, Principal principal){
		Application app = appSvc.findApplicationByUsernameAndAppId(appId, principal.getName());
		if(app == null) {
			res.setStatus(404);
		}
		
		return app;
	}
	
	@PutMapping("user/applications")
	public Application updateApplication(@RequestBody Application app, HttpServletResponse res, Principal principal){
		Application application = appSvc.updateApplication(principal.getName(), app);
		if(app == null) {
			res.setStatus(400);
		}
		
		return application;
	}
	
	@DeleteMapping("user/applications/{appId}")
	public void deleteApplicationByUserAndAppId(@PathVariable int appId,Principal principal, HttpServletResponse res) {
		boolean isDeleted = appSvc.deleteApplication(appId, principal.getName());
		if(isDeleted) {
			res.setStatus(204);
		}else {
			res.setStatus(404);
		}
	}
}
