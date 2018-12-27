import * as actions from '../constants/actions';

const initialState=0;

export const actionCreators = {
    increment: () => (dispatch, getState) => {
        dispatch({type: actions.INCREMENT});
    },
    decrement: () => (dispatch, getState) => {
        dispatch({type: actions.DECREMENT});
    }
};

export default (state=initialState,action)=>{
    switch (action.type) {
        case actions.INCREMENT:
            return state + 1;
        case actions.DECREMENT:
            return state - 1;
        default:
            return state
    }
}