package com.skilldistillery.application.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.application.entities.User;


public interface UserRepository extends JpaRepository<User, Integer> {
	User findByUsername(String string);
}
