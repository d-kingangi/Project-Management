
// Get the elements
let loginForm = document.querySelector('.login') as HTMLFormElement

let loginName = document.querySelector('#userName') as HTMLInputElement

let loginPwd = document.querySelector('#loginPwd') as HTMLInputElement

let loginNameDiv = document.querySelector('.uName') as HTMLDivElement

let loginPwdDiv = document.querySelector('.pd') as HTMLDivElement

let errorDiv = document.querySelector('.errorDiv') as HTMLDivElement
errorDiv.style.color = 'red'

let pwdErrorDiv = document.querySelector('.pwdErrorDiv') as HTMLDivElement

//Get items from local storage
let savedCredentials = JSON.parse(localStorage.getItem('storedNewUser') || '{}')



interface loginInfo{
    registeredName: string
    registeredPassword:string
}

let loginData:loginInfo[] = []

loginForm.addEventListener('submit', (e)=>{
    e.preventDefault()

    //Clear error divs on submitting
    errorDiv.textContent = ''
    pwdErrorDiv.textContent = ''
    loginName.style.border = '1px solid rgba(145, 141, 141, 0.4)'
    loginPwd.style.border = '1px solid rgba(145, 141, 141, 0.4)'

    let trimmedLogin = loginName.value.trim() && loginPwd.value.trim()

    const formData = new FormData(loginForm);
    if(!trimmedLogin){
        errorDiv.textContent = 'Enter valid credentials'
        loginName.style.border = '1px solid red'
        loginPwd.style.border = '1px solid red'
    }else if(trimmedLogin){

        let thisUser = {
            registeredName: loginName.value.trim(),
            registeredPassword:loginPwd.value.trim()
        }     



        //Login Admin


        if (loginName.value.trim()==='admin@admin.com' && loginPwd.value.trim()==='Passaword') {

            errorDiv.textContent = 'Login Successful'
            errorDiv.style.color = 'green'
            setTimeout(()=>{
                window.location.href = '../public/admin-dashboard.html'
            }, 1000)
        } else if(loginName.value.trim()==='admin@admin.com' && loginPwd.value.trim()!='Passaword'){
            loginPwd.style.border = '1px solid red'
            pwdErrorDiv.textContent = 'Invalid Password'  
            pwdErrorDiv.style.color = 'red'          
        }


        
        //Login Registered User

        
        else if(savedCredentials){
            savedCredentials.forEach((savedCredential:any) => {
                        if (savedCredential.email ==loginName.value.trim() && savedCredential.password == loginPwd.value.trim()) {
                            errorDiv.textContent = 'Login Successful'
                            errorDiv.style.color = 'green'

                            setTimeout(()=>{
                                window.location.href = '../public/user-dashboard.html'
                            }, 1000)
                            
                        } else if(savedCredential.email ==loginName.value.trim() && savedCredential.password != loginPwd.value.trim()) {
                            pwdErrorDiv.textContent = 'Invalid password'
                            pwdErrorDiv.style.color = 'red'
                            loginPwd.style.border = '1px solid red'
                        } 
                    });
            }else{
                errorDiv.textContent = 'Invalid Credentials'
            }
        }
        else{
            errorDiv.textContent = 'User not found'
            loginName.style.border = '1px solid red'
            loginPwd.style.border = '1px solid red'
    }
    loginForm.reset()

})






