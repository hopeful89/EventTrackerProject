package com.skilldistillery.application.controllers;

import java.util.List;


import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.application.entities.User;
import com.skilldistillery.application.services.UserService;
@CrossOrigin({"*", "http:localhost:4203"})
@RestController
@RequestMapping("api")
public class UserController {
	
	@Autowired
	private UserService userSvc;
	
	@GetMapping("user")
	public List<User> getAllUsers(){
		return userSvc.getAllUsers();
	}
	
	@PostMapping("user")
	public User createNewUser(@RequestBody User user, HttpServletRequest req, HttpServletResponse res) {
		boolean userExist = userSvc.userNameExist(user);
		User newUser = null;
		if(!userExist) {
			 user.setEnabled(true);
			 newUser = userSvc.createNewUser(user);
		}else if(userExist) {
			res.setStatus(403);
			return newUser;
		}
		if(newUser == null) {
			res.setStatus(400);
			return newUser;
		}
		res.setStatus(201);
		return newUser;
	}
	
	@PutMapping("user")
	public User updateUser(@RequestBody User user, HttpServletResponse res) {
		User updatedUser = userSvc.updateUser(user);
		if(updatedUser != null) {
			res.setStatus(400);
			return updatedUser;
		}
		return user;
	}

}
