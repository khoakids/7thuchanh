function cong(){
    let x = +document.getElementById('sotruoc').value;
    let y = +document.getElementById('sosau').value;
    let z = x + y;
    document.getElementById('result').innerHTML = 'Kết quả là ' + z;
}
function tru(){
    let x = +document.getElementById('sotruoc').value;
    let y = +document.getElementById('sosau').value;
    let z = x - y;
    document.getElementById('result').innerHTML = 'Kết quả là ' + z;
}
function nhan(){
    let x = +document.getElementById('sotruoc').value;
    let y = +document.getElementById('sosau').value;
    let z = x * y;
    document.getElementById('result').innerHTML = 'Kết quả là ' + z;
}
function chia(){
    let x = +document.getElementById('sotruoc').value;
    let y = +document.getElementById('sosau').value;
    let z = x / y;
    document.getElementById('result').innerHTML = 'Kết quả là ' + z;
}

