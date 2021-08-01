package com.skilldistillery.application.services;

import java.util.List;

import com.skilldistillery.application.entities.Contact;

public interface ContactService {
	List<Contact> findContactByApplicationId(int applicationId);
}
