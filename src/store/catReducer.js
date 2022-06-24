const defaultState = {
	cats: []
}

const ADD_CAT = "ADD_CAT"
const REMOVE_CATS = "REMOVE_CATS"
const DELETE_CATS = "DELETE_CATS"

export const catReducer = (state = defaultState, action) => {
	switch (action.type) {
		case ADD_CAT:
			return { ...state, cats: [...state.cats, action.payload] }

		case REMOVE_CATS:
			return { ...state, cats: state.cats.filter(cat => cat.id !== action.payload) }

		case DELETE_CATS:
			return { ...state, cats: state.cats = [] }

		default:
			return state
	}
}	

export const addCatAction = (payload) => ({type: ADD_CAT, payload})
export const removeCatAction = (payload) => ({type: REMOVE_CATS, payload})
export const deleteCatsAll = (payload) => ({type: DELETE_CATS, payload})