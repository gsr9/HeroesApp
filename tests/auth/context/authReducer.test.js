import {authReducer, types} from "../../../src/auth";


describe('Test AuthReducer', () => {

  const initialState = {logged: false};

  it('should return default state', () => {
    const state = authReducer(initialState, {});

    expect(state).toEqual(initialState)
  });

  it('should call login and set an user', () => {
    const action = {type: types.login, payload: {name: 'Guille', id: '123'}};
    const state = authReducer(initialState, action);
    const result = {logged: true, user: action.payload};

    expect(state).toEqual(result)
  });

  it('should call logout and reset the state correctly', () => {
    const initialState = {logged: true, user: {name: 'Guille', id: '123'}};
    const action = {type: types.logout}
    const state = authReducer(initialState, action);
    const result = {logged: false};

    expect(state).toEqual(result)
  });
});
