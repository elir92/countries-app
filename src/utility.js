// Pagination function
export const paginate = (arr, current_page, page_size) => {
    const indexOfLastCountry = current_page * page_size;
    const indexOfFirstCountry = indexOfLastCountry - page_size;
    return arr.slice(indexOfFirstCountry, indexOfLastCountry);
};

// Logic for displaying page numbers
export const displayPages = (arr, page_size) => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(arr.length / page_size); i++) {
        pageNumbers.push(i);
    }
    return pageNumbers;
};

export const updateObject = (oldObject, updatedProperties) => {
    return {
        ...oldObject,
        ...updatedProperties
    };
};

// In order to pick n numbers from the data array.
export const randBetween = (arr, n) => {
    const result = [];
    for (let i = 0; i < n; i++) {
        const temp = arr.splice(Math.floor(Math.random() * (arr.length)), 1);
        result.push(temp[0]);
    }
    return result;
}