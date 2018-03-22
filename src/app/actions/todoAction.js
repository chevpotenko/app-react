export var addItem = (item) => {
    return {
        type: 'ADD',
        payload: item
    }
}

export var deleteItem = (item) => {
    return {
        type: 'DELETE',
        payload: item
    }
}