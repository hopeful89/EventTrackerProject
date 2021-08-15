package com.skilldistillery.application.controllers;

import java.security.Principal;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.application.entities.User;
import com.skilldistillery.application.services.AuthService;

@RestController
@CrossOrigin({"*", "http:localhost:4205"})
public class AuthController {
	
	@Autowired
	AuthService authService;

	@PostMapping(path = "/signup")
	public User register(@RequestBody User user, HttpServletResponse res) {

		user = authService.register(user);
	    if (user == null) {
	        res.setStatus(409);
	    }
	    return user;
	}
	@CrossOrigin
	@GetMapping(path = "/login")
	public Principal authenticate(Principal principal) {
	    return principal;
	}
}
