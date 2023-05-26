function operaciones(){
    let num1, num2;
    num1 = parseInt( document.getElementById('Num1').value);
    num2 = parseInt( document.getElementById('Num2').value);
    sum = num1 + num2;
    res = num1 - num2;
    mul = num1 * num2;
    div = num1 / num2;
    alert("la suma es " + sum +
    "\n la resta es:" + res +
    "\n la multiplicacion es: " + mul+
    "\n la division es:" + div);

}