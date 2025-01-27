document.addEventListener("DOMContentLoaded", function() {
window.onload = function() {
    let title = document.getElementById('title');
    let text = document.getElementById("post");
    let addcom = document.getElementById("addbutton");
    let paragraf = document.querySelector(".showall");

    // incarca comentariile vechi din localStorage
    let savedComments = JSON.parse(localStorage.getItem("articles")) || [];
    savedComments.forEach(function(comment) {
        displayComment(comment);
        paragraf.innerHTML = "";
    });

    // nou comentariu
    function displayComment(comment) {
        let commentElement = document.createElement("article");
        document.getElementById("posts").appendChild(commentElement);
        commentElement.classList.add("post");
        commentElement.style.backgroundColor = "rgba(0, 0, 0, 0.514)";
        commentElement.style.boxShadow = "0 0 20px #33000084";
        commentElement.style.padding = "20px";
    
        let t = document.createElement("h3");
        t.innerHTML = comment.title;
    
        let c = document.createElement("p");
        c.innerHTML = comment.text;
  
        let upload_d = document.createElement("h5");
        let d = new Date();
        upload_d.innerHTML = `<p>Uploaded on: </p> ${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`;
    
        commentElement.appendChild(t);
        commentElement.appendChild(c);
        commentElement.appendChild(upload_d);
    }

    addcom.onclick = function(event) {
        let comment = {
            title: title.value.trim(),
            text: text.value.trim()
        };
        
        if (comment.title && comment.text) {
            savedComments.push(comment);
            localStorage.setItem("articles", JSON.stringify(savedComments));
            displayComment(comment);
            alert("Your comment was successfully saved!");
            title.value = '';  
            text.value = '';   // Dupa adaugare, se sterg sectiunile
        } else {
            alert("Please complete both sections.");
        }

        event.stopPropagation();
    };

    paragraf.onclick = function() {
        localStorage.removeItem("articles");
        savedComments = [];  // se sterg cariabilele locale
        document.getElementById("posts").innerHTML = '';  // stergerea tuturor comentariilor
        paragraf.innerHTML = "No comments yet.";
    };
};
});