import { SET_FILTER } from "../filters/actions";

const filtersReducer = (state = "all", action) => {
    switch (action.type) {
        case SET_FILTER:
            return action.payload;
        default:
            return state;
    }
};
export default filtersReducer;