package com.skilldistillery.application.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.application.entities.Contact;
import com.skilldistillery.application.repositories.ContactRepository;

@Service
public class ContactServiceImpl implements ContactService {
	
	@Autowired
	ContactRepository contactRepo;

	@Override
	public List<Contact> findContactByApplicationId(int applicationId) {
		return contactRepo.findByApplication_Id(applicationId);
	}


}
