const mainBody = document.getElementById("div-pop");
const loginButton = document.getElementById("show-login");
const signUpButton = document.getElementById("show-sign-up");


function signIn(){
    const newUserName = document.getElementById("new-user-name").innerText;
    const newUserSurname = document.getElementById("new-user-surname").innerText;
    const newUserEmail = document.getElementById("new-user-email").innerText;
    const newUserPassword = document.getElementById("new-user-password").innerText;
    
    const newUserData ={
    email : newUserEmail,
    name : newUserName,
    surname: newUserSurname,
    password: newUserPassword,
    }
    signUpButton.preventDefault()
    users.push(newUserData);
    logInForm();
}

function logIn() {
    const userEmail = document.getElementById("email").innerText;
    const userPassword = document.getElementById("password").innerText;
    let userName = null;
    for (let i=0; users.length > i; i++){
        if (userEmail === users[i].email){
            if (userPassword === users[i].password) {
                return userName = users[i].name;
            }else {
                alert("Please enter correct password.");
            }
        }
           
    }
    if (userName === null) {
        alert("Please enter a valid email or sign up.")
    }
    loginButton.preventDefault();
    alert(`Welcome ${userName}!`)

}




let users=[{
    email : "jon@example.com",
    name : "Jon",
    surname: "Doe",
    password: "JD1234!@",
}]

function logInForm() {
    mainBody.innerHTML = `<div class="loader"></div>`;
    setTimeout(function(){
        mainBody.innerHTML = `<div class="popup">
        <div class="close-btn">&times;</div>
        <form class="form">
            <h2>Log In</h2>
            <div class="form-element">
                <label for="email">Email</label>
            <input type="email" id="email" placeholder="Enter email" required>
            </div>
            <div class="form-element">
                <label for="password">Password</label>
                <input type="password" id="password" placeholder="Enter password" required></input>
            </div>
            <div class="form-element">
                <input type="checkbox" id="remember-me">
                <label for="remember-me">Remember me</label>
            </div>
            <div class="form-element">
                <button type="submit" >Log in</button>
            </div>
            <div class="form-element">
                <a href="#">Forgot password?</a>
            </div>
        </form>
        </div>


    `;   
    },1500);
}

function signUpForm() {
    mainBody.innerHTML = `<div class="loader"></div>`;
    setTimeout(function(){
        mainBody.innerHTML = `<div class="popup">
        <div class="close-btn">&times;</div>
        <form class="form">
            <h2> Sign Up</h2>
            <div class="form-element">
                <label for="email">Name</label>
            <input type="text" id="name" placeholder="Name" required>
            </div>
            <div class="form-element">
                <label for="email">Surname</label>
            <input type="text" id="surname" placeholder="Last Name" required>
            </div>
            <div class="form-element">
                <label for="email">Email</label>
            <input type="email" id="email" placeholder="Enter email" required>
            </div>
            <div class="form-element">
                <label for="password">Password</label>
                <input type="password" id="password" placeholder="Enter password" required></input>
            </div>
            <div class="form-element">
                <input type="checkbox" id="remember-me">
                <label for="remember-me">Remember me</label>
            </div>
            <div class="form-element">
                <button type="submit">Sign In</button>
            </div>
            <div class="form-element">
                <a href="#">Forgot password?</a>
            </div>
        </form>
        </div>
        

    `;   
    },1500);
}

loginButton.addEventListener("click",logInForm);
signUpButton.addEventListener("click",signUpForm);
