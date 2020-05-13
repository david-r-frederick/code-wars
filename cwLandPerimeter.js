//Land Perimeter
// Task:
// Given an array arr of strings complete the function landPerimeter by calculating the total perimeter of all the islands. Each piece of land will be marked with 'X' while the water fields are represented as 'O'. Consider each tile being a perfect 1 x 1piece of land. Some examples for better visualization:

// ['XOOXO',
//  'XOOXO',
//  'OOOXO',
//  'XXOXO',
//  'OXOOO']

landPerimeter = arr => {
    let totalBeforeSubtraction = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[0].length; j++) {
            if (arr[i][j] === 'X') {
                totalBeforeSubtraction += 4;
            }
            if (arr[i][j] === 'X' && arr[i][j + 1] === 'X') {
                totalBeforeSubtraction -= 2;
            }
            if(i < arr.length - 1){
                if (arr[i][j] === 'X' && arr[i + 1][j] === 'X') {
                    totalBeforeSubtraction -= 2;
                }
            }
        }
    }
    return `Total land perimeter: ${totalBeforeSubtraction}`;
}