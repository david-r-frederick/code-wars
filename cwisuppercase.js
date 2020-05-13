//Is Upper Case

String.prototype.isUpperCase = function (letter) {
    let bool = true;
    for (let i = 0; i < this.length; i++) {
        if (bool === false) {
            return bool;
        } else if (this[i] === '' || this[i] === ' ' || this[i] === '.' || this[i] === '#') {
            bool = true;
            //console.log(true);
        } else if (this[i] === this[i].toLowerCase()) {
            bool = false;
            console.log(bool);
            // console.log(false);
        } else {
            bool = true;
            // console.log(true);
        }
    }
    return bool;
};

'ACSKLDFJSgSKLDFJSKLDFJ'.isUpperCase();
