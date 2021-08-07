package com.skilldistillery.application.controllers;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
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
	
	@PostMapping("applications/{appId}/contact")
	public Contact createNewContact(@RequestBody Contact contact, @PathVariable int appId, HttpServletRequest req,HttpServletResponse res) {
		Contact newContact;
		try {
			newContact = contactSvc.createContact(contact, appId);
			if(newContact == null) {
				res.setStatus(404);
				return newContact;
			}
		} catch (Exception e) {
			res.setStatus(400);
			return null;
		}
		res.setStatus(201);
		StringBuffer url = req.getRequestURL().append(newContact.getId());
		res.setHeader("location", url.toString());

		return contact;
	}
	
	@PutMapping("applications/{appId}/contact")
	public Contact updateContactWithAppId(@PathVariable int appId, @RequestBody Contact contact,  HttpServletResponse res) {
		Contact newContact;

		try {
			newContact = contactSvc.updateContact(contact, appId);
			if(newContact == null) {
				res.setStatus(404);
				return newContact;
			}
		} catch (Exception e) {
			res.setStatus(400);
		}

		return contact;
	}
	
	@DeleteMapping("applications/{appId}/contact/{contactId}")
	public void deleteContactWithAppIdAndContactId(@PathVariable int appId, @PathVariable int contactId, HttpServletResponse res) {
		Boolean isDeleted;
		try {
			isDeleted = contactSvc.deleteContact(contactId, appId);
			if(isDeleted) {
				res.setStatus(204);
				return;
			}
		} catch (Exception e) {
		}

		res.setStatus(404);
	}
}
