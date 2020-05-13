//altERnaTIng cAsE <=> ALTerNAtiNG CaSe

String.prototype.toAlternatingCase = function (str) {
    return this.split('').map(function (element) {
        if(element.toUpperCase() === element){
            element = element.toLowerCase();
            return element;
        } else {
            element = element.toUpperCase();
            return element;
        }
    }).join("");
};

let randomStr = 'Hello World';

randomStr.toAlternatingCase();
