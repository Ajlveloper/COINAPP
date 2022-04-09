export const getCoin = (data) => {
    return {
        type: "GET_COIN",
        payload: data,
    };
}
export const orderPrice = (target) => {
    return {
        type: "ORDER_PRICE",
        payload: target.value,
    };
}

export const orderName = (target) => {
    return {
        type: "ORDER_NAME",
        payload: target.value,
    };
}

export const getDetail = (id) => {
    return {
        type: "GET_DETAIL",
        payload: id
    };
}

export const addFavorite = (id) => {
    return {
        type: "ADD_FAVORITE",
        payload: id,
    };
}
