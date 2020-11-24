export type FieldValidatorType = (value: string) => string | undefined

export const required: FieldValidatorType = (value: string): string | undefined => {
    if (value) {
        return undefined;
    }
    return 'Field is required';

}

export const maxLengthCreator = (maxLength: number): FieldValidatorType => (value) => {
    if (value && value.length > maxLength) {
        return `Max length is ${maxLength} symbols`;
    }
    return undefined;
}
export const maxLength10 = (value: string) => {
    if (value.length > 10) {
        return `Max length is 10 symbols`;
    }
    return undefined;
}
