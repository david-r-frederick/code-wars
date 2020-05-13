// Exclamation marks series #17: Put the exclamation marks and question marks to the balance, Are they balanced?
// Description:
// Each exclamation mark weight is 2; Each question mark weight is 3. Put two string left and right to the balance, Are they balanced?
// If the left side is more heavy, return "Left"; If the right side is more heavy, return "Right"; If they are balanced, return "Balance".

// Examples
// balance("!!","??") === "Right"
// balance("!??","?!!") === "Left"
// balance("!?!!","?!?") === "Left"
// balance("!!???!????","??!!?!!!!!!!") === "Balance"

function balance(left,right){
    let leftSum = left.split('').map(x=>{
        if(x==='?'){
            return 3;
        } else {return 2}
    }).reduce((acc, cv) => 
        acc + cv
    );

    let rightSum = right.split('').map(y=>{
        if(y==='?'){
            return 3;
        } else {return 2}
    }).reduce((acc, cv) => 
        acc + cv
    );
    
    return leftSum > rightSum ? 'Left' : rightSum > leftSum ? 'Right' : 'Balance';
}