const initialState = {
    count: 1
};

const INC_ACTION = 'INC';

function inc(state) {
    if (state.count > 2) {
        return state
    }

    return {
        ...state,
        count: state.count + 1,
    };
}

function reducer(state = initialState, action) {
    // immediately assign to new variable so we can consistently refer to state as result for the entire reducer
    let result = state;

    switch (action.type) {
        case INC_ACTION: {
            // we can reuse the result variable to pass latest state around and to save the output
            result = inc(result);
            result = inc(result);

            return result;
        }
    }

    return result;
}

test('can reuse variable name without breaking the immutability rules of redux', () => {
    const secondState = reducer(initialState, { type: INC_ACTION });

    // a new object was returned because state has changed
    expect(secondState === initialState).toBe(false);
    expect(secondState.count === 3).toBe(true);

    // now because of the condition check in inc() the state object will not change as count > 2
    const thirdState = reducer(secondState, { type: INC_ACTION });

    // underlying state object is still the same
    expect(thirdState === secondState).toBe(true);
    expect(secondState.count === 3).toBe(true);
});
