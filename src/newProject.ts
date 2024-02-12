// Get HTML elements
const projectForm = document.querySelector('.createProject') as HTMLFormElement;
const submitBtn = document.querySelector("#create") as HTMLButtonElement;

const projectTitle = document.querySelector('#title') as HTMLInputElement;
const projectDesc = document.querySelector('#description') as HTMLInputElement;
const projectDate = document.querySelector('#end') as HTMLDataElement;

const output = document.querySelector(".output") as HTMLDivElement;

let adminContent = document.querySelector('.adminContent') as HTMLDivElement




interface Project {
  title: string;
  description: string;
  endDate: string;
}

let projectInfo:Project[] = [];

projectForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // Trim values passed
    let projectCreated = projectTitle.value.trim() && projectDesc.value.trim() 
    
    const formData = new FormData(projectForm);

    if (projectCreated) {
        // Create an object to store form data
        const projectData:Project = {
            title: projectTitle.value.trim(),
            description: projectDesc.value.trim(),
            endDate: projectDate.value.trim()
        };
        
        //Push the form data to an array for further processing
        projectInfo.push(projectData);

        console.log(projectData);
        

        // Store form data to local storage
        localStorage.setItem('projectData', JSON.stringify(projectInfo));

        console.log(projectInfo);
        


        // Display form data
        for (const [key, value] of formData) {
            output.textContent += `${key}: ${value}\n`;
        }
    }
    window.location.href = '../public/assign.html'
    projectForm.reset()

});


console.log(projectInfo);




