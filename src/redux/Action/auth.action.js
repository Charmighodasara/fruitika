

import * as ActionTypes from '../ActionTypes'

export const singUpAction = (data) => (dispath) => {
    dispath({ type: ActionTypes.SIGNUP_USER, payload: data })
}