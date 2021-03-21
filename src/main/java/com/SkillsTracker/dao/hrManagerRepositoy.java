package com.SkillsTracker.dao;

import org.springframework.data.repository.CrudRepository;

import com.SkillsTracker.Bean.HRManagers;

//Repository for Adding new HR Manager
public interface hrManagerRepositoy extends CrudRepository<HRManagers, Integer> {

	HRManagers findByHrUserName(String hrUserName);

	HRManagers findByHrName(String hrName);
	
}