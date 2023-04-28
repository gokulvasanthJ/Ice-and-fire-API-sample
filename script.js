var container=document.createElement("div");
container.className="container";

var row=document.createElement("div");
row.classList.add("column");

container.append(row);

var res=fetch("https://anapioficeandfire.com/Api/books")
res.then((data)=>data.json()).then((data1)=>foo(data1));

function foo(data1){
    for(var i=0; i<data1.length; i++){
        row.innerHTML+=`
        <div class="containerall">
        <div class="card" >
        <h5 class="card-title">${data1[i].name}</h5>
        <div class="imgdiv">
        
  
  <ul class="list-group list-group-flush">
    <li class="list-group-item"><span style=color:#2dffc4;>Isbn:</span> <span style=color:#c976ba;> ${data1[i].isbn}</span></li>
    <li class="list-group-item"><span style=color:#2dffc4;>Authors:</span> <span style=color:#c976ba;>${data1[i].authors}</span></li>
    <li class="list-group-item"><span style=color:#2dffc4;>Publish name</span> <span style=color:#c976ba;>${data1[i].publisher}</span></li>
    <li class="list-group-item"><span style=color:#2dffc4;>Released date:</span> <span style=color:#c976ba;>${data1[i].released}</span></li>
    <li class="list-group-item"><span style=color:#2dffc4;>Publish name:</span> <span style=color:#c976ba;>${data1[i].publisher}</span></li>
    <li class="list-group-item"><span style=color:#2dffc4;>Pages:</span> <span style=color:#c976ba;>${data1[i].numberOfPages}</span></li>
  </ul>
  <div class="card-body">
    <a href="#" class="card-link">Open</a>
  </div>
</div>
</div>

      `;
      document.body.append(container);
    }
}
