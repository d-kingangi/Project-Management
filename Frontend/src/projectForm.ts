const project_form = document.getElementById( "createProject") as HTMLFormElement
const project_title = document.getElementById("title") as HTMLInputElement
const project_descr = document.getElementById("descr") as HTMLInputElement
const project_end_date = document.getElementById("end_date") as HTMLInputElement
const userAssignedDropdown = document.getElementById("user_assigned") as HTMLSelectElement;
const token = localStorage.getItem('token') as string

let successmsg = document.querySelector('.success-msg') as HTMLParagraphElement
successmsg.style.display='none'

if (!token) {
    console.error("Token not available. Redirect to login page.");
} else {
    fetch('http://localhost:4100/users', {
    headers:{
        'Accept': 'application/json',
        'Content-type': 'application/json',
        'token': token
    },
  })
    .then(res => { 
        if (!res.ok) {
            throw new Error(`Error fetching users: ${res.statusText}`);
        }
        return res.json();
    })
  .then(responseData => {;
      
    const users = responseData.users

    if (users) { 
        for(let user of users) {            
          const option = document.createElement('option');
          option.value = user.user_id;
          option.text = user.userName;
          userAssignedDropdown.appendChild(option);
        }     
      } else {
        console.error('Error fetching users: Invalid response format');
      }
    })
  .catch(error => {
    console.error('Error fetching users:', error);
    console.log('Full response:', error.response);
  })
}

project_form.addEventListener("submit", (e)=>{
    e.preventDefault()

    let title = project_title.value.trim();
    let descr = project_descr.value.trim();
    let end_date = project_descr.value.trim();
    const user_assigned = userAssignedDropdown.value;

    let project = title !== '' && descr !== '' && end_date !== '' && user_assigned !== '';

    if(project){        
        let promise = new Promise <{error:string, message:string}>((resolve, reject)=>{
            fetch('http://localhost:4100/projects', {
                headers:{
                    'Accept': 'application/json',
                    'Content-type': 'application/json'
                },
                method: "POST",
                body: JSON.stringify({
                    "title": title,
                    "descr": descr,
                    "end_date": end_date,
                    "user_assigned": user_assigned
                })
            })
            .then((res=>res.json()))
            .then(res=>{
                console.log(res);

                if(res.message){
                    successmsg.textContent = res.message
                    successmsg.style.display = 'flex'

                    setTimeout(() => {
                        successmsg.style.display = 'none'
                        navigateToProjects()
                    }, 3000);
                }
                resolve(res)
            })
            .catch(error=>{
                console.log(error);
                
            })
        })
    }

    function navigateToProjects(){
        window.location.href = 'admin-dashboard.html'
    }

})