window.onload= function(){
    document.getElementById("FunFacts").style.display = "block"; 
    document.getElementById("FunFacts").style.animation="show 1s";

    let show=document.getElementById("funfact");
    let div=document.getElementById("forTheFacts");
    let element=document.getElementById("idk");
    let target=document.getElementById("here");
    const myStyle = window.getComputedStyle(element);
    const stylesToCopy = ['padding' , 'textAlign']; 
    stylesToCopy.forEach(style => { 
        target.style[style] = myStyle[style]; 
    });

    show.onclick= function(){
        let url= "http://localhost:8000/proiectTW/funfacts.json";
        fetch(url).then(function(response){
            if(response.status==200){
                return response.json();
            }
            else{
                throw new Error("Status:"+ response.status)
            }
        }).then(function(date){
            let indiceRandom= Math.floor(Math.random()*date.length);
            div.innerHTML= date[indiceRandom].funFact;
        }).catch(function(err){
            console.log("Ups! Something went wrong!=> "+err);
        })
    }
}