let tableMain;
let createJobDiv;
let tableBody;
let singleAppView;
window.addEventListener('load', () => {
	init();
})

function init() {
	singleAppView = document.getElementById('singleAppView');
	tableBody = document.querySelector(".table-body");
	createJobDiv = document.querySelector('.createJobDiv');
	tableMain = document.querySelector('.introApp');
	document.createJob.submit.addEventListener('click', createJob);
	let homeBtn = document.getElementById("homeBtn");
    homeBtn.addEventListener('click', loadApplication);
	loadApplication();
}

function loadApplication() {
	let xhr = new XMLHttpRequest();
	xhr.open('GET', 'api/applications');
	singleAppView.classList.add("d-none");
	tableMain.classList.remove("d-none");
 	createJobDiv.classList.remove("d-none");
	xhr.onreadystatechange = () => {
		if(xhr.readyState === 4) {
			if(xhr.status === 200) {
				let applications = JSON.parse(xhr.responseText);
				displayAllApplications(applications);

			}else {
				displayAllApplications();
			}
		}
	}
	xhr.send();
}

function displayAllApplications(applications){
	tableBody.textContent = '';
	if(applications){
		for(app of applications){
			//need new xhr or reference string changes
			let xhr = new XMLHttpRequest();
			let tr = document.createElement('tr');
			let appNameTH = document.createElement('th');
			appNameTH.classList.add("row");
			let statusTD = document.createElement('td');
			let applyDateTD = document.createElement('td');
			let deadlineTD = document.createElement('td');
			let jobTitleTD = document.createElement('td');
			let interviewTD = document.createElement('td');
			appNameTH.textContent = app.name;
			statusTD.textContent = app.status.name;
			applyDateTD.textContent = app.applyDate;
			deadlineTD.textContent = app.deadline;
			jobTitleTD.textContent = app.jobTitle;
			interviewTD.textContent = app.interviewDate;
			
			appNameTH.classList.add("table-row");
			statusTD.classList.add("table-row");
			applyDateTD.classList.add("table-row");
			deadlineTD.classList.add("table-row");
			jobTitleTD.classList.add("table-row");
			interviewTD.classList.add("table-row");
			tableBody.appendChild(tr);
			tableBody.appendChild(appNameTH);
			tableBody.appendChild(statusTD);
			tableBody.appendChild(applyDateTD);
			tableBody.appendChild(deadlineTD);
			tableBody.appendChild(jobTitleTD);
			tableBody.appendChild(interviewTD);
			
			appNameTH.addEventListener('click', tableOnClick);
			statusTD.addEventListener('click', tableOnClick);
			applyDateTD.addEventListener('click', tableOnClick);
			deadlineTD.addEventListener('click', tableOnClick);
			jobTitleTD.addEventListener('click', tableOnClick);
			interviewTD.addEventListener('click', tableOnClick);
			let onClickString = `api/user/${app.user.id}/applications/${app.id}`;
			
			function tableOnClick(e){
				xhr.open('GET', onClickString);
				xhr.onreadystatechange = () => {
					if(xhr.readyState === 4){
						if(xhr.status === 200){
							tableMain.classList.add('d-none');
							createJobDiv.classList.add("d-none");
							let application = JSON.parse(xhr.responseText);
							displaySingleApp(application);
						}
					}
				}
				xhr.send();
			}
		}
	}
} 


function createJob(e){
	e.preventDefault();
	let xhr = new XMLHttpRequest();
	xhr.open('POST', 'api/user/1/applications');
	console.log("xhr open", xhr);
	let form = document.createJob;
	xhr.setRequestHeader("Content-type", "application/json");
	let application = {
		name: form.name.value,
		jobTitle: form.jobTitle.value,
		applyDate: form.applyDate.value,
		deadline: form.deadline.value,
		description: form.description.value,
		linkToJob: form.linkToJob.value,
		location: form.location.value,
		salary: form.salary.value,
		status: {
			name: "",
			id: form.status.value
		}
	}
	for(p in application){
		if(application[p] === "" || !application[p]){
			delete application[p];
		}
	}
	xhr.onreadystatechange = () => {
		if(xhr.readyState === 4){
			if(xhr.status === 201){
				loadApplication();
			}else{
				console.log(xhr.status)
				console.log(xhr.responseText);
			}
		}
	}
	let jsonApp = JSON.stringify(application);
	xhr.send(jsonApp)
}

function displaySingleApp(application){
	document.getElementById('deleteBtn').replaceWith(document.getElementById('deleteBtn').cloneNode(true));
	singleAppView.classList.remove('d-none');
	updateEditForm(application);
	document.getElementById('deleteBtn').addEventListener('click', deleteBtn);
	function deleteBtn(e){
		console.log(e);
		deleteApplication(application);
	}
	buildSingleAppView(application);
}

function updateEditForm(application) {
	
	let form = document.editJob;
	form.userID.value = application.user.id;
	form.id.value = application.id;
	form.name.value = application.name;
	if(application.applyDate){
		form.applyDate.value = application.applyDate;
	}
	if(application.deadline){
		form.deadline.value = application.deadline;
	}
	if(application.interviewDate){
		form.interviewDate.value = application.interviewDate;
	}
	form.description.value = application.description;
	form.linkToJob.value = application.linkToJob;
	form.jobTitle.value = application.jobTitle;
	form.location.value = application.location;
	form.salary.value = application.salary;
	form.status.value = application.status.id;
	form.submit.replaceWith(form.submit.cloneNode(true));
	form.submit.addEventListener('click', grabSingleApp);
	
	function grabSingleApp(e){
		e.preventDefault();
		updateSubmit(application);
	}
}

