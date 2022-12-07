var data = [
  { name: "om prakash reddy", age: "20" },
  { name: "khiran", age: "19" },
  { name: "abhi ram", age: "18" },
  { name: "someone", age: "17" },
];

function tab() {
  var table = document.getElementById("tabl");

  for (var i = 0; i < data.length; i++) {
    var row = `<tr>
          <td>${i + 1}</td>
          <td>${data[i].name}</td>
          <td>${data[i].age}</td>
        </tr>`;
    table.innerHTML += row;
  }
}
