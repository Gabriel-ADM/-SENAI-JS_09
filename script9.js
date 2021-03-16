var firstResult = 
    function addFunction() {
        var a = Number(document.getElementById("a").value);
        var b = Number(document.getElementById("b").value);
        var c = a + b;
        document.getElementById("firstQuestion").innerHTML=`A soma dos valores é ${c}.`;
    };

var secondResult = 
    function valueFunction() {
        var employee = (document.getElementById("employee").value);
        var valueHour = Number(document.getElementById("x").value);
        var totalHours = Number(document.getElementById("z").value);
        var y = valueHour * totalHours;
        document.getElementById("secondQuestion").innerHTML=`O funcionário ${employee} irá receber R$ ${y.toFixed(2)}.`;
    };

var thirdResult = 
    function addFunction(distance, gas) {
        var distance = Number(document.getElementById("distance").value);
        var gas = Number(document.getElementById("gas").value);
        var consumed = distance / gas;
        document.getElementById("thirdQuestion").innerHTML=`O automóvel fez o consumo médio de ${consumed.toFixed(3)} km/l.`;
    };

