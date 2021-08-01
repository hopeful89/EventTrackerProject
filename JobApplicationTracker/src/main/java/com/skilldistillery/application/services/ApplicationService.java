package com.skilldistillery.application.services;

import java.util.List;

import com.skilldistillery.application.entities.Application;


public interface ApplicationService {
	List<Application> allApplications();
	Application createNewApplication(Application app, int userId);
	List<Application> findAllApplicationsByUserId(int userId);
	Application findApplicationByUserAndAppId(int appId, int userId);
	Application updateApplication(int userId, Application app);
	boolean deleteApplication(int userId, int appId);
}
