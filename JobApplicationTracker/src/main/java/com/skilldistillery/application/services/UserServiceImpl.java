package com.skilldistillery.application.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.skilldistillery.application.entities.User;
import com.skilldistillery.application.repositories.UserRepository;

@Service
public class UserServiceImpl implements UserService {
	
	@Autowired
	UserRepository userRepo;
	@Autowired
	PasswordEncoder encoder;

	@Override
	public long getAllUsersCount() {
		return userRepo.count();
	}

	@Override
	public User updateUser(User user, String username) {
		User managedUser = userRepo.findByUsername(username);

		if(encoder.matches(user.getPassword(), managedUser.getPassword())) {
			user.setPassword(managedUser.getPassword());
		}else {
			user.setPassword(encoder.encode(user.getPassword()));
		}
		
		try {
			if(user.getId() == managedUser.getId()) {
				userRepo.saveAndFlush(user);
			}
		} catch (Exception e) {
			user = null;
		}
		return user;
	}

	
}
