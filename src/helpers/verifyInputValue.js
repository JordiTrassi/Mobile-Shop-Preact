export const verifyInputValue = (inputValue) => {

    const verifiedInputValue = inputValue.toLowerCase().trim();

    let inputValueList = verifiedInputValue.split(" ");

    return inputValueList;  
} 

// .replace(/\s+/g, '+')
// const rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;