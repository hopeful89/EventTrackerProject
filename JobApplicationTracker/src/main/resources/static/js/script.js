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
	singleAppView.classList.remove('d-none');
	document.editJob.submit.removeEventListener('click', updateSubmit);
	updateEditForm(application);

}

function updateEditForm(application) {

	let form = document.editJob;
	form.userID.value = application.user.id;
	form.id.value = application.id;
	form.name.value = application.name;
	form.deadline.value = application.deadline;
	form.description.value = application.description
	form.interviewDate.value = application.interviewDate;
	form.linkToJob.value = application.linkToJob;
	form.jobTitle.value = application.jobTitle;
	form.location.value = application.location;
	form.salary.value = application.salary;
	form.status.value = application.status.id;
	form.submit.addEventListener('click', updateSubmit);
	
	
}
function updateSubmit(e){
	e.preventDefault();
	let xhr = new XMLHttpRequest();	
	let form = document.editJob;
	let application = {
		id: form.id.value,
		name: form.name.value,
		jobTitle: form.jobTitle.value,
		applyDate: form.applyDate.value,
		deadline: form.deadline.value,
		description: form.description.value,
		interviewDate: form.interviewDate.value,
		linkToJob: form.linkToJob.value,
		location: form.location.value,
		salary: form.salary.value,
		status: {
			name: "",
			id: form.status.value
		}
	}
	let updateString = `user/${form.userID.value}/applications`;
	console.log(updateString);
	console.log(application);
	xhr.open('PUT', updateString)
	xhr.onreadystatechange = () => {
		if(xhr.readyState === 4){
			if(xhr.status === 200){
				console.log(xhr.responseText);
			}
		}
	}
	console.log(application);
}
