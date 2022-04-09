const initialState = {
    coins: [],
    favoritesList: [],
    coinDetail: {}
}

export const init = () => {
    return JSON.parse(localStorage.getItem('state')) || initialState
}

export const storeReduce = (state, action) => {
    switch (action.type) {
        case 'GET_COIN':
            return { ...state, coins: action.payload };

        case 'ORDER_PRICE':
            let orderPrice = action.payload === 'mayor' ? state?.coins?.sort((a, b) => b.price - a.price)
                : state?.coins?.sort((a, b) => a.price - b.price)
            return { ...state, coins: orderPrice };

        case 'ORDER_NAME':
            let order = action.payload === 'ascendente' ? state.coins.sort((a, b) => {
                if (a.name.toLowerCase() > b.name.toLowerCase()) {
                    return 1
                } if (a.name.toLowerCase() < b.name.toLowerCase()) {
                    return -1
                } return 0
            }) : state.coins.sort((a, b) => {
                if (a.name.toLowerCase() > b.name.toLowerCase()) {
                    return -1
                } if (a.name.toLowerCase() < b.name.toLowerCase()) {
                    return 1
                } return 0
            })
            return { ...state, coins: order }

        case 'ADD_FAVORITE':
            const findRepeat = state.favoritesList.length > 0 && state.favoritesList.filter(coin => !!(coin.id === action.payload));
            const addCoin = !findRepeat.length && state.coins.find(coin => coin.id === action.payload);
            return { ...state, favoritesList: !findRepeat.length ? [ ...state.favoritesList, addCoin ] : [ ...state.favoritesList ] }
        case 'GET_DETAIL':
            const findDetail = state.coins.find(coin => coin.id === action.payload);
        return { ...state, coinDetail: findDetail };
        default:
            return state;
    }
}