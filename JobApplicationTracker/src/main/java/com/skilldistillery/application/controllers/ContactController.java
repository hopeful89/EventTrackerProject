package com.skilldistillery.application.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.application.entities.Contact;
import com.skilldistillery.application.services.ContactService;

@RestController
@RequestMapping("api")
public class ContactController {

	@Autowired
	ContactService contactSvc;
	
	@GetMapping("applications/{appId}/contact")
	public List<Contact> getContactByAppId(@PathVariable int appId){

		return contactSvc.findContactByApplicationId(appId);
	}
}
