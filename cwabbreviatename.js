//Abbreviate a Two Word Name

function abbrevName(name){
    let sep = name.toUpperCase().split(' ');
    return `${sep[0][0]}.${sep[1][0]}`;   
}