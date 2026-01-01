function display(val) {
  document.getElementById('result').value += val;
}

function calculate() {
  let x = document.getElementById('result').value;
  let y = eval(x);
  document.getElementById('result').value = y;
}

function clearScreen() {
  document.getElementById('result').value = '';
}

function deleteChar() {
    var result = document.getElementById('result');
    var value = result.value;
    result.value = value.substr(0, value.length - 1);
}