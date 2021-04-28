var defangIPaddr = function(address) {
    
    let splited = '';
    let add = address.split('.');
    for(let k = 0; k < add.length; k++) {
        if(add[k] !== '.') {
            splited = (splited ? splited + '[.]' : '') + add[k];
        }
    }
    console.log(splited);
    return splited;
};
