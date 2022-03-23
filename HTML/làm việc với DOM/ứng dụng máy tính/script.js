//basic
var firstNumberBs = document.querySelector('.js-num-1');
var lastNumberBs = document.querySelector('.js-num-2');
var firstNumberBsValue, lastNumberBsValue;
var basicResult = document.querySelector('.basic-cal-result')
var addBtn = document.querySelector('.add')
var subBtn = document.querySelector('.sub')
var mulBtn = document.querySelector('.mul')
var divBtn = document.querySelector('.div')

firstNumberBs.addEventListener('change', function () {
    firstNumberBsValue = parseInt(firstNumberBs.value);
});
lastNumberBs.addEventListener('change', function () {
    lastNumberBsValue = parseInt(lastNumberBs.value);
});

addBtn.addEventListener('click', function () {
    basicResult.innerHTML = firstNumberBsValue + lastNumberBsValue
})

subBtn.addEventListener('click', function () {
    basicResult.innerHTML = firstNumberBsValue - lastNumberBsValue
})

mulBtn.addEventListener('click', function () {
    basicResult.innerHTML = firstNumberBsValue * lastNumberBsValue

})

divBtn.addEventListener('click', function () {
    basicResult.innerHTML = firstNumberBsValue / lastNumberBsValue

})

//power-calcu
var scr1 = document.querySelector('.scr-input');
var scr2 = document.querySelector('.scr-value');
var hienThi = " ";
var ketQua = " ";

function keyclose() {
    hienThi = hienThi + ")";
    ketQua = ketQua + ")";
    scr1.innerHTML = hienThi;
}

function keyopen() {
    hienThi = hienThi + "(";
    ketQua = ketQua + "(";
    scr1.innerHTML = hienThi;
}

function GT(i) {
    if (i === 0) {
        return 1;
    }
    return (i * GT(i - 1))
}

function giaithua() {
    hienThi = hienThi + "!";
    ketQua = GT(ketQua)
    scr1.innerHTML = hienThi;
}

function per() {
    hienThi = hienThi + "%";
    ketQua = ketQua / 100;
    scr1.innerHTML = hienThi;
}

function inkey() {
    hienThi = hienThi + "ln(";
    ketQua = ketQua + "Math.log(";
    Screen1.innerHTML = hienThi;
}

function key0() {
    hienThi = hienThi + "0";
    ketQua = ketQua + "0";
    scr1.innerHTML = hienThi;
}

function key1() {
    hienThi = hienThi + '1';
    ketQua = ketQua + '1';
    scr1.innerHTML = hienThi;
}

function key2() {
    hienThi = hienThi + '2';
    ketQua = ketQua + '2';
    scr1.innerHTML = hienThi;
}

function key3() {
    hienThi = hienThi + '3';
    ketQua = ketQua + '3';
    scr1.innerHTML = hienThi;
}

function key4() {
    hienThi = hienThi + '4';
    ketQua = ketQua + '4';
    scr1.innerHTML = hienThi;
}
function key5() {
    hienThi = hienThi + '5';
    ketQua = ketQua + '5';
    scr1.innerHTML = hienThi;
}

function key6() {
    hienThi = hienThi + '6';
    ketQua = ketQua + '6';
    scr1.innerHTML = hienThi;
}

function key7() {
    hienThi = hienThi + '7';
    ketQua = ketQua + '7';
    scr1.innerHTML = hienThi;
}

function key8() {
    hienThi = hienThi + '8';
    ketQua = ketQua + '8';
    scr1.innerHTML = hienThi;
}

function key9() {
    hienThi = hienThi + '9';
    ketQua = ketQua + '9';
    scr1.innerHTML = hienThi;
}

function keyTen() {
    hienThi = hienThi + ".";
    ketQua = ketQua + ".";
    scr1.innerHTML = hienThi;
}
function rad() {
    hienThi = hienThi + 'rad(';
    ketQua = ketQua + "((Math.PI/(180))*";
    scr1.innerHTML = hienThi;
}

function sin() {
    hienThi = hienThi + 'sin(';
    ketQua = ketQua + "Math.sin((Math.PI/(180))*";
    scr1.innerHTML = hienThi;
}

function cos() {
    hienThi = hienThi + 'cos(';
    ketQua = ketQua + "Math.cos((Math.PI/(180))*";
    scr1.innerHTML = hienThi;
}

function tan() {
    hienThi = hienThi + 'tan(';
    ketQua = ketQua + "Math.tan((Math.PI/(180))*";
    scr1.innerHTML = hienThi;
}
function keyAdd() {
    hienThi = hienThi + "+";
    ketQua = ketQua + "+";
    scr1.innerHTML = hienThi;
}

function keySub() {
    hienThi = hienThi + "-";
    ketQua = ketQua + "-";
    scr1.innerHTML = hienThi;
}

function keyMul() {
    hienThi = hienThi + "*";
    ketQua = ketQua + "*";
    scr1.innerHTML = hienThi;
}

function keyDiv() {
    hienThi = hienThi + "/";
    ketQua = ketQua + "/";
    scr1.innerHTML = hienThi;
}

function keySup() {
    hienThi = hienThi + "^";
    ketQua = ketQua + "**";
    scr1.innerHTML = hienThi;
}

function keyCan2() {
    hienThi = hienThi + "√(";
    ketQua = ketQua + "Math.sqrt(";
    scr1.innerHTML = hienThi;
}
function keyPi() {
    hienThi = hienThi + "𝝅";
    ketQua = ketQua + "Math.PI";
    scr1.innerHTML = hienThi;
}
function keyExp(){
    hienThi = hienThi + "e^";
    ketQua = ketQua + "Math.E**";
    scr1.innerHTML = hienThi;
}
function ac() {
    location.reload();
}

function inkey() {
    hienThi = hienThi + "ln(";
    ketQua = ketQua + "Math.log(";
    scr1.innerHTML = hienThi;
}

function keyLog() {
    hienThi = hienThi + "Log(";
    ketQua = ketQua + "Math.log(";
    scr1.innerHTML = hienThi;
}

function EqualKey() {
    scr1.innerHTML = hienThi;
    ketQuaN = eval(ketQua);
    ketQuaS = String(ketQuaN);
    scr2.innerHTML = ketQuaS;
}

function keyE() {
    hienThi = hienThi + "e";
    ketQua = ketQua + "Math.E";
    scr1.innerHTML = hienThi;
}

console.log(ketQua)