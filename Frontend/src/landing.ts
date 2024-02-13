const loginForm = document.querySelector('.login');
const emailInput = document.getElementById('email') as HTMLInputElement
const passwordInput = document.getElementById('password') as HTMLInputElement;
const loginMessage = document.getElementById('login-message') as HTMLParagraphElement;
loginMessage.style.display = 'none'
let email_error_msg = document.getElementById('email-error') as HTMLParagraphElement
email_error_msg.style.display = 'none' 

loginForm?.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    if (email == ''){
        emailInput.style.border = 'red solid 1px'
        email_error_msg.style.display = 'flex'
        email_error_msg.style.alignSelf = 'left'
        email_error_msg.style.color = 'red'
        email_error_msg.textContent = 'Email is required'
    }else{
        emailInput.style.border = 'black solid 1px'
        email_error_msg.style.display = 'none'
        email_error_msg.textContent = ''
    }

    let login_details = email !== '' && password !== ''

    // if (password == ''){
    //     password.style.border = 'red solid 1px'
    // }else{
    //     password.style.border = 'black solid 1px'
    // }

    if(login_details){
        const promise2  = new Promise <{error?:string, message?:string, token?:string}>((resolve, reject)=>{

        fetch('http://localhost:4100/auth/login', {
            headers:{
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({
                "email": email,
                "password": password
            })
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);

            if (data.token) {
                localStorage.setItem('token', data.token);
                updateLoginMessage('success', 'Login successful!');
                redirect();
            } else {
                updateLoginMessage('error', 'Wrong email or password. Please try again.');
            }

            resolve(data)
        })
        })  
    }

    function redirect(){
        const token = localStorage.getItem('token') as string

        new Promise <{info:{
            user_id?:string,
            userName?: string,
            email?: string,
            isWelcomed?: boolean,
            isAdmin?: boolean
        }}>((resolve, reject)=>{
            fetch('http://localhost:4100/auth/checkdetails', {
                headers:{
                    'Accept': 'application/json',
                    'Content-type': 'application/json',
                    'token': token
                },
                method: "POST"
            }).then(res=>{   
                resolve(res.json())
            }).catch(error=>{
                console.error(error);
                reject(error)
            })
        }).then(data=>{
            console.log(data.info);

            const isAdmin = data.info && data.info.isAdmin ? '1' : '0'
            
            if(isAdmin === '0'){
                localStorage.setItem('user_id', data.info.user_id!) 
                window.location.href = 'user-dashboard.html'
            }else if(isAdmin === '1'){
                localStorage.setItem('admin_id', data.info.user_id!) 
                window.location.href = 'admin-dashboard.html'
            }
        })
    }

    function updateLoginMessage(type: 'success' | 'error', message: string) {
        loginMessage.textContent = message;
        loginMessage.style.color = type === 'success' ? 'green' : 'red';
    }
});