function updateSubmit(app){

	let xhr = new XMLHttpRequest();
	let form = document.editJob;
	
	app.id = form.id.value;
	app.name = form.name.value;
	app.jobTitle = form.jobTitle.value;
	app.applyDate = form.applyDate.value;
	app.deadline = form.deadline.value;
	app.description = form.description.value;
	app.interviewDate = form.interviewDate.value;
	app.linkToJob = form.linkToJob.value;
	app.location = form.location.value;
	app.salary = form.salary.value;
	app.status = {
		name: '',
		id: form.status.value
	};
		for(p in app){
		if(app[p] === "" || !app[p]){
			delete app[p];
		}
	}
	let updateString = `api/user/${form.userID.value}/applications`;

	xhr.open('PUT', updateString)
	xhr.setRequestHeader("Content-type", "application/json");
	xhr.onreadystatechange = () => {
		if(xhr.readyState === 4){
			if(xhr.status === 200){
				displaySingleApp(app);
			}
		}
	}
	xhr.send(JSON.stringify(app));
}


function deleteApplication(app){
	let xhr = new XMLHttpRequest();
	xhr.open('DELETE', `api/user/${app.user.id}/applications/${app.id}`);
		xhr.onreadystatechange = () => {
		if(xhr.readyState === 4){
			if(xhr.status === 204){
				loadApplication();
			}
		}
	}
	xhr.send();
}

function buildSingleAppView(app){
	let ul = document.getElementById('contacts');
	ul.textContent = '';
	document.getElementById("spvCompany").textContent = app.name;
	document.getElementById("spvTitle").textContent = app.jobTitle;
	document.getElementById("spvStatus").textContent = app.Status;
	document.getElementById("spvAppDate").textContent = app.applyDate;
	document.getElementById("spvDeadline").textContent = app.deadline;
	document.getElementById("spvInterviewDate").textContent = app.interviewDate;
	document.getElementById("spvDescription").textContent = app.description;
	document.getElementById("spvJobLink").setAttribute("href", app.linkToJob);
	document.getElementById("spvLocation").textContent = app.location;
	document.getElementById("spvSalary").textContent = app.salary;
	document.contact.appId.value = app.id;

	
	for(contact of app.contacts){
		let form = document.contact;
		let li = document.createElement('li');
		let infoDiv = document.createElement('div');
		let infoEmail = document.createElement('p');
		let infoPhone = document.createElement('p');
		ul.appendChild(li);
		li.textContent = `${contact.firstName} ${contact.lastName}`;
		li.appendChild(infoDiv);
		infoDiv.appendChild(infoEmail);
		infoDiv.appendChild(infoPhone);
		infoEmail.textContent = `${contact.email}`;
		if(contact.phoneNumber){
		infoPhone.textContent = `Phone: ${contact.phoneNumber}`;
		}
		li.classList.add('table-row');
		onClick();
		function onClick(){
			addContactListener(contact, li, form)
		}
		
		}
		function addContactListener(contact, item, form){
			item.addEventListener('click', e => {
				form.contactId.value = contact.id;
				form.firstName.value = contact.firstName;
				form.lastName.value = contact.lastName;
				form.email.value = contact.email;
				form.phoneNumber.value = contact.phoneNumber;
			})
		}

	document.contact.submit.replaceWith(document.contact.submit.cloneNode(true));
	document.contact.submit.addEventListener('click', createContact)
	function createContact(e){
		e.preventDefault();
		contactForm(app);
	}
	}
	



function contactForm(app){
	let xhr = new XMLHttpRequest();
	let form = document.contact;
	

	
	let contact = {
		id: form.contactId.value ? form.contactId.value : 0,
		firstName: form.firstName.value ? form.firstName.value : "Joe",
		lastName: form.lastName.value ? form.lastName.value : "Smith",
		email: form.email.value ? form.email.value : "setemail@setemail.com",
		phoneNumber: form.phoneNumber.value
	}
	if(contact.id != 0 ){
		xhr.open('PUT', `api/applications/${form.appId.value}/contact`);
	}else{
		xhr.open('POST', `api/applications/${form.appId.value}/contact`);
	}
	
	xhr.onreadystatechange = () => {
		if(xhr.readyState === 4){
			if(xhr.status === 201){
				form.reset();
				console.log(form.contactId.value);
				app.contacts = [...app.contacts, JSON.parse(xhr.responseText)]
				displaySingleApp(app);

			}else if(xhr.status === 200){
				form.reset();
				form.contactId.value = 0;
				let updateContact = JSON.parse(xhr.responseText);
				app.contacts = app.contacts.map(contact => {
					if(updateContact.id === contact.id){
						contact = updateContact;
						return contact;
					}else{
						return contact;
					}           
				})
				console.log(form.contactId.value);
				displaySingleApp(app);
			}else{
				console.log(xhr.responseText)
			}
		}
		
	}
	
	
	for(p in contact){
		if(!contact[p]){
			delete contact[p];
		}
	}
	xhr.setRequestHeader("Content-type", "application/json");
	xhr.send(JSON.stringify(contact));
}





