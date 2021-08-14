package com.skilldistillery.application.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.application.entities.Application;
import com.skilldistillery.application.entities.Contact;
import com.skilldistillery.application.entities.User;
import com.skilldistillery.application.repositories.ApplicationRepository;
import com.skilldistillery.application.repositories.ContactRepository;
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
	@Autowired
	ContactRepository contactRepo;

	@Override
	public Long allCount() {
		return appRepo.count();
	}

	@Override
	public Application createNewApplication(Application app, String username) {
		
		app.setStatus(statusRepo.getById(app.getStatus().getId()));
		
		try {
			User user = userRepo.findByUsername(username);
			app.setUser(user);
			appRepo.saveAndFlush(app);
		} catch (Exception e) {
			app = null;
		}
		return app;
	}

	@Override
	public List<Application> findAllApplicationsByUsername(String username) {
		return appRepo.findByUser_username(username);
	}

	@Override
	public Application findApplicationByUsernameAndAppId(int appId, String username) {
		Application app = appRepo.findByIdAndUser_username(appId, username);
		return app;
	}

	@Override
	public Application updateApplication(String username, Application application) {
		User user = userRepo.findByUsername(username);
		Optional<Application> app = appRepo.findById(application.getId());
		if(application.getStatus() == null) {
			application.setStatus(statusRepo.getById(1));
		}
		if(user != null && user.getApplications().contains(application)) {
			if(application.getUser() == null) {
				application.setUser(user);
			}
			if(application.getContacts() == null && app.get().getContacts() != null) {
				application.setContacts(app.get().getContacts());
			}
			appRepo.saveAndFlush(application);
			return application;
		}
		
		return null;
	}

	@Override
	public boolean deleteApplication(int appId, String username) {
		User user = userRepo.findByUsername(username);
		Optional<Application> app = appRepo.findById(appId);
		if(user != null && app.isPresent()) {
			if(user.getApplications().contains(app.get())) {
				for(Contact contact : app.get().getContacts()) {
					contactRepo.delete(contact);
				}
				app.get().setUser(null);
				app.get().setStatus(null);
				appRepo.delete(app.get());
				return true;
			}
		}
		return false;
	}
	
	
}
