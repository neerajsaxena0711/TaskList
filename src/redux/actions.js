export const ADD_TASK = "ADD_TASK";
export const MARK_TASK = "MARK_TASK";
export const DEL_TASK = "DEL_TASK";
export const SET_USER = "SET_USER";
export const ADD_COMMENT = "ADD_COMMENT";

export const addTask = (data) => {
    return {
        type: "ADD_TASK",
        payload:{
            id: Date.now(),
            data: data,
            done: false
        }
    }
}

export const addComment = (itemId, comment) => {

    return {
        type: "ADD_COMMENT",
        payload:{
            id: Date.now(),
            comment: comment,
            itemId,
        }
    }
}

export const markTask = (id) => {
    return {
        type: "MARK_TASK",
        id,
    }
}

export const delTask = (id) => {
    return {
        type: "DEL_TASK",
        id,
    }
}

export const setUser = (user) => {
    return {
        type: "SET_USER",
        payload: user
    }
}
