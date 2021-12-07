const data =  {
       name: "",
       email: "",
       pass: "",
       vPass: ""
};

function getInfo() {
    let info = data;
    
    info.name = document.getElementById("name");
    info.email = document.getElementById("email");
    info.pass = document.getElementById("pwd");
    info.vPass = document.getElementById("vpwd");

    console.log(data.name.value);
    console.log(data.email.value);
    console.log(data.pass.value);
    console.log(data.vPass.value);
    return info;
}