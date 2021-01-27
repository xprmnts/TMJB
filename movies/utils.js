// Debounce Helper for Autocomplete (API Rate Limiter)
let timeoutId;
const debounce = (func, delay = 1000) => {
    let timeoutID;

    return (...args) => {
        if (timeoutId) {
            clearTimeout(timeoutId);   
        }
        timeoutId = setTimeout(() => {
            func.apply(null, args);
        }, delay);
    };
};