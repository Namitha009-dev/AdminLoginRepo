package com.SkillsTracker.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.SkillsTracker.Bean.AddNewHrResult;
import com.SkillsTracker.Bean.HRManagers;
import com.SkillsTracker.dao.hrManagerRepositoy;

//Service Class for adding new HR
@Service
public class HRManagerService implements serviceInterface{
	@Autowired
	hrManagerRepositoy repo;
	HRManagers existingHrWithSameUserName = new HRManagers(); //variable to check existing HR with same Username
	private List<HRManagers> allHrManagers; //Variable to get list of all HR Managers in table
	AddNewHrResult addNewHrResult = new AddNewHrResult(); //Object to return JSON Object to Angular
	
//	Function to Add New HR Manager
	@Override
	public AddNewHrResult addNewHrManager(HRManagers hrmanager) {
		existingHrWithSameUserName = repo.findByHrUserName(hrmanager.getHrUserName()); //this will search for HR Manager with same Username
		 if(existingHrWithSameUserName == null) //Condition to check whether HR with same username exist. If Username does not exist then only proceed with the adding new HR
		 {
			 allHrManagers = (List<HRManagers>) repo.findAll(); //get all HR Managers from database
			for(HRManagers hr :allHrManagers) {
				hr.setAccessStatus("InActive");  //Makes all previous HR Managers Access Status as InActive
			}
			repo.saveAll(allHrManagers); //Save all previous HR Managers with updated status as InActive
			hrmanager.setAccessStatus("Active"); //Makes Currently adding HR Manager as Active
			repo.save(hrmanager); //Saves current Hr Manager
			addNewHrResult.setAddNewHrResult("New HR Manager Added Successfully!...");
		 }
		 else { //If Username Already exists return failure
			 addNewHrResult.setAddNewHrResult("Username Already Exists");
		 } 
		 return addNewHrResult;
	}
	public HRManagers getaHrbyUserName(String hrUserName) {
		return repo.findByHrUserName(hrUserName);
	}


}
