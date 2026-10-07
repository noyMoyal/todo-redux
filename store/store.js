const { createStore } = Redux

const initialState = {
    todos: [],
    isLoading: false,
}

export const SET_TODOS = 'SET_TODOS'
export const REMOVE_TODO = 'REMOVE_TODO'
export const UPDATE_TODO = 'UPDATE_TODO'
export const SET_IS_LOADING = 'SET_IS_LOADING'

function appReducer(state = initialState, cmd = {}) {
    switch (cmd.type) {
        case SET_TODOS:
            return { ...state, todos: cmd.todos }

        case REMOVE_TODO:
            return { ...state, todos: state.todos.filter(todo => todo._id !== cmd.todoId) }

        case UPDATE_TODO:
            return { ...state, todos: state.todos.map(todo => todo._id === cmd.todo._id ? cmd.todo : todo) }

        case SET_IS_LOADING:
            return { ...state, isLoading: cmd.isLoading }

        default:
            return state
    }
}

export const store = createStore(appReducer)

window.gStore = store