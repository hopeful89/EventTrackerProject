package com.skilldistillery.application.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.application.entities.Application;
import com.skilldistillery.application.repositories.ApplicationRepository;

@Service
public class ApplicationServiceImpl implements ApplicationService{

	@Autowired
	ApplicationRepository appRepo;

	@Override
	public List<Application> allApplications() {
		return appRepo.findAll();
	}
	
	
}
