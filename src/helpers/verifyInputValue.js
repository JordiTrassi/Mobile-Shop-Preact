export const verifyInputValue = (inputValue) => {

    const verifiedInputValue = inputValue.trim().replace(/\s+/g, '+');

    return verifiedInputValue; 
   
} 

// .toLowerCase()