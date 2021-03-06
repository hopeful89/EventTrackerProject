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

class ApplicationTest {
	private static EntityManagerFactory emf;
	private EntityManager em;
	private Application app;
	
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
		app = em.find(Application.class, 1);
	}

	@AfterEach
	void tearDown() throws Exception {
		app = null;
		em.close();
	}

	@Test
	@DisplayName("Application entity")
	void test() {
		assertNotNull(app);
		assertEquals("Postman", app.getName());
	}
	
	@Test
	@DisplayName("Application to status mapping")
	void test1() {
		assertNotNull(app);
		assertEquals("Not Started", app.getStatus().getName());
	}

	@Test
	@DisplayName("Application to user mapping")
	void test2() {
		assertNotNull(app);
		assertEquals("admin", app.getUser().getUsername());
	}
	@Test
	@DisplayName("Application to Contact mapping")
	void test3() {
		assertNotNull(app);
		assertTrue(app.getContacts().size() > 0);
	}
}
