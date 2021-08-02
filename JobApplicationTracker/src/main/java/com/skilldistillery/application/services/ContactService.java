package com.skilldistillery.application.services;

import java.util.List;

import com.skilldistillery.application.entities.Contact;

public interface ContactService {
	List<Contact> findContactByApplicationId(int applicationId);
	Contact updateContact(Contact contact, int appId);
	boolean deleteContact(int contactId, int appId);
	Contact createContact(Contact contact, int appId);
}
