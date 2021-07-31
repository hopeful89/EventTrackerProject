package com.skilldistillery.application.entities;

import static org.junit.jupiter.api.Assertions.*;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

class ContactTest {
	private static EntityManagerFactory emf;
	private EntityManager em;
	private Contact contact;
	
	@BeforeAll
	static void setUpBeforeClass() throws Exception {
		emf = Persistence.createEntityManagerFactory("JPAApplicationTracker");
	}

	@AfterAll
	static void tearDownAfterClass() throws Exception {
		emf.close();
	}

	@BeforeEach
	void setUp() throws Exception {
		em = emf.createEntityManager();
		contact = em.find(Contact.class, 1);
	}

	@AfterEach
	void tearDown() throws Exception {
		contact = null;
		em.close();
	}

	@Test
	@DisplayName("Contact entity")
	void test() {
		assertNotNull(contact);
		assertEquals("Brandon", contact.getFirstName());
	}
	
	@Test
	@DisplayName("Contact to Application entity")
	void test2() {
		assertNotNull(contact);
		assertEquals("Postman", contact.getApplication().getName());
	}
	
	

}
