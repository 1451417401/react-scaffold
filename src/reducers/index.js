export function goodsData(state = {
    list: [],
    total: 0,
    myList: [],
    myTotal: 0
}, action) {
    switch (action.type) {
        case 1:
            return Object.assign({}, state, {
                list: action.list,
                total: action.total
            });
            break;
        case 2:
            return Object.assign({}, state, {
                myList: action.list,
                myTotal: action.total
            })
            break
        default:
            return state
    }
}
