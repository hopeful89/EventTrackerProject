package com.skilldistillery.application.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
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
}
