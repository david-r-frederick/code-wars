//Smallest Unused ID
// You've got much data to manage and of course you use zero-based and non-negative ID's to make each data item unique!
// Therefore you need a method, which returns the smallest unused ID for your next new data item...
// Note: The given array of used IDs may be unsorted. For test reasons there may be duplicate IDs, but you don't have to find or remove them!

//Solution 1
function nextId(ids){
    for(let i = 0; i <= ids.length; i++){
        if(!ids.includes(i)){
            return i;
        }
    }
}

//Solution 2
// function nextId(ids){
//     ids = ids.sort((a, b) => {
//         return a - b;
//     });
//     const noDupes = new Set(ids);
//     ids = Array.from(noDupes);
//       for(let i = 0; i <= ids.length; i++){
//           if(ids[i] === i){
//               continue;
//           } else {
//               return i;
//           }
//       }
// }