package com.SkillsTracker.Bean;

//This bean is for sharing response to Angular in the format of JSON Object
public class AddNewHrResult {
	String AddNewHrResult; //Result of rest API will be stored in this parameter which will be shared with Angular

	public AddNewHrResult() {
		
	}

	public String getAddNewHrResult() {
		return AddNewHrResult;
	}

	public void setAddNewHrResult(String addNewHrResult) {
		AddNewHrResult = addNewHrResult;
	}
}
