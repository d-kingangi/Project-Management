document.addEventListener('DOMContentLoaded', function() {
    const reg_form = document.getElementById("Sign-Up") as HTMLFormElement
    const user_name = document.getElementById("userName") as HTMLInputElement
    const user_email = document.getElementById("email") as HTMLInputElement
    const user_password = document.getElementById("password") as HTMLInputElement

    let successmsg = document.querySelector('.success-msg') as HTMLParagraphElement
    successmsg.style.display='green'

    reg_form.addEventListener("submit", (e)=>{
        e.preventDefault()

        let userName = user_name.value.trim()
        let email = user_email.value.trim()
        let password = user_password.value.trim()

        const emailErrorMsg = document.getElementById('email-error') as HTMLParagraphElement;

        if (email === '') {
            if (emailErrorMsg) {
                emailErrorMsg.style.display = 'flex';
                emailErrorMsg.textContent = 'Email is required';
            }
            return;
        }
    
        let user = userName !== '' && email !== '' && password !== ''

        if(user){        
            let promise = new Promise <{error:string, message:string}>((resolve, reject)=>{
                fetch('http://localhost:4100/users', {
                    headers:{
                        'Accept': 'application/json',
                        'Content-type': 'application/json'
                    },
                    method: "POST",
                    body: JSON.stringify({
                        "userName": userName,
                        "email": email,
                        "password": password
                    })
                })
                .then((res=>res.json()))
                .then(res=>{
                    console.log(res);
                    
                    if (res.message){
                        successmsg.textContent = res.message
                        successmsg.style.display = 'flex'
                    
                        setTimeout(() => {
                            successmsg.style.display = 'none'
                            navigateToLogin()
                        }, 3000);
                    }

                    resolve(res);
                })
                .catch(error=>{
                    console.log(error);
                    
                });
            });
        }
    })

    function navigateToLogin(){
        window.location.href = 'landing.html'
    }
});


