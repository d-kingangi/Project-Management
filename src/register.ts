





// /****************************************************************************************************************************************
//  * 
//  ***********************************************Register New User *********************************************************************************
//  * 
//  * 
//  *******************************************************************************************************************************************/


// //Get Html elements

let registerForm = document.querySelector('.Sign-Up') as HTMLFormElement

let newEmail = document.querySelector('#email') as HTMLInputElement

let regPwd = document.querySelector('#pwd') as HTMLInputElement

let regConfirmPwd = document.querySelector('#confirm') as HTMLInputElement

let userName = document.querySelector('#userName') as HTMLInputElement

interface newUser {
    userName:string
    email:string
    password:string
    confirmPwd:string
}

let addedUser:newUser[] = []




registerForm.addEventListener('submit', (e)=>{
    e.preventDefault()

    let userAdded = userName.value.trim() && regConfirmPwd.value.trim() && newEmail.value.trim() && regPwd.value.trim()

    const formData = new FormData(registerForm);

    if(userAdded){
        const newUserData:newUser = {
            userName:userName.value.trim(),
            email:newEmail.value.trim(),
            password:regPwd.value.trim(),
            confirmPwd:regConfirmPwd.value.trim()        
        }
        
        addedUser.push(newUserData)
    
        localStorage.setItem('storedNewUser', JSON.stringify(addedUser))

        window.location.href = '../public/landing.html'

    }

})