const container = document.querySelector(".container");
const table = document.createElement("table");
container.appendChild(table);

let y = 0;
let colums = 10;
let rows = 10;
function createTable (colums, rows) {
   for (let i = 1; i <= rows; i++){
      let tr = document.createElement('tr');
      for(let j = 1; j <= colums; j++) {
         let td = document.createElement('td');
         y+=1;
         td.innerText = y;
         tr.appendChild(td)
      }
      table.appendChild(tr)
   }
}

createTable(colums,rows)