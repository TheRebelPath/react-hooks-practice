import {useReducer} from 'react';

function reducer(state, action) {
  switch (action.type) {
    case 'FIELD_CHANGE':
      return {
        ...state,
        [action.fieldName]: action.payload,
      };
    case 'LOGIN':
      return {
        ...state,
        error: '',
      };
    case 'SUCCESS':
      return {
        ...state,
        password: '',
        isLoggedIn: true,
      };
    case 'ERROR':
      return {
        ...state,
        error: 'Incorrect username or password',
      };
    case 'LOGOUT':
      return {
        ...state,
        username: '',
        password: '',
        isLoggedIn: false,
      };
    default:
      return state;
  }
}

const initialState = {
  username: '',
  password: '',
  error: '',
  isLoggedIn: false,
};

const TestReducerAdv = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const {username, password, error, isLoggedIn} = state;

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch({type: 'LOGIN'});
    if (username === 'bob' && password === '1234') {
      dispatch({type: 'SUCCESS'});
    } else {
      dispatch({type: 'ERROR'});
    }
  };

  return (
    <>
      <div>
        {isLoggedIn ? (
          <>
            <h2>Welcome {username}</h2>
            <button onClick={() => dispatch({type: 'LOGOUT'})}>LOGOUT</button>
          </>
        ) : (
          <form onSubmit={handleLogin}>
            <input
              type="text"
              placeholder="Username"
              onChange={(e) =>
                dispatch({
                  type: 'FIELD_CHANGE',
                  fieldName: 'username',
                  payload: e.target.value,
                })
              }
            />
            <input
              type="password"
              placeholder='Password'
              onChange={(e) =>
                dispatch({
                  type: 'FIELD_CHANGE',
                  fieldName: 'password',
                  payload: e.target.value,
                })
              }
            />
            <button type="submit">LOGIN</button>
            {error && <p>{error}</p>}
          </form>
        )}
      </div>
    </>
  );
};

export default TestReducerAdv;