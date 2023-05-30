function Register(event) {
    alert("working");
    event.preventDefault();

    var Name = document.getElementById("fbuser").value;
    // console.log(Name);
    var Email = document.getElementById("fbemail").value;
    // console.log(Email);
    var Password = document.getElementById("fbpassword").value;
    // console.log(Password);
    var ConfirmPassword = document.getElementById("fbconfirmpassword").value;
    // console.log(ConfirmPassword);

    if(Name && Email && Password && ConfirmPassword){
        if(Password.length >=8 && ConfirmPassword.length >=8){
            if(Password == ConfirmPassword){

                var Ls = JSON.parse(localStorage.getItem("Fbusers")) || []
                var flag = false;
                for (var i=0;i <Ls.length ; i++){
                    if(Ls[i].userEmail == Email){
                        flag=true;
                    }
                }
                if(!flag) {
                    var userdata = {userName: Name, userEmail: Email, userPassword: Password, userconfirmpassword: ConfirmPassword}
                    Ls.push(userdata)
                    localStorage.setItem("Fbusers",JSON.stringify(Ls))
                    alert("Registration Successful");
                    window.location.href='./FBLogin.html';
                    document.getElementById("fbuser").value ="";
                    document.getElementById("fbemail").value ="";
                    document.getElementById("fbpassword").value ="";
                    document.getElementById("fbconfirmpassword") .value ="";
                }
            } else {
                ("Password not matched")
                alert("Password not matched");
            }
        }else {
            ("Password should alteast 8 character")
            alert("Password should alteast 8 character");
        }
    } else {
        ("All fields are mandatory")
        alert("All fields are mandatory")
    }
}