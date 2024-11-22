console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

//creating a global variable with an emptry array
let basket = []

//creating a function named addItem
// in the paranthesis, we add a parameter named item
function addItem(item) {
    //add the new item in the global basket array
    basket.push(item)// return true indicating the item was added
    // console.log(item)
    return true
}
// addItem('apples')
// Create a function called listItems.x

addItem('apples')
addItem('berries')
addItem('banana')


function listItems() {
    for(let i = 0; i < basket.length; i++) {
        console.log('list items', basket[i])
    }
    
}

listItems();


// reset the basket to an empty array.
// do not use basket = [] to reset the array.
function empty() {
    // for(let i = 2; i >= 0; i--) {
    //     basket.()
    //     console.log('empty?', basket)
    // }

   // for(list in basket) {
        
   // }
//}

basket.splice(0);

console.log('Empty basket', basket);
}

// when we use the splice method, if we want to remove all the items we can use the 0
empty()





// DO NOT MODIFY
// Used for automated testing
try {
    module.exports = {
        basket: typeof basket !== 'undefined' ? basket : undefined,
        addItem: typeof addItem !== 'undefined' ? addItem : undefined,
        listItems: typeof listItems !== 'undefined' ? listItems : undefined,
        maxItems: typeof maxItems !== 'undefined' ? maxItems : undefined,
        empty: typeof empty !== 'undefined' ? empty : undefined,
        isFull: typeof isFull !== 'undefined' ? isFull : undefined,
        removeItem: typeof removeItem !== 'undefined' ? removeItem : undefined,
    };
} catch(e) {
    // Do nothing
}
