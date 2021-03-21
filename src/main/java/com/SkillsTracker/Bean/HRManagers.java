package com.SkillsTracker.Bean;

import javax.persistence.Entity;
import javax.persistence.Id;

//This is bean class for Adding New HR Manager
@Entity
public class HRManagers {
	@Id
	private String hrUserName; //User Name for HR manager
	private String hrName;	//Name of HR Manager	
	private String hrPassword;	//Password for HR Manager
	private String accessStatus; //Access Status for HR Manager i.e Active or InActive at the time only one HR Manager can be active others are inactive
	public HRManagers() {
		
	}
	public HRManagers(String hrUserName, String hrName, String hrPassword, String accessStatus) {
		this.hrUserName = hrUserName;
		this.hrName = hrName;
		this.hrPassword = hrPassword;
		this.accessStatus = accessStatus;
	}
	public String getHrName() {
		return hrName;
	}
	public void setHrName(String hrName) {
		this.hrName = hrName;
	}
	public String getHrUserName() {
		return hrUserName;
	}
	public void setHrUserName(String hrUserName) {
		this.hrUserName = hrUserName;
	}
	public String getHrPassword() {
		return hrPassword;
	}
	public void setHrPassword(String hrPassword) {
		this.hrPassword = hrPassword;
	}
	public String getAccessStatus() {
		return accessStatus;
	}
	public void setAccessStatus(String accessStatus) {
		this.accessStatus = accessStatus;
	}


	@Override
	public String toString() {
		return "HRManagers [hrUserName=" + hrUserName + ", hrName=" + hrName + ", hrPassword=" + hrPassword
				+ ", accessStatus=" + accessStatus + "]";
	}

	
}
