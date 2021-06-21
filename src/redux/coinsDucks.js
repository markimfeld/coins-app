import axios from "axios";

// constantes
const initialState = {
  coins: [],
};

const GET_COINS_SUCCESS = "GET_COINS_SUCCESS";

// reducers
export default function coinReducer(state = initialState, action) {
  switch (action.type) {
    case GET_COINS_SUCCESS:
      return {
        ...state,
        coins: action.payload,
      };
    default:
      return state;
  }
}

// actions
export const getCoinsAction = () => async (dispatch, getState) => {
  try {
    const res = await axios.get(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false`
    );

    console.log(res);

    dispatch({
      type: GET_COINS_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    console.error(error);
  }
};
