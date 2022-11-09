import { FORM_DATA } from "../actions/actions";

const initialState = {
  formulario: {},
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FORM_DATA:
      return {
        formulario: { ...state.formulario, ...payload },
      };

    default:
      return state;
  }
};

export default rootReducer;
