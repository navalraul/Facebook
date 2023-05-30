function Login(event) {
    alert("working");
    event.preventDefault();

    var Email = document.getElementById("fbemail").value;
    // console.log(Email);
    var Password = document.getElementById("fbpassword").value;
    // console.log(Password);

    var Ls = JSON.parse(localStorage.getItem("Fbusers"));

    var Fbcurrentusers;
    var flag = false;
    for (var i =0;i <Ls.length ; i++){
        if(Ls[i].userEmail == Email && Ls[i].userPassword == Password){
            flag = true;
            Fbcurrentusers = Ls[i]
        }
    }
    if(flag == true) {
        localStorage.setItem("Fbcurrentusers",JSON.stringify(Fbcurrentusers))
        window.location.href = './FBHome.html';
        alert("Login Successful")
    } else {
        alert("Credentials not matched")
    }
}