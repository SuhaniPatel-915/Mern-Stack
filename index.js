/*let arr=[1,2,3,4,5,6,7,8,6,5,4,34,3,21,45,6,7,8]
let data= arr.filter((a)=>{
    return a>2
})
console.log(data);
let data1=data.filter((a)=>{
    return a%2==1
})
console.log(data1);
let data2=data1.reduce((a,b)=>{
    return a+b
})
console.log(data2);
////////////////////////////////////////////////
let arr=[1,1,1,2,3,4,5,6,7,8,6,5,4,34,3,21,45,6,7,8]
let data =arr.filter((a)=>{
    return a==1
})
console.log(data);
let name=data.map(()=>{
    return 'suhani,Yashi'
})
console.log(name);*/
/////////////////////////////////////
/*let arr=[1,2,3,4,54]
arr.push(50)
console.log(arr);
arr.pop()
console.log(arr);
arr.shift()
console.log(arr);
arr.unshift(0)
console.log(arr);*/
////////////////////////////////
/*let arr=[{id:1, name: "hello" },{id:2, name:"hii"},{id:3, name:"byee"},{id:4,name:"goodbyee"}]
let data=arr.filter((a)=>{
    return a.id>1
})
data.map((val)=>{
    console.log(val.name);
})*/
// let data=[
//     {
//       "title": "Inception",
//       "description": "A mind-bending thriller by Christopher Nolan.",
//       "releaseDate": "2010-07-16",
//       "image": "https://images.unsplash.com/photo-1613679074971-91fc27180061?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       "locations": [
//         {
//           "city": "Delhi",
//           "theater": "PVR Cinemas",
//           "showtimes": ["10:00 AM", "1:00 PM", "4:00 PM", "7:00 PM"],
//           "seats": ["A1", "A2", "A3", "B1", "B2", "B3"]
//         },
//         {
//           "city": "Delhi",
//           "theater": "INOX",
//           "showtimes": ["11:00 AM", "2:00 PM", "5:00 PM", "8:00 PM"],
//           "seats": ["A1", "A2", "A3", "B1", "B2", "B3", "C1"]
//         },
//         {
//           "city": "Mumbai",
//           "theater": "PVR Cinemas",
//           "showtimes": ["9:00 AM", "12:00 PM", "3:00 PM", "6:00 PM"],
//           "seats": ["A1", "A2", "A3", "B1", "B2", "B3", "C1", "C2"]
//         }
//       ]
//     },
//     {
//       "title": "Interstellar",
//       "description": "A journey beyond the stars by Christopher Nolan.",
//       "releaseDate": "2014-11-07",
//       "image": "https://images.unsplash.com/photo-1525463072426-4d65f1df37b2?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       "locations": [
//         {
//           "city": "Mumbai",
//           "theater": "Cinepolis",
//           "showtimes": ["9:30 AM", "12:30 PM", "3:30 PM", "6:30 PM"],
//           "seats": ["A1", "A2", "A3", "B1", "B2", "B3"]
//         },
//         {
//           "city": "Delhi",
//           "theater": "PVR Cinemas",
//           "showtimes": ["10:00 AM", "1:00 PM", "4:00 PM", "7:00 PM"],
//           "seats": ["A1", "A2", "A3", "B1", "B2", "B3"]
//         }
//       ]
//     },
//     {
//       "title": "The Dark Knight",
//       "description": "Batman faces his greatest nemesis in this thrilling action film.",
//       "releaseDate": "2008-07-18",
//       "image": "https://images.unsplash.com/photo-1550802992-9d2ff4937387?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3",
//       "locations": [
//         {
//           "city": "Mumbai",
//           "theater": "PVR Cinemas",
//           "showtimes": ["10:30 AM", "1:30 PM", "4:30 PM", "7:30 PM"],
//           "seats": ["A1", "A2", "A3", "B1", "B2", "B3"]
//         },
//         {
//           "city": "Delhi",
//           "theater": "INOX",
//           "showtimes": ["11:00 AM", "2:00 PM", "5:00 PM", "8:00 PM"],
//           "seats": ["A1", "A2", "A3", "B1", "B2", "B3", "C1"]
//         }
//       ]
//     },
//     {
//       "title": "The Matrix",
//       "description": "A computer hacker learns about the true nature of reality.",
//       "releaseDate": "1999-03-31",
//       "image": "https://images.unsplash.com/photo-1606395619914-34eae3b149fb?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3",
//       "locations": [
//         {
//           "city": "Delhi",
//           "theater": "INOX",
//           "showtimes": ["12:00 PM", "3:00 PM", "6:00 PM", "9:00 PM"],
//           "seats": ["A1", "A2", "B1", "B2"]
//         },
//         {
//           "city": "Bangalore",
//           "theater": "Cinepolis",
//           "showtimes": ["11:30 AM", "2:30 PM", "5:30 PM", "8:30 PM"],
//           "seats": ["A1", "A2", "A3", "B1"]
//         }
//       ]
//     },
//     {
//       "title": "The Godfather",
//       "description": "The story of a powerful crime family headed by Don Vito Corleone.",
//       "releaseDate": "1972-03-24",
//       "image": "https://images.unsplash.com/photo-1581091010841-50725f5d5b9b?q=80&w=3072&auto=format&fit=crop&ixlib=rb-4.0.3",
//       "locations": [
//         {
//           "city": "Mumbai",
//           "theater": "Cinepolis",
//           "showtimes": ["10:00 AM", "1:00 PM", "4:00 PM", "7:00 PM"],
//           "seats": ["A1", "A2", "A3", "B1"]
//         },
//         {
//           "city": "Delhi",
//           "theater": "PVR Cinemas",
//           "showtimes": ["11:30 AM", "2:30 PM", "5:30 PM", "8:30 PM"],
//           "seats": ["A1", "A2", "A3", "B1", "C1"]
//         }
//       ]
//     },
//     {
//       "title": "Gladiator",
//       "description": "A betrayed Roman general seeks revenge against the emperor.",
//       "releaseDate": "2000-05-05",
//       "image": "https://images.unsplash.com/photo-1600805383656-e3ef72e0c9fc?q=80&w=3072&auto=format&fit=crop&ixlib=rb-4.0.3",
//       "locations": [
//         {
//           "city": "Delhi",
//           "theater": "INOX",
//           "showtimes": ["1:00 PM", "4:00 PM", "7:00 PM", "10:00 PM"],
//           "seats": ["A1", "A2", "A3", "B1"]
//         },
//         {
//           "city": "Mumbai",
//           "theater": "PVR Cinemas",
//           "showtimes": ["10:00 AM", "1:00 PM", "4:00 PM", "7:00 PM"],
//           "seats": ["A1", "A2", "B1", "C1"]
//         }
//       ]
//     },
//     {
//       "title": "Titanic",
//       "description": "A romance blooms between two passengers on the ill-fated RMS Titanic.",
//       "releaseDate": "1997-12-19",
//       "image": "https://images.unsplash.com/photo-1548897183-8ffb4f70bfe1?q=80&w=3072&auto=format&fit=crop&ixlib=rb-4.0.3",
//       "locations": [
//         {
//           "city": "Mumbai",
//           "theater": "PVR Cinemas",
//           "showtimes": ["10:00 AM", "1:00 PM", "4:00 PM", "7:00 PM"],
//           "seats": ["A1", "A2", "A3", "B1"]
//         },
//         {
//           "city": "Delhi",
//           "theater": "INOX",
//           "showtimes": ["11:30 AM", "2:30 PM", "5:30 PM", "8:30 PM"],
//           "seats": ["A1", "A2", "B1", "C1"]
//         }
//       ]
//     },
//     {
//       "title": "Avatar",
//       "description": "A paraplegic former Marine dispatched to the moon Pandora on a unique mission.",
//       "releaseDate": "2009-12-18",
//       "image": "https://images.unsplash.com/photo-1603201025637-0d7a6eb4a5ab?q=80&w=3072&auto=format&fit=crop&ixlib=rb-4.0.3",
//       "locations": [
//         {
//           "city": "Delhi",
//           "theater": "Cinepolis",
//           "showtimes": ["12:00 PM", "3:00 PM", "6:00 PM", "9:00 PM"],
//           "seats": ["A1", "A2", "B1", "B2"]
//         },
//         {
//           "city": "Mumbai",
//           "theater": "PVR Cinemas",
//           "showtimes": ["11:30 AM", "2:30 PM", "5:30 PM", "8:30 PM"],
//           "seats": ["A1", "A2", "A3", "B1", "B2"]
//         }
//       ]
//     },
//     {
//       "title": "Forrest Gump",
//       "description": "The life story of a slow-witted but kind-hearted man from Alabama.",
//       "releaseDate": "1994-07-06",
//       "image": "https://images.unsplash.com/photo-1588433548013-687d7261a63a?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3",
//       "locations": [
//         {
//           "city": "Mumbai",
//           "theater": "INOX",
//           "showtimes": ["10:30 AM", "1:30 PM", "4:30 PM", "7:30 PM"],
//           "seats": ["A1", "A2", "B1", "B2"]
//         },
//         {
//           "city": "Delhi",
//           "theater": "PVR Cinemas",
//           "showtimes": ["11:00 AM", "2:00 PM", "5:00 PM", "8:00 PM"],
//           "seats": ["A1", "A2", "A3", "B1"]
//         }
//       ]
//     }
//   ]
//   data.map((val)=>{
// console
//   })
//Higher order function
// 
//  let arr=[1,2,3,'hello','hii','bye',true,false]
//  function getNum(){
//     let result=[]
//     for(let i of arr){
//       if(typeof i==='number'){
//         result.push(i)
//       }
//     }
//       return result
//  }
//  let data1=getNum()
//  console.log(data1);
// function outer(){
//   let count=0;
//   return function(){
//     count++
//     return count
//   }
// }
// let data1=outer()
// console.log(data1());
// console.log(data1());
// console.log(data1());
//console.log(undefined==undefined);
// console.log('one');
// console.log('two');
//Asynchronouse programming
// setTimeout(()=>{
//   console.log('one');
// },0)
// console.log('two');
// function step1(fn){
//   setTimeout(()=>{
//     console.log("select achi si photo...")
//     fn()
//   },4000)
// }
// function step2(fn){
//   setTimeout(()=>{
//     console.log("filterr ki bahut jarurat hai...")
//     fn()
//   },4000)
// }
// function step3(fn){
//   setTimeout(()=>{
//     console.log("caption...")
//     fn()
//   },4000)
// }
// function step4(fn){
//   setTimeout(()=>{
//     console.log("post...")
//     fn()
//   },4000)
// }
// step1(function(){
//   step2(function(){
//     step3(function(){
//       step4()
//     })
//   })
// })
// let promise = new Promise((res,rej)=>{
//   let r=false
//   if (r){
//     rej('mai nhi aaungi')
//   }
//   else{
//     res('me to aaungi')
//   }
// })
// // console.log(promise);
// promise.then((data)=>{
//   console.log(data);
// }).catch((a)=>{
//   console.log(a);
// })
// function step1(){
//   return new Promise((res,rej)=>{
//     setTimeout(() => {
//       console.log('select');
//       res()
//     }, 4000)
//   })
// }
// function step2(){
//   return new Promise((res,rej)=>{
//     setTimeout(() => {
//       console.log('filter');
//       res()
//     }, 4000)
//   })
// }
// function step3(){
//   return new Promise((res,rej)=>{
//     setTimeout(() => {
//       console.log('caption');
//       res()
//     }, 4000)
//   })
// }
// async function call() {
//   await step1()
//   console.log('hello')
//   await step2()
//   await step3()
// }
// call()
//api
//fetch('https://dummyjson.com/recipes').then((data)=>{
 // return data.json()
  //console.log(data);
