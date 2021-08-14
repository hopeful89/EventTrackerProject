package com.skilldistillery.application.services;

import java.util.List;

import com.skilldistillery.application.entities.Application;


public interface ApplicationService {
	Long allCount();
	Application createNewApplication(Application app, String username);
	List<Application> findAllApplicationsByUsername(String username);
	Application findApplicationByUsernameAndAppId(int appId, String username);
	Application updateApplication(String username, Application app);
	boolean deleteApplication(int appId, String username);
}
