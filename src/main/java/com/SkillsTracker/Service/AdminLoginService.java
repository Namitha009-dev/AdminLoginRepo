package com.SkillsTracker.Service;

import org.springframework.stereotype.Service;

import com.SkillsTracker.Bean.AdminClass;
import com.SkillsTracker.Bean.AdminLoginResult;

//This is service Class for Admin Login

@Service
public class AdminLoginService {
	//Function to check if username and password entered by user are correct
	//If correct username or password is entered login success will be returned
	//If incorrect username or password is entered login fail will be returned
	AdminLoginResult adminLoginResult=new AdminLoginResult();
	public AdminLoginResult adminLogin(AdminClass admin) {
		if(admin.getAdminUserName().equals("Admin") && admin.getAdminPassword().equals("Admin"))
			adminLoginResult.setLoginResult("Login Successfully");
		else
			adminLoginResult.setLoginResult("Incorrect Username or password");
		return adminLoginResult;
	}

}
