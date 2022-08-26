module.exports = team => {

    console.log("Inside generatedHtml");
    return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta http-equiv="X-UA-Compatible" content="ie=edge">
<title>Team Profile Generator</title>
<style>
  
   .header {
       background-color: rgb(247, 163, 155);
       border: solid black;
       text-align: center;
       font-size: 25px;
    
   }
   .container-body {
       display: flex;
       justify-content: space-evenly;
   }
   .card {
       background-color:rgb(255, 255, 255);
       margin-top: 4%;
       border: solid black;
       font-size: x-large;
   }
   .card-header{
       margin: 10%;
   }
   .card-body{
       margin: 5%;
   }
</style>
</head>
<body>
<div class=header>
   <h1>My Team</h1>
</div>
<div class="container-body">
    
     </div>
      
</body>
</html>`

}

//arr is the employee object and looking for the properties in that class
const generateCard = function (arr) {
   
    let roleInfo;

    if (arr.title === "Manager") {
       // roleInfo = `Office Number: ${arr.officeNumber}`
    } else if (arr.title === "Engineer") {
        //roleInfo = `Github Username: ${arr.github}`
    } else if (arr.title === "Intern") {
        //roleInfo = `School: ${arr.school}`
    }

    return `<div class="card">
<div class="card-header">
<h2>${arr.name}</h2>  
<h2><i class="far fa-user"></i> ${arr.title}</h2>
<hr>
</div>
<div class="card-body">
<ul>
    <li>ID: ${arr.id}</li>
    <li>Email: ${arr.email}</li>
    <li>${roleInfo} </li>
</ul>
</div>
</div>`
}

//exports.module = generateHtml
//exports.module = generateCard;