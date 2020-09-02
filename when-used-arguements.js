function getFullName(firstName, lastName){
    // console.log([...arguments].join(' '));
    let fullName = '';
    for(let i = 0; i<arguments.length; i++){
        const namePart = arguments[i];
        fullName = fullName + ' ' + namePart;  
    }
    return fullName;
}

console.log(getFullName('iktiar', 'Uddin', 'md', 'bin', 'boktiar'));