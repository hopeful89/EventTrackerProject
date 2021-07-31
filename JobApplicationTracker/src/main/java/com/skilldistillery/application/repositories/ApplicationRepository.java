package com.skilldistillery.application.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.application.entities.Application;

public interface ApplicationRepository extends JpaRepository<Application, Integer> {
	List<Application> findByUser_Id(int id);
	Application findByIdAndUser_id(int appId, int userId);
}
