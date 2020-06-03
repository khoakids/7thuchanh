
function convert(){
    var tienchuyendoi;
    var tien = document.getElementById('tien').value;
   var x = document.getElementById('quocgia').value;
   if (x === 'vietnam') {
       tienchuyendoi = tien / 23000;
       document.getElementById('result').innerHTML='Result là ' + tienchuyendoi + '$';

   } else {
       tienchuyendoi = tien * 23000;
       document.getElementById('result').innerHTML='Result là ' + tienchuyendoi + 'VND';

   }
  
}
    