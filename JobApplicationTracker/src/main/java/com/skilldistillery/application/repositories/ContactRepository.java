package com.skilldistillery.application.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.application.entities.Contact;
import com.skilldistillery.application.entities.User;


public interface ContactRepository extends JpaRepository<Contact, Integer> {
	List<Contact> findByApplication_IdAndApplication_User_username(int applicationId, String username);
}
