let cl = console.log;

//js is single threaded language >> one by one execution occured / at one time only one function or code exixt
//js is syncranised lang
// CAllback function >> a function which is get executed after something happend

function printTen(){
    cl(10)
}

function printTwenty(){
    cl(20)
}

function printThirty(){
    cl(30)
}

printTen(); //10
printTwenty(); //20
printThirty(); //30


// function fetchData(){
//     setTimeout(() =>{
//         cl('data is ready now !!!')
//     }, 3000)
// }
// function templating(){
//     setTimeout(() =>{
//         cl('UI is ready now !!!')
//     }, 1000)
// }
// Here Templating execute first and then fetch data execute this is called Asynchronous behaviour of javascript
// fetchData()
// templating()

// callback function >> it is used to handle asynchronous behaviour
// callback fun.>> A function which is passed parameter/argument in another function

function fetchData(callbackfun){
    setTimeout(() =>{
        cl('data is ready now !!')
        callbackfun()
    }, 3000)
}
function templating(){
    setTimeout(() =>{
        cl('UI is ready now !!')
    }, 1000)
}
fetchData(templating)

let blogs = [
    {title:'blog one', info:'this is blog one on javascript'},
    {title:'blog two', info:'this is blog two on javascript'}
]

//Fetch >> get data from database(through api)

let info = document.getElementById('info');

function fetchBlog(){
     
    setTimeout(() =>{
          let result = `<ul class='list-group'>`
        blogs.forEach(ele =>{
            result += `<li class='list-group-item'>
            <h1>${ele.title}</h1>
           <p> ${ele.info}</p> </li>`
        })
        result += `</ul>`;
        info.innerHTML = result;   
    }, 1000)
}

function createBlogs(blog, callbackFun){
    setTimeout(() =>{
        blogs.push(blog);
        callbackFun()
    }, 2000)
}

createBlogs({title:'blog three', info:'this is blog three on javascript'}, fetchBlog)
fetchBlog()

function getData(callbackfun){
    setTimeout(() =>{
        cl("getting data");
        callbackfun();
    },4000)
}

function setvalue(){
    setTimeout(() =>{
        cl("value is ready now")
    },2000)
}
getData(setvalue);
// setvalue()

let profile = [
    {name:'Mukund', id:1,  profile:'Angular Developer'},
    {name:'krishna', id:2,  profile:'Front End Developer'},
    {name:'Mahendra', id:3,  profile:'Back End Developer'},   
    {name:'Shubham', id:4,  profile:'full stack Developer'},    

]

let ProfileData = document.getElementById('data');

function fetchProfile(){
    setTimeout(() =>{
        let result = "";
        profile.forEach((data,i)=>{
            result += `<tr><td>${i+1}</td>
            <td>${data.name}</td>
            <td>${data.id}</td>
            <td>${data.profile}</td>
            </tr>`
        });
        ProfileData.innerHTML = result;
    }, 1000)
}

function addOndata(value, callbackfun){
    setTimeout(() =>{
        profile.push(value) ;
        callbackfun()
    },2000)
}

// fetchProfile()
addOndata( {name:'Mahendra', id:5,  profile:'Angular Developer'}, fetchProfile)