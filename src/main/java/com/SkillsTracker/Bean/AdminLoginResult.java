package com.SkillsTracker.Bean;

public class AdminLoginResult {
	String loginResult;
	public AdminLoginResult() {
		
	}
	
	public AdminLoginResult(String loginResult) {
		this.loginResult = loginResult;
	}

	public String getLoginResult() {
		return loginResult;
	}

	public void setLoginResult(String loginResult) {
		this.loginResult = loginResult;
	}

	@Override
	public String toString() {
		return "AdminLoginResult [loginResult=" + loginResult + "]";
	}
}
