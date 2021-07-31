package com.skilldistillery.application.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.application.entities.Status;




public interface StatusRepository extends JpaRepository<Status, Integer> {

}
