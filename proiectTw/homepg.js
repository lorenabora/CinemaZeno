
window.onload=function(){
  //let greatings= document.createElement("div");
  document.body.addEventListener("click", function(event){
    let greatings= document.createElement("div");
     
    let url= "http://localhost:8000/proiectTW/greatings.json";
        fetch(url).then(function(response){
            if(response.status==200){
                return response.json();
            }
            else{
                throw new Error("Status:"+ response.status)
            }
        }).then(function(memo){
            let indiceRandom= Math.floor(Math.random()*memo.length);
            greatings.innerHTML= memo[indiceRandom].salut;
        }).catch(function(err){
            console.log("Ups! Something went wrong. Error: "+err);
        })
        
    document.body.appendChild(greatings);
    greatings.classList.add("popup");

    greatings.style.position = "absolute";
    greatings.style.left = `${event.clientX}px`;
    greatings.style.top = `${event.clientY}px`;
      
    setTimeout(function(){
        greatings.style.animation = "dissapear 3s";
        setTimeout(function(){
          greatings.remove();},3000);
        event.stopPropagation();
      },4000);
  });

};


// second attempt without localStorage
// window.onload=function(){
    
//       document.body.addEventListener("click", function(event){

//         let greatings= document.createElement("div");
//         greatings.innerHTML=`<p>Welcome!</p>`;
//         document.body.appendChild(greatings);
//         greatings.classList.add("popup");

//         greatings.style.position = "absolute";
//         greatings.style.left = `${event.clientX}px`;
//         greatings.style.top = `${event.clientY}px`;
          
//         setTimeout(function(event){
//             greatings.style.animation = "dissapear 3s";
//             setTimeout(function(){
//               greatings.remove();},3000);
//             event.stopPropagation();
//           },5000);
//       });
    
// };