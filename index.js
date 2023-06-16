let box = prompt('How old are you?')

if(box >= 18) {
    console.log('WELCOME!');
} else {
    console.log('GET OUT, PLEASE!')
}



let boxTwo = prompt('Write any number;)')

if((boxTwo % 2) === 0 ) {
    console.log(boxTwo + ' - Even number')
} else {
    console.log(boxTwo + ' - Odd number')
}



let boxThree = prompt('What is your name?')

if(boxThree[0].toUpperCase() === 'A') {
    console.log('WELCOME ' + boxThree)
} else {
    console.log('Entrance not allowed')
}