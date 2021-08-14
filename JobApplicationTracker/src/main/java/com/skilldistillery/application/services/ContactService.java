package com.skilldistillery.application.services;

import java.util.List;

import com.skilldistillery.application.entities.Contact;

public interface ContactService {
	List<Contact> findContactByApplicationId(int applicationId, String username);
	Contact updateContact(Contact contact, int appId, String username);
	boolean deleteContact(int contactId, int appId, String username);
	Contact createContact(Contact contact, int appId, String username);
}
