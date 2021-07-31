package com.skilldistillery.application.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.application.entities.User;
import com.skilldistillery.application.repositories.UserRepository;

@Service
public class UserServiceImpl implements UserService {
	
	@Autowired
	UserRepository userRepo;

	@Override
	public List<User> getAllUsers() {
		return userRepo.findAll();
	}

	@Override
	public User createNewUser(User user) {
		User managedUser = null;
		try {
			managedUser = userRepo.saveAndFlush(user);
		} catch (Exception e) {
			
		}
		return managedUser;
	}

	@Override
	public boolean userNameExist(User user) {
		return userRepo.findByUsername(user.getUsername()) != null ? true : false;
	}

	@Override
	public User updateUser(User user) {
		try {
			userRepo.saveAndFlush(user);
		} catch (Exception e) {
			user = null;
		}
		return user;
	}

	@Override
	public User getUserById(int id) {
		return userRepo.getById(id);
	}
	
}
