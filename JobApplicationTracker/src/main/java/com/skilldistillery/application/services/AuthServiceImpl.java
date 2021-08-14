package com.skilldistillery.application.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.skilldistillery.application.entities.User;
import com.skilldistillery.application.repositories.UserRepository;

@Service
public class AuthServiceImpl implements AuthService {
	
	@Autowired
	PasswordEncoder encoder;
	@Autowired
	UserRepository userRepo;

	@Override
	public User register(User user) {
		String encodedPW = encoder.encode(user.getPassword());
		user.setPassword(encodedPW); // only persist encoded password
		user.setEnabled(true);
		// set other fields to default values

		try {
			userRepo.saveAndFlush(user);
		} catch (Exception e) {
			user = null;
		}
		return user;
	}

}
