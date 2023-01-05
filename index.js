// 1- XMLHTTPREQUEST

const request = new XMLHttpRequest();
request.open("GET", "https://jsonplaceholder.typicode.com/users");
request.send();
request.onload = () => {
    if (request.status === 200){
        //console.log(JSON.parse(request.response));
    } else {
       // console.log('error ${request.status}')
    }
}

// 2- FETCH API

fetch('https://jsonplaceholder.typicode.com/users')
.then(response=>{
   return response.json();
}).then(json=>{
    console.log(json);
})

//second approach for fetching API
async function getUsers(){
    let response = await fetch('https://jsonplaceholder.typicode.com/users');
    let data = response.json();
    return data;

}

getUsers().then(response=>{
    console.log(response);
})

// 3- AXIOS -third party javascript library
axios.get('https://jsonplaceholder.typicode.com/users')
.then(response=>{
    console.log(response.data);
}, err=>{
    console.log(err);
})

// 4- JQuerry

$(document).ready(function(){
    $.ajax({
        url:'https://jsonplaceholder.typicode.com/users',
        type:"GET",
        success:function(result){
            console.log(result)
        },
        error:function(err){
            console.log(err);

        }
    })
})
