const fs = require('fs');
//const { resolve } = require('path/posix');

let user = {
    firstName: 'Esti',
    lastName: 'naaman',
    email: 'e@na',
    password: '121212',
    lastDateHere: new Date(2021,05,21)
}
const createNewUser=()=>
{
  fs.writeFile('./jsonFile.json',"[]",(err)=>
  {
    if(err) throw err;
    console.log("wrote empty array!");
  });
}
const register=(user1)=>
{
  users=require('./jsonFile.json')
  users.push(user1);
  fs.writeFile('./jsonFile.json', JSON.stringify(users),(err)=>{
    if(err) throw err;
    console.log("write to file succeeded!");
})
}
const login=(email,password)=>
{
  return new Promise((resolve,reject)=>{
     users=require('./jsonFile.json')
  users.forEach( u=> { if (u.email==email && u.password==password)
 {
   resolve(u);
    console.log("hello " + u.firstName + " the last time you were here was in" + u.lastDateHere)
    let i=users.indexOf(u);
    users[i].lastDateHere=new Date();
    fs.writeFile('./jsonFile.json',JSON.stringify(users),(err)=>{
        if(err) throw err;
        console.log("write to file succeeded!");
    })
  }
  else
    {
      
        console.log("did not found");
        reject();
    }
  })
  })
 
}
// createNewUser();
// register(user);
//login("e@na","121212");
 module.exports=login
