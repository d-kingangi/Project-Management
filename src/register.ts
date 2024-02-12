// //Get Html elements

let registerForm = document.querySelector('.signUp') as HTMLFormElement

let newEmail = document.querySelector('#email') as HTMLInputElement

let regPwd = document.querySelector('#pwd') as HTMLInputElement

let lastName = document.querySelector('#lName') as HTMLInputElement

let firstName = document.querySelector('#fName') as HTMLInputElement

interface newUser {
    firstName:string
    lastName:string
    email:string
    password:string
}

let addedUser:newUser[] = []




registerForm.addEventListener('submit', (e)=>{
    e.preventDefault()

    let userAdded = firstName.value.trim() && lastName.value.trim() && newEmail.value.trim() && regPwd.value.trim()

    const formData = new FormData(registerForm);
        if(userAdded){
            console.log(userAdded);
            
        const newUserData:newUser = {
            firstName:firstName.value.trim(),
            lastName:lastName.value.trim(), 
            email:newEmail.value.trim(),
            password:regPwd.value.trim(),
        }
        
        console.log(newUserData);
        
        addedUser.push(newUserData)
    
        localStorage.setItem('storedNewUser', JSON.stringify(addedUser))

        window.location.href = '../public/landing.html'

        registerForm.reset()

    }

})