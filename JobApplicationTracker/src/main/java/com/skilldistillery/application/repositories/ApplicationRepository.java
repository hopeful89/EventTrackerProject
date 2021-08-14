package com.skilldistillery.application.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.application.entities.Application;

public interface ApplicationRepository extends JpaRepository<Application, Integer> {
	List<Application> findByUser_username(String username);
	Application findByIdAndUser_username(int appId, String username);
}
