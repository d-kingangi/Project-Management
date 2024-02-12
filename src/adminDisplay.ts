let noProjects = document.querySelector('#noProjects') as HTMLParagraphElement

let createdProject = document.querySelector('.createProject') as HTMLFormElement

//Get data from local storage

let newProjectData = JSON.parse(localStorage.getItem('projectData') || '{}')

if(newProjectData){
    noProjects.innerHTML = 'Your current projects'
    noProjects.style.textAlign = 'center'
}else{
    noProjects.innerHTML = 'No projects to show at the moment. Create a new project to view'
}

let projectDiv = document.createElement('div') as HTMLDivElement
let newDesc = document.createElement('div') as HTMLDivElement
let deleteBtn = document.createElement('button') as HTMLButtonElement
let viewBtn = document.createElement('button') as HTMLButtonElement
let updateLink = document.createElement('a') as HTMLAnchorElement
let crudDiv = document.createElement('div') as HTMLDivElement
let toAdminDisplay = document.createElement('button') as HTMLButtonElement
toAdminDisplay.className = 'backToProjects'







function displayProject() { newProjectData.forEach((dataItem:any)=>{
    let newTitle = document.createElement('div') as HTMLDivElement

    newTitle.className = 'newTitle'
    newTitle.innerHTML = dataItem.title


    newDesc.innerHTML = dataItem.description

    let newEndDate = document.createElement('div') as HTMLDivElement
    newEndDate.innerHTML = `Due date: ${dataItem.endDate}`
    newEndDate.style.marginTop = '10px'

    viewBtn.className = 'viewBtn'
    viewBtn.innerHTML = 'View Project'

    updateLink.className = 'updateLink'
    updateLink.textContent = 'Edit'
    updateLink.href = '../public/projectForm.html'

    deleteBtn.className = 'deleteBtn'
    deleteBtn.innerHTML = 'Delete Project'

    crudDiv.className = 'crudDiv'

    projectDiv.className = 'projectDiv'
    projectDiv.appendChild(newTitle)
    projectDiv.appendChild(newEndDate) 
    projectDiv.appendChild(viewBtn)


    adminContent.appendChild(projectDiv)

})
}

window.onload=()=>{
    displayProject()
} 

// projectDiv.addEventListener('mouseenter', ()=>{
//     updateLink.style.display = 'block'
//     deleteBtn.style.display = 'block'
// })

// projectDiv.addEventListener('mouseleave', ()=>{
//     updateLink.style.display = 'none'
//     deleteBtn.style.display = 'none'
// })

viewBtn.addEventListener('click', ()=>{
    projectDiv.appendChild(newDesc)
    crudDiv.appendChild(updateLink)
    crudDiv.appendChild(deleteBtn)
    projectDiv.appendChild(crudDiv)
    crudDiv.style.display = 'flex'
    crudDiv.style.justifyContent = 'space-between'
    viewBtn.style.display = 'none'
    projectDiv.style.width = '50%'
    projectDiv.style.height = '30%'


    toAdminDisplay.innerHTML = 'Back'
    toAdminDisplay.style.display = 'block'    
    crudDiv.appendChild(toAdminDisplay)
})

toAdminDisplay.addEventListener('click', ()=>{
    viewBtn.style.display = 'block'
    projectDiv.style.width = '20%'
    projectDiv.style.height = '20%'
    crudDiv.style.display = 'none'
    toAdminDisplay.style.display = 'none'    
    newDesc.style.display = 'none'
})

