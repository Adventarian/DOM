document.getElementById("main-heading").innerHTML = "New Dom Layout";

document.getElementById("page-header").classList.add("bg-success");

document.getElementById("para1").textContent = "The Document Object Model (DOM) is a cross-platform and language-independent interface that treats an XML or HTML document as a tree structure.";

document.getElementById("para2").textContent = "The Document Object Model (DOM) is a programming interface for HTML and XML documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects. That way, programming languages can connect to the page.";

document.getElementById("btn").onclick = function() {myFunction};

let button = document.querySelector("#btn")
button.addEventListener("click", () =>{
    let p = document.createElement("p");
    let t = document.createTextNode("A new Paragraph!");
    p.appendChild(t);
    para4.appendChild(p);
})
document.getElementById('red').classList.remove('bg-white');
document.getElementById('red').classList.add('bg-danger');

document.getElementById("blue").classList.remove("bg-white");
document.getElementById("blue").classList.add("bg-primary");

document.getElementById("yellow").classList.remove("bg-white");
document.getElementById("yellow").classList.add("bg-warning");

document.getElementById("green").classList.remove("bg-white");
document.getElementById("green").classList.add("bg-success");

document.getElementById("black").classList.remove("bg-white");
document.getElementById("black").classList.add("bg-dark");

