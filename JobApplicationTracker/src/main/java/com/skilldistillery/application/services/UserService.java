package com.skilldistillery.application.services;

import java.util.List;

import com.skilldistillery.application.entities.User;

public interface UserService {
	List<User> getAllUsers();
	User createNewUser(User user);
	boolean userNameExist(User user);
	User updateUser(User user);
	User getUserById(int id);
}
