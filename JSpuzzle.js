let listOne = {
   mattJohnson : 'Matt Johnson',
   bartPaden : 'Bart Paden',
   ryanDoss : 'Ryan Doss',
   michaelSpangler : 'Micheal Spangler'
 };

 let listTwo= {
    mattJohnson : 'Matt Johnson',
    bartPaden : 'Bart Paden',
    jordanHeigle : 'Jordan Heigle',
    tylerViles : 'Tyler Viles'
  };

const puzzle = (x, y) => Object.assign({}, x, y);

let merged = puzzle(listOne, listTwo);

merged = Object.values(merged);

merged.forEach(function(item, key) {
  let merged = item;
});

let listDisplay = " ";
for(i = 0; i < merged.length; i ++) {
  listDisplay += '<li>' + merged[i] + '</li>'
}



console.log(merged);

var message = document.getElementById('names')
message.innerHTML = listDisplay;
