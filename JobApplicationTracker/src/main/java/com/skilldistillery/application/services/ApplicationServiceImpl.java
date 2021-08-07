package com.skilldistillery.application.services;

import java.util.List;
import java.util.Optional;

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
		
		app.setStatus(statusRepo.getById(app.getStatus().getId()));
		
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

	@Override
	public Application updateApplication(int userId, Application application) {
		Optional<User> user = userRepo.findById(userId);
		if(application.getStatus() == null) {
			application.setStatus(statusRepo.getById(1));
		}
		if(user.isPresent() && user.get().getApplications().contains(application)) {
			if(application.getUser() == null) {
				application.setUser(user.get());
			}
			appRepo.saveAndFlush(application);
			return application;
		}
		
		return null;
	}

	@Override
	public boolean deleteApplication(int userId, int appId) {
		Optional<User> user = userRepo.findById(userId);
		Optional<Application> app = appRepo.findById(appId);
		if(user.isPresent() && app.isPresent()) {
			if(user.get().getApplications().contains(app.get())) {
				app.get().setUser(null);
				app.get().setStatus(null);
				appRepo.delete(app.get());
				return true;
			}
		}
		return false;
	}
	
	
}