//}).then((a)=>{
  //console.log(a.recipes[0].name);
 // let data= a.recipes.filter((val)=>{
    
    // console.log(val.id)
    // console.log(val.name)
//   })
// }).catch((err)=>{
//   console.log(err);
// })
// let data =arr.filter((a)=>{
//   return a==1

// ----DOM---Document object model---//
// let div= document.querySelector('div')
// let h1= document.createElement('h1')
// let p= document.createElement('p')
// p.innerText='mai hu p tag'
// h1.innerText='hello'
// div.append(h1,p)
// console.log(div,"hehehe");

// let h1= document.getElementsByClassName('one')
// h1[0].style.color='red'
// let h2=document.querySelector('h1')
//EVENT
// let bodyTags=document.querySelector('body')
// function fun1(){
//   console.log('bye');
//   bodyTags.style.backgroundColor='blue'
// }
//INPUT EVENT
//  let inp= document.querySelector('input')
//  let h2=document.querySelector('h2')
//  inp.addEventListener('input',(e)=>{
//   // console.log('tumse na ho payega!!');
//   // console.log(e.target.value);
//   h2.innerText=e.target.value;
//  })
//  let img= document.querySelector('img')
//  img.setAttribute('src','https://images.unsplash.com/photo-1731596691311-5955c052b66e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')
 
