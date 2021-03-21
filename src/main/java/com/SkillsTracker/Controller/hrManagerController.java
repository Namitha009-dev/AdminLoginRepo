package com.SkillsTracker.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.SkillsTracker.Bean.AddNewHrResult;
import com.SkillsTracker.Bean.HRManagers;
import com.SkillsTracker.Service.HRManagerService;

//This is controller Class for Adding New HR Manager
@RestController
@RequestMapping("/hrManager")
public class hrManagerController {
	@Autowired
	HRManagerService theService;
	//This is POST Request for Adding New HR	
	//URL to hit: http://localhost:9090/hrManager/addnew
	//JSON Body:{
//		"hrName":"John K",
//		"hrUserName":"John.K",
//		"hrPassword":"John@123"
	//}
	@PostMapping("/addnew")
	public AddNewHrResult addnewHrManager(@RequestBody HRManagers hrmanager) {
		return theService.addNewHrManager(hrmanager);
	}
}
