package com.skilldistillery.application.controllers;

import java.security.Principal;
import java.util.List;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
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
	public long getAllUsers(){
		return userSvc.getAllUsersCount();
	}
	
	
	@PutMapping("user")
	public User updateUser(@RequestBody User user, HttpServletResponse res, Principal principal) {
		User updatedUser = userSvc.updateUser(user, principal.getName());
		if(updatedUser == null) {
			res.setStatus(400);
			return updatedUser;
		}
		return user;
	}

}
