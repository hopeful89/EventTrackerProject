package com.skilldistillery.application.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.application.entities.Application;
import com.skilldistillery.application.entities.Status;
import com.skilldistillery.application.entities.User;
import com.skilldistillery.application.repositories.ApplicationRepository;
import com.skilldistillery.application.repositories.StatusRepository;
import com.skilldistillery.application.repositories.UserRepository;

@Service
public class ApplicationServiceImpl implements ApplicationService{

	@Autowired
	ApplicationRepository appRepo;
	@Autowired
	UserRepository userRepo;
	@Autowired
	StatusRepository statusRepo;

	@Override
	public List<Application> allApplications() {
		return appRepo.findAll();
	}

	@Override
	public Application createNewApplication(Application app, int userId) {
		if(app.getStatus() == null) {
			app.setStatus(statusRepo.getById(2));
		}
		try {
			User user = userRepo.getById(userId);
			app.setUser(user);
			appRepo.saveAndFlush(app);
		} catch (Exception e) {
			app = null;
		}
		return app;
	}

	@Override
	public List<Application> findAllApplicationsByUserId(int userId) {
		return appRepo.findByUser_Id(userId);
	}

	@Override
	public Application findApplicationByUserAndAppId(int appId, int userId) {
		Application app = appRepo.findByIdAndUser_id(appId, userId);
		return app;
	}
	
	
}
