
let defaultMsg = document.querySelector('#chooseMember') as HTMLSpanElement

let membersList = document.querySelector('.membersList') as HTMLFormElement

let assignTo = document.querySelector('.assignTo') as HTMLDivElement




//Get registered users
let registeredUser = JSON.parse(localStorage.getItem('storedNewUser') || '{}')


if(!registeredUser){
    defaultMsg.style.display = 'block'
}else{
    defaultMsg.style.display ='none'
    let memberOptions = document.createElement('select') as HTMLSelectElement
    memberOptions.className = 'toAssign'
    if(registeredUser){
    registeredUser.forEach((user:any )=> {
        let optionValue = document.createElement('option') as HTMLOptionElement
        optionValue.value = `${user.firstName} ${user.lastName}`
        optionValue.innerHTML = `${user.firstName} ${user.lastName}`
        memberOptions.appendChild(optionValue)
        assignTo.appendChild(memberOptions)        
    });
}
}




