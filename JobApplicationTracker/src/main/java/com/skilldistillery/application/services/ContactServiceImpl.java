package com.skilldistillery.application.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.application.entities.Application;
import com.skilldistillery.application.entities.Contact;
import com.skilldistillery.application.repositories.ApplicationRepository;
import com.skilldistillery.application.repositories.ContactRepository;

@Service
public class ContactServiceImpl implements ContactService {
	
	@Autowired
	ContactRepository contactRepo;
	@Autowired
	ApplicationRepository appRepo;

	@Override
	public List<Contact> findContactByApplicationId(int applicationId) {
		return contactRepo.findByApplication_Id(applicationId);
	}

	@Override
	public Contact updateContact(Contact contact, int appId) {
		Optional<Application> app = appRepo.findById(appId);
		if(app.isPresent() && app.get().getContacts().contains(contact)) {
			contact.setApplication(app.get());
			contactRepo.saveAndFlush(contact);
			return contact;
		}
		return null;
	}

	@Override
	public boolean deleteContact(int contactId, int appId) {
		Optional<Application> app = appRepo.findById(appId);
		Optional<Contact> contact = contactRepo.findById(contactId);
		if(app.isPresent() && app.get().getContacts().contains(contact.get())) {
			contact.get().setApplication(null);
			contactRepo.delete(contact.get());
			return true;
		}
		return false;
	}

	@Override
	public Contact createContact(Contact contact, int appId) {
		Optional<Application> app = appRepo.findById(appId);
		if(app.isPresent()) {
			contact.setApplication(app.get());
			contactRepo.saveAndFlush(contact);
		}else {
			contact = null;
		}
		return contact;
	}



}