// let arr=['https://images.unsplash.com/photo-1731596691311-5955c052b66e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D','https://images.unsplash.com/photo-1731432245325-d820144afe4a?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D','https://plus.unsplash.com/premium_photo-1724078321987-4f1fcdd66e56?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D']
// let img= document.querySelector('img')
// let num=0
// setInterval(()=>{
//   img.setAttribute('src',arr[num])
//   num=(num+1)%arr.length
// },2000)

// let inp= document.querySelector('input')
// let btn1= document.querySelector('button')
// let ul= document.querySelector('ul')

// btn1.addEventListener('click',()=>{
//   // let data=inp.value
//   let li= document.createElement('li')
//   li.innerText=inp.value
//   ul.append(li)
//   inp.value=''
// })
// let btn= document.querySelector('button')
// let inp= document.querySelector('input')
// let h2= document.querySelector('h2')
// let p= document.querySelector('p')
// btn.addEventListener('click',()=>{
//   let apiKey='9f6290d6cda9a36a63755fadee71f83d'
//    let city=inp.value
//    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`).
//    then((res)=>{
//     return res.json()

//     }).then((data)=>{
//       console.log(data,"heheh");
//       h2.innerText=data.name
//       p.innerText=data.main.temp
//     })

// })
// let  h2= document.querySelector('h2')
// let p= document.querySelector('p')
// let img= document.querySelector('img')

fetch('https://dummyjson.com/recipes').then((res)=>{
  return res.json()
}).then((data)=>{
  // console.log(data.recipes,"hehhee");
  // img.setAttribute('src',data.recipes[17].image)
  // h2.innerText=data.recipes[17].name
  api(data.recipes)
  
})

function api(apiData){
  let div= document.querySelector('div')
  console.log(apiData,"hello");
  for(let val of apiData){
       let img=document.createElement('img')
       let h2=document.createElement('h2')
       img.setAttribute('src',val.image)
       h2.innerText=val.name
       div.append(img,h2)
  }
}