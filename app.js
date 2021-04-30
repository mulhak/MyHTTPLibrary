document.getElementById('get').addEventListener('click', getUsers);
document.getElementById('post').addEventListener('click', createPost);
document.getElementById('update').addEventListener('click', updateUser);
document.getElementById('delete').addEventListener('click', deleteUser);

const http = new MyHTTP;

function getUsers(){
 http.get('https://jsonplaceholder.typicode.com/users')
 .then(data =>{
     let output = ''; 
     data.forEach(function(user){
     output += `<li>${user.name}, ${user.username}</li>`;
     });
     document.getElementById('output').innerHTML = output;
 })
 .catch(err => console.log(err));}


//User Data for post,put and delete..
const data = {
   name: 'Kieran Mulhall',
   username:'Jackdaw',
   email: 'kieran@gmail.com'
}

function createPost(){
http.post('https://jsonplaceholder.typicode.com/users', data)
.then(data =>console.log(data)) 
.catch(err => console.log(err));}




 function updateUser(){
 http.put('https://jsonplaceholder.typicode.com/users/2', data)
 .then(data =>console.log(data))
 .catch(err => console.log(err));}


 function deleteUser() {
 http.delete('https://jsonplaceholder.typicode.com/users/2')
 .then(data =>console.log(data))
 .catch(err => console.log(err));}
 