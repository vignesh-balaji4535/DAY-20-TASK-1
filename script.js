


async function getApiData(){
   try{
   let response=await fetch(`https://api.chucknorris.io/jokes/random`);
 let result= await response.json();
console.log(result);
 let createCard=document.getElementById('card_1');


 createCard.innerHTML=`<div class="card text-center">
 <div class="card-header">
 Chuck Norris jokes API
 </div>
 <div class="card-body">
 
   <h5 class="card-title">${result.id}</h5>
   <p class="card-text">${result.updated_at}</p>
   <p class="card-text">${result.value}</p>
   <a href="${result.url}" class="btn btn-primary">Go somewhere</a>
 </div>
 <div class="card-footer text-body-secondary">
   2 days ago
 </div>
</div>`
}



catch{(err)=>console.log(err)}
}

getApiData()
