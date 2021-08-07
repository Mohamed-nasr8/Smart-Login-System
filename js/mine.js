let input1= document.getElementById("inName");
let input2= document.getElementById("inEmail");
let input3= document.getElementById("inPass");
let input4= document.getElementById("userEmail");
let input5= document.getElementById("userpass");

let myData;
if( localStorage.getItem("userData" ) ==null   )
{
    myData = [];
}
else
{               
    myData = JSON.parse(localStorage.getItem("userData"));
}


function addNew()
{
let inputName=input1.value;
let inputEmail=input2.value;
let inputPass=input3.value;


if(checkEmail()== false)
{
    document.getElementById("warning").innerHTML=" <p class='red'>email already exists</p>"
}
else
{
    if(inputEmail==""||inputName==""||inputPass=="")
    {
    document.getElementById("warning").innerHTML=" <p class='red'>All inputs is required</p>"
    
    }
    
    else
    {
        let person={name:inputName,email:inputEmail,pass:inputPass}
        myData.push(person);
        localStorage.setItem("userData",JSON.stringify(myData))
        console.log(myData);
        document.getElementById("warning").innerHTML="  <p class='good'>Success</p>"
    
    }
}


}

function checkEmail()
{
    for (let i=0;i<myData.length;i++)
{
    if(myData[i].email.toLowerCase()==input2.value.toLowerCase())
    {
 return false;
    }
}
}

//login#####################################################################
function test()
{
    let loginEmail=input4.value
    let loginPass=input5.value
    for (var i=0;i<myData.length;i++)
    {
        
        if(myData[i].email.toLowerCase()==loginEmail.toLowerCase() && myData[i].pass.toLowerCase()==loginPass.toLowerCase())
        {


            window.location.href = "home.html";
            localStorage.setItem("userName",myData[i].name)
       }
        if(loginEmail==""||loginPass=="")
        {
        document.getElementById("warning").innerHTML=" <p class='red'>All inputs is required</p>"
        
        }
        else
        {
            document.getElementById("warning").innerHTML="  <p class='red'>incorrect email or password            </p>"

        }

    }

}

//home#####################################################################
var name=localStorage.getItem("userName")

document.getElementById("user").innerHTML="welcome " + name
