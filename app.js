document.getElementById('get').addEventListener('click', getUsers);
document.getElementById('post').addEventListener('click', createUser);
document.getElementById('update').addEventListener('click', updateUser);
document.getElementById('delete').addEventListener('click', deleteUser);

const http = new MyHTTP;

function getUsers(){
 http.get('https://jsonplaceholder.typicode.com/users')
 .then(data =>{
     let outputLocal = '';
     let output = ''; 
     data.forEach(function(user){
     outputLocal +=`${user.name}, ${user.username}`;
     output += `<li>${user.name}, ${user.username}</li>`;
     });
     localStorage.setItem('outputLocal', JSON.stringify(outputLocal));
     document.getElementById('output').innerHTML = output;     
    })
      .catch(err => console.log(err));}


//User Data for post,put and delete..
 const data = {
   name: 'Kieran Mulhall',
   username:'Jackdaw'
 }

 function createUser(){
    http.post('https://jsonplaceholder.typicode.com/users', data)
    .then(data =>{
        localStorage.getItem(outputLocal);
        document.getElementById('outputLocal').innerHTML =data 
        // incorrect above as this is going to jsonplaceholder......


    }) 
    .catch(err => console.log(err));}




 function updateUser(){
    http.put('https://jsonplaceholder.typicode.com/users/2', data)
    .then(data =>console.log(data))
    .catch(err => console.log(err));}


 function deleteUser() {
    http.delete('https://jsonplaceholder.typicode.com/users/2')
    .then(data =>console.log(data))
    .catch(err => console.log(err));}
    