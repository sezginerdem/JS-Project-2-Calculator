//? one

document.getElementById('one').addEventListener('click', writeOne)

function writeOne() {
    document.getElementById('lower').innerHTML += '1'
}


//? two

document.getElementById('two').addEventListener('click', writeTwo)

function writeTwo () {
    document.getElementById('lower').innerHTML += '2'
}


//? three

document.getElementById('three').addEventListener('click', writeThree)

function writeThree () {
    document.getElementById('lower').innerHTML += '3'
}


//? four

document.getElementById('four').addEventListener('click', writeFour)

function writeFour () {
    document.getElementById('lower').innerHTML += '4'
}


//? five

document.getElementById('five').addEventListener('click', writeFive)

function writeFive () {
    document.getElementById('lower').innerHTML += '5'
}


//? six

document.getElementById('six').addEventListener('click', writeSix)

function writeSix () {
    document.getElementById('lower').innerHTML += '6'
}


//? seven

document.getElementById('seven').addEventListener('click', writeSeven)

function writeSeven () {
    document.getElementById('lower').innerHTML += '7'
}

//? eight

document.getElementById('eight').addEventListener('click', writeEight)

function writeEight () {
    document.getElementById('lower').innerHTML += '8'
}

//? nine

document.getElementById('nine').addEventListener('click', writeNine)

function writeNine () {
    document.getElementById('lower').innerHTML += '9'
}

//? zero

document.getElementById('zero').addEventListener('click', writeZero)

function writeZero () {
    document.getElementById('lower').innerHTML += '0'
}

//? dot

document.getElementById('dot').addEventListener('click', writeDot)

function writeDot () {
    if (!(document.getElementById('lower').innerHTML.includes('.'))) {
        document.getElementById('lower').innerHTML += '.'
    }
}

//? ac

document.getElementById('ac').addEventListener('click', writeAC)

function writeAC () {
    document.getElementById('lower').innerHTML = ''
    document.getElementById('upper').innerHTML = ''
}

//? del

document.getElementById('del').addEventListener('click', writeDel)

function writeDel () {
    let lower = document.getElementById('lower').innerHTML;
    document.getElementById('lower').innerHTML = lower.slice(0,-1);
}

//? divide

document.getElementById('divide').addEventListener('click', writeDivide)

function writeDivide () {
    if (document.getElementById('lower').innerHTML != '') {
    document.getElementById('lower').innerHTML += ' / ';
    let lower = document.getElementById('lower').innerHTML;
    document.getElementById('lower').innerHTML = ''
    document.getElementById('upper').innerHTML = lower
    }
}

//? multiply

document.getElementById('multiply').addEventListener('click', writeMultiply)

function writeMultiply () {

    if (document.getElementById('lower').innerHTML != '') {
    document.getElementById('lower').innerHTML += ' * ';
    let lower = document.getElementById('lower').innerHTML;
    document.getElementById('lower').innerHTML = ''
    document.getElementById('upper').innerHTML = lower
    }
}


//? plus

document.getElementById('plus').addEventListener('click', writePlus)

function writePlus () {
    if (document.getElementById('lower').innerHTML != '') {
    document.getElementById('lower').innerHTML += ' + ';
    let lower = document.getElementById('lower').innerHTML;
    document.getElementById('lower').innerHTML = ''
    document.getElementById('upper').innerHTML = lower
    }
}

//? minus

document.getElementById('minus').addEventListener('click', writeMinus)

function writeMinus () {
    if (document.getElementById('lower').innerHTML != '') {
    document.getElementById('lower').innerHTML += ' - ';
    let lower = document.getElementById('lower').innerHTML;
    document.getElementById('lower').innerHTML = ''
    document.getElementById('upper').innerHTML = lower
    }
}


//? equal

document.getElementById('equal').addEventListener('click', writeEqual)

function writeEqual () {
    let result = document.getElementById('upper').innerHTML + document.getElementById('lower').innerHTML;
    if (result != '') {
        document.getElementById('lower').innerHTML = eval(result);
        document.getElementById('upper').innerHTML = '';
    }
}