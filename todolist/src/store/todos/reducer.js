import Actions from "./types";

const initialState = [
    {
        title: "To Plant a tree",
        description: "Apple",
        due_date: "2021-08-31",
        id: 1,
        list_id: 1,
        status: false
    },
    {
        title: "Todo2",
        description: "description2",
        due_date: "2021-08-31",
        id: 2,
        list_id: 2,
        status: false
    },
    {
        title: "Todo3",
        description: "description3",
        due_date: "2021-08-31",
        id: 2,
        list_id: 1,
        status: false
    },
    {
        title: "Todo3",
        description: "description4",
        due_date: "2021-08-31",
        id: 2,
        list_id: 2,
        status: false
    }
];

export const todosReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case Actions.ADD_TODO:
            return state = [...state, payload];

        case Actions.DELETE_TODO:
            return state.filter(todo => todo.id !== payload);

        case Actions.TOGGLE_TODO:
            let tempState = [...state];
            let id = tempState.findIndex(todo => todo.id === payload)
            tempState[id].status = !tempState[id].status;
            return state = tempState;

        default: return state
    }
}
