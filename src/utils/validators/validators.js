export const required = value => {
    if (value) {
        return undefined;
    }
    return 'Field is required';

}

export const maxLengthCreator = (maxLength) => (value) => {
    if (value && value.length > maxLength) {
        return `Max length is ${maxLength} symbols`;
    }
    return undefined;
}
export const maxLength10 = (value) => {
    if (value.length > 10) {
        return `Max length is 10 symbols`;
    }
    return undefined;
}
