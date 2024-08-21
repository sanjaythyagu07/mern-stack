
    async function getapi(){
        let data1 = {
    "username": document.getElementById("username").value,
    "password": document.getElementById("password").value
}
         let res = await fetch("https://reqres.in/api/users" ,{"method" :"POST",body:JSON.stringify(data1),headers:{"content-type":"application/json"}});
         let json = await res.json();
         console.log(json);
     }
     document.getElementById("getapi").addEventListener("click",getapi);
     
