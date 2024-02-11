
/******************************************************************************************************************************************
 * 
 *                                                      LOGIN
 * 
 ******************************************************************************************************************************************/


// Get the elements
let loginForm = document.querySelector('.login') as HTMLFormElement

let loginName = document.querySelector('#userName') as HTMLInputElement

let loginPwd = document.querySelector('#loginPwd') as HTMLInputElement

let loginNameDiv = document.querySelector('.uName') as HTMLDivElement

let loginPwdDiv = document.querySelector('.pd') as HTMLDivElement

let errorDiv = document.querySelector('.errorDiv') as HTMLDivElement
errorDiv.style.color = 'red'


interface loginInfo{
    registeredName: string
    registeredPassword:string
}

let loginData:loginInfo[] = []

loginForm.addEventListener('submit', (e)=>{
    e.preventDefault()

    let trimmedLogin = loginName.value.trim() && loginPwd.value.trim()

    const formData = new FormData(loginForm);

    if(trimmedLogin){

        let thisUser = {
            registeredName: loginName.value.trim(),
            registeredPassword:loginPwd.value.trim()
        }     


        if (loginName.value.trim()==='admin' && loginPwd.value.trim()==='Passaword') {

            errorDiv.textContent = 'Login Successful'
            errorDiv.style.color = 'green'
            setTimeout(()=>{
                window.location.href = '../public/admin-dashboard.html'
            }, 1000)
        } else if(loginName.value.trim()==='admin' && loginPwd.value.trim()!='Passaword'){
            let wrongPasswordDiv = document.createElement('div') as HTMLDivElement
            wrongPasswordDiv.innerHTML = 'Invalid password'
            errorDiv.appendChild(wrongPasswordDiv)
        }else{
            let i = 0

            let savedCredentials = JSON.parse(localStorage.getItem('storedNewUser') || '{}')

            if(savedCredentials){
                savedCredentials.forEach((savedCredential:any) => {
                    if (savedCredential.userName ==loginName.value.trim() && savedCredential.password == loginPwd.value.trim()) {
                        errorDiv.textContent = 'Login Successful'
                        errorDiv.style.color = 'green'
                        setTimeout(()=>{
                            window.location.href = '../public/user-dashboard.html'
                        }, 1000)
                        i++
                    } else if(savedCredential.userName ==loginName.value.trim() && savedCredential.password != loginPwd.value.trim()) {
                        errorDiv.textContent = 'Invalid password'
                        i++
                    } 
                });
        }else{
            errorDiv.textContent = 'Invalid Credentials'
        }
        }


    }
})


// /**********************************************************************************************************************************
//  *
//  *  Create New project
//  *
//  * 
//  * *******************************************************************************************************************************/




// // Get HTML elements
// const projectForm = document.querySelector('.createProject') as HTMLFormElement;
// const submitBtn = document.querySelector("#create") as HTMLButtonElement;

// const projectTitle = document.querySelector('#title') as HTMLInputElement;
// const projectDesc = document.querySelector('#description') as HTMLInputElement;
// const projectUser = document.querySelector('#user') as HTMLInputElement;
// const projectDate = document.querySelector('#date') as HTMLDataElement;

// const output = document.querySelector(".output") as HTMLDivElement;

// interface Project {
//   title: string;
//   description: string;
//   user: string;
//   endDate: Date;
// }

// let projectInfo:Project[] = [];

// projectForm.addEventListener('submit', (e) => {
//     e.preventDefault();

//     // Trim values passed
//     let projectCreated = projectTitle.value.trim() && projectDesc.value.trim() && projectUser.value.trim();
    
//     const formData = new FormData(projectForm);

//     if (projectCreated) {
//         // Create an object to store form data
//         const projectData:Project = {
//             title: projectTitle.value.trim(),
//             description: projectDesc.value.trim(),
//             user: projectUser.value.trim(),
//             endDate: new Date()
//         };
        
//         //Push the form data to an array for further processing
//         projectInfo.push(projectData);

//         // Store form data to local storage
//         localStorage.setItem('projectData', JSON.stringify(projectInfo));


//         // Display form data
//         for (const [key, value] of formData) {
//             output.textContent += `${key}: ${value}\n`;
//         }
//     }
// });



