// Pagination function
export const paginate = (arr,current_page, page_size) => {
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
