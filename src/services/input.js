export const onChangeText = (callback) => {
    return ({ target: { value } }) => {
        callback(value);
    }
}