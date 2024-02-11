// /**********************************************************************************************************************************
//  *
//  *  Create New project
//  *
//  * 
//  * *******************************************************************************************************************************/




// // Get HTML elements
const projectForm = document.querySelector('.createProject') as HTMLFormElement;
const submitBtn = document.querySelector("#create") as HTMLButtonElement;

const projectTitle = document.querySelector('#title') as HTMLInputElement;
const projectDesc = document.querySelector('#description') as HTMLInputElement;
const projectUser = document.querySelector('#user') as HTMLInputElement;
const projectDate = document.querySelector('#date') as HTMLDataElement;

const output = document.querySelector(".output") as HTMLDivElement;

interface Project {
  title: string;
  description: string;
  user: string;
  endDate: Date;
}

let projectInfo:Project[] = [];

projectForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Trim values passed
    let projectCreated = projectTitle.value.trim() && projectDesc.value.trim() && projectUser.value.trim();
    
    const formData = new FormData(projectForm);

    if (projectCreated) {
        // Create an object to store form data
        const projectData:Project = {
            title: projectTitle.value.trim(),
            description: projectDesc.value.trim(),
            user: projectUser.value.trim(),
            endDate: new Date()
        };
        
        //Push the form data to an array for further processing
        projectInfo.push(projectData);

        // Store form data to local storage
        localStorage.setItem('projectData', JSON.stringify(projectInfo));


        // Display form data
        for (const [key, value] of formData) {
            output.textContent += `${key}: ${value}\n`;
        }
    }
});
