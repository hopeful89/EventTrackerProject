package com.skilldistillery.application.services;

import java.util.List;

import com.skilldistillery.application.entities.User;

public interface UserService {
	long getAllUsersCount();
	User updateUser(User user, String username);

}
