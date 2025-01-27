 // Check if the user is already logged in on page load
 window.onload = function() {
    document.getElementById("loginWindow").style.position="absolute";
    document.getElementById("welcomeMsg").style.position="absolute";
    if (localStorage.getItem("UserFormData")) {  //inainte era username
        showWelcomeMessage();
    } else {
        showLoginForm();
    }
};

// Show login form
function showLoginForm() {
   document.getElementById("loginWindow").style.display = "block"; 
   document.getElementById("loginWindow").style.animation="show 3s";
   document.getElementById("welcomeMsg").style.display = "none";
   let skipbutton= document.getElementById("skip");
   skipbutton.onclick=function(){
    setTimeout(function(){
        document.getElementById("loginWindow").remove();
      },1000);
   }
}

// Show welcome message
function showWelcomeMessage() {
   // const username = localStorage.getItem("username");
    const username= JSON.parse(localStorage.getItem("UserFormData")).username;
    document.getElementById("userName").innerText = username;
    document.getElementById("loginWindow").style.display = "none";
    document.getElementById("welcomeMsg").style.display = "block";
    let greatings= document.getElementById("hi");
    greatings.onclick=function(){
        setTimeout(function(){
            document.getElementById("welcomeMsg").remove();
          },1000);
    }
}

// Login function
function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Simple validation (you can replace with an API call to authenticate)
    if (username && password) {
        // Store username in localStorage
        localStorage.setItem("UserFormData", JSON.stringify({username: username, password: password}));
        showWelcomeMessage();
    } else {
        alert("Please enter valid data.");
    }
}

let newsub = document.getElementById("new");
newsub.onclick = function() {
    function newWindow() {
        let newWinForm = window.open("about:blank", "form", "width=300,height=500");
        newWinForm.document.write("See you next time!");
        let html = `<!DOCTYPE html><html>
        <head><style>
        body {
            margin: 20px;
            padding:10px;
            overflow: hidden;
            background-color: black;
            color:white;
        }
        input {
            width: 40%;
            height: 35px;
            margin-top: 10px;
            margin-bottom: 10px;
            box-shadow: 0 0 20px rgba(0, 0, 0, 0.514);
            background-color:rgba(219, 0, 0, 0.67);
            color:white;
            border-color: #33000024;
        }
        label{
            font-size: 1.1em;
            font-family: 'Times New Roman', Times, serif;
        }
        button {
            float: left;
            width: 100px;
            font-family: 'Times New Roman', Times, serif;
            background-color: black;
            box-shadow: 0 0 20px rgba(192, 192, 192, 0.445);
            color:rgb(255, 255, 255);
        }
        </style></head>
        <body>
        <h2>Create your account!</h2>
        <form id="Form4Acc" onsubmit="return CreateForm()">
        <label for="newUser">Username:</label>
        <input type="text" id="newUser" name="name"><br><br>
    
        <label for="email">Email (optional):</label>
        <input type="email" id="email" name="email"><br><br>
    
        <label for="newPassword">Password:</label>
        <input type="password" id="newPassword" name="password"><br><br>
    
        <button type="submit">Submit</button>
        </form>
        <br>
        </body></html>`;
        newWinForm.document.body.insertAdjacentHTML('afterbegin', html);
    
        newWinForm.CreateForm = function() {
            let isValid = true;
            const nusername = newWinForm.document.getElementById("newUser").value;
            const email = newWinForm.document.getElementById("email").value;
            const newPass = newWinForm.document.getElementById("newPassword").value;
    
            // validare username
            if (nusername.trim() === "") {
                alert("Username is required.");
                isValid = false;
            }
    
            // validare email
            if (email && !/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(email)) {
                alert("Invalid email format.");
                isValid = false;
            }
    
            // imi trb o parola puternica care sa aiba minim 8 char
            if (newPass.length < 8 || !/\d/.test(newPass)) {
                alert("Password must be at least 8 characters and contain a number.");
                isValid = false;
            }
    
            if (isValid) {
                localStorage.setItem("UserFormData", JSON.stringify({username: nusername, password: newPass}));
                setTimeout(function() { 
                    newWinForm.location.href = "CinemaZeno.html"; 
                }, 100); // 100 milisecunde delay
            }
    
            return isValid;
        }
    }
    newWindow();
}

// Logout function
function logout() {
    // Remove username from localStorage
    localStorage.removeItem("username");
    showLoginForm();
}