package com.skilldistillery.application.entities;

import java.time.LocalDate;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
public class Application {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String name;
	@Column(name = "apply_date")
	private LocalDate applyDate;
	private LocalDate deadline;
	@Column(name = "link_to_job")
	private String linkToJob;
	private String description;
	private String location;
	private Double salary;
	@Column(name = "interview_date")
	private LocalDate interviewDate;
	@Column(name = "job_title")
	private String jobTitle;
	@JsonIgnoreProperties("applications")
	@ManyToOne
	@JoinColumn(name = "status_id")
	private Status status;
	@JsonIgnoreProperties("applications")
	@ManyToOne
	@JoinColumn(name = "user_id")
	private User user;
	@JsonIgnore
	@OneToMany(mappedBy="application")
	private List<Contact> contacts;

	public Application() {
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + id;
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Application other = (Application) obj;
		if (id != other.id)
			return false;
		return true;
	}

	public int getId() {
		return id;
	}



	public LocalDate getApplyDate() {
		return applyDate;
	}

	public void setApplyDate(LocalDate applyDate) {
		this.applyDate = applyDate;
	}

	public LocalDate getDeadline() {
		return deadline;
	}

	public void setDeadline(LocalDate deadline) {
		this.deadline = deadline;
	}

	public String getLinkToJob() {
		return linkToJob;
	}

	public void setLinkToJob(String linkToJob) {
		this.linkToJob = linkToJob;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}

	public Double getSalary() {
		return salary;
	}

	public void setSalary(Double salary) {
		this.salary = salary;
	}

	public LocalDate getInterviewDate() {
		return interviewDate;
	}

	public void setInterviewDate(LocalDate interviewDate) {
		this.interviewDate = interviewDate;
	}

	public String getJobTitle() {
		return jobTitle;
	}

	public void setJobTitle(String jobTitle) {
		this.jobTitle = jobTitle;
	}

	@Override
	public String toString() {
		return "Application [id=" + id + ", name=" + name + ", applyDate=" + applyDate + ", deadline=" + deadline
				+ ", linkToJob=" + linkToJob + ", description=" + description + ", location=" + location + ", salary="
				+ salary + ", interviewDate=" + interviewDate + ", jobTitle=" + jobTitle + "]";
	}

	public Status getStatus() {
		return status;
	}

	public void setStatus(Status status) {
		this.status = status;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public List<Contact> getContacts() {
		return contacts;
	}

	public void setContacts(List<Contact> contacts) {
		this.contacts = contacts;
	}
}
