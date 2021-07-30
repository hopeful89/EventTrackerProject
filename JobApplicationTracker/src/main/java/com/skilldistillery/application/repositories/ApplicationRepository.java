package com.skilldistillery.application.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.application.entities.Application;

public interface ApplicationRepository extends JpaRepository<Application, Integer> {

}
