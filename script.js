
// ASSIGNMENT JS-2

// concatination

document.getElementById("Concatenate").onclick = function(){
    let message = "Have a Nice Day"
    let userName = "Moiz"
    let banger = "!"
    let sum = (message + " " + userName + banger)
    document.getElementById("statement").innerHTML = '<p> "have a nice day" + " " + "moiz" + "!" </p>'
    document.getElementById("output").innerHTML = sum;
}

// Ask name from user

document.getElementById("nameFromUser").onclick = function(){
    let firstName = prompt("Enter your First name")
    let lastName = prompt("Enter your Last name")
    let fullName = `${firstName} ${lastName}`
    
    document.getElementById("statement").innerHTML = `first name = ${firstName} <br> last name ${lastName} <br> full name = first name + last name    ` 
    document.getElementById("output").innerHTML = `full name = ${fullName}`
}

// comparison operator

document.getElementById("compareOperators").onclick = function(){
    let num1 = +prompt("enter your first number")
    let num2 = +prompt("enter your second number")
    if (num1 === num2) {
        document.getElementById("statement").innerHTML = "num1 == num2"
        document.getElementById("output").innerHTML = "<span class='text-success'>Condition is true &#128522;<span/>"
    }
    else {
        document.getElementById("statement").innerHTML = "num1 !== num2"
        document.getElementById("output").innerHTML = " <span class='text-danger'> Condition is false &#128554; </span> "
    }
}

// if else if

document.getElementById("ifElseIf").onclick = function() {
    document.getElementById("statement").innerHTML = " ";
    let marks = +prompt ("Please enter your Marks")
    if (marks >= 90){
        document.getElementById("output").innerHTML = "<span class='text-success'>Congratulations! you got A+ Grade &#128522;</span> "
    }
      else if (marks >= 80) {
        document.getElementById("output").innerHTML = "<span class='text-success'>Congratulations! you got A Grade &#128522; </span> "
      }
      else if (marks >= 70) {
         document.getElementById("output").innerHTML = "<span class='text-warning'>you got B Grade &#128520; </span>"
      }
      else  {
        document.getElementById("output").innerHTML = "<span class='text-danger'>You Are Fail. &#128503; </span> "
      }  
}


// sets of conditions 

document.getElementById("testing").onclick = function() {
    document.getElementById("statement").innerHTML = " ";
    let age = prompt ("please enter your Age")
    let weight = prompt ("please enter your weight")

    if (age <= 10 && weight <=25) {
        document.getElementById("output").innerHTML = "you are a baby"
    }
    else if (age <= 18 && weight <= 50) {
        document.getElementById("output").innerHTML = "you are teenager and healthy" 
    }
    else if (age <= 25 && weight <= 65) {
        document.getElementById("output").innerHTML = "you are a youngman and healthy" 
    }
    else if  (age <= 30 && weight <=70) {
        document.getElementById("output").innerHTML = "you are a youngman and healthy Men" 
    }
    else if (age <= 40 && weight <=100) {
        document.getElementById("output").innerHTML = "you are a average age person and Fatty man"
    }
    else {
        document.getElementById("output").innerHTML = "you are a Senior Citizen and fatty"
    }

}

// if statement nested 

document.getElementById("ifNested").onclick = function() {
    let userName = prompt ("please Enter user name")
    if (userName === "moiz") {
        let password = prompt ("please enter password")
        if (password == 786) {
            document.getElementById("output").innerHTML = "<span style='color:green; text-transform:capitalize;'>you are successfully logged in</span>"
        }
        else {
            document.getElementById("output").innerHTML =  `<span class='text-danger'>${password} </span> is incorrect password. <br> Correct password is <span class='text-success'>786 </span> `
        }
    }
    else {
        document.getElementById("output").innerHTML = `<span class='text-danger'>${userName} </span> is incorrect user name. <br> Correct user name is <span class='text-success'> "Moiz" </span> `
    }
}



// login 
document.getElementById("login").onclick = function (){
    document.getElementById("statement").innerHTML = " ";
    let userName = prompt("please enter username")
    let passWord = +prompt("please enter password")
    if (userName === "Moiz" && passWord === 786 ){
        document.getElementById("statement").innerHTML = `<span style='color:green; font-weight:bold;'>${userName}</span>`
        document.getElementById("output").innerHTML = `<span style='color:green; text-transform:capitalize;'>you are successfully logged in</span>`
    }
    else {
        document.getElementById("output").innerHTML = "Try using Moiz as username and 786 as a password"
    }
}


// Clear statement

document.getElementById("clearStatement").onclick = function(){
    document.getElementById("statement").innerText = ""
}

document.getElementById("clearOutput").onclick = function(){
    document.getElementById("output").innerText = ""
}  


