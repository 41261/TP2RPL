const DB_USER = [
    
]

const inputUsername = document.querySelector("#username");
const inputPassword = document.querySelector("#password");
const inputConfirmPassword = document.querySelector("#confirmpassword");
const buttonSubmit = document.querySelector("#submitForm");

buttonSubmit.addEventListener('click', (e) => {

    e.preventDefault();
    const valueInputUsername = inputUsername.value;
    const valueInputPassword = inputPassword.value;
    const valueInputConfirmPassword = inputConfirmPassword.value;

    
    let flag = 0;
    if(valueInputPassword === valueInputConfirmPassword){

        flag = 1;
        DB_USER.push({
            username : valueInputUsername,
            password : valueInputPassword
        });
        
        for(var i=0; i<DB_USER.length; i++){
            console.log(DB_USER[i]);
        }
    }

    const warningMsg = document.querySelector(".warning");
    
    if(flag === 0){
        warningMsg.className = "text-danger";
    }else if(flag === 1){
        alert("Register Succeed!");
    }
})