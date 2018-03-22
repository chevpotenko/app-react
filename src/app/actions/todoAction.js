export var addItem = (item) => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch({
                type: 'ADD',
                payload: item
            });
        }, 500);    
    }
}

export var deleteItem = (item) => {
    return {
        type: 'DELETE',
        payload: item
    }
}