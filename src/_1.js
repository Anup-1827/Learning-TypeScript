// Adding type checking to the JS file
// Type Checking in JS without converting JS into TS


/**
 * 
 * @param {string} fname 
 * @param {number} age 
 * @returns 
 */

function nameObj(fname, age){
    return {fname, age}
}

// Getting Error
// nameObj("Anup", "25")
// nameObj(1, 25)

nameObj("Anup", 25)
nameObj("1", 25)
