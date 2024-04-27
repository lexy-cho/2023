import React, { createContext, useContext, useReducer } from "react";
import { getUserInfo } from 'utils/store';

interface UserProviderProps {
  children: any
}

const initialState = {
  // userList: [],
  user: getUserInfo() || null,
  newUser: null,
  findUser: null,
  actPrice: 0
};

const reducer = (state: any, action: any) => {
  // console.log("reducer state:", state, "action", action)
  switch (action.type) {
    case "CREATE_USER":
      return {
        ...state,
        // userList: state.userList.concat(action.user),
        newUser: { ...state.newUser, ...action.user },
        findUser: null
      };
    case "LOGIN":
      return {
        ...state,
        user: { ...state.user, ...action.user },
        newUser: null,
        findUser: null
      };
    case "LOGOUT":
      return {
        ...state,
        user: null,
      };
    case "FIND_USER":
      return {
        ...state,
        newUser: null,
        findUser: { ...state.findUser, ...action.user },
      };
    // case "MODIFY":
    //   state.userList.splice(action.index, 1, {
    //     id: action.userId,
    //     pwd: action.userPwd,
    //   });
    //   return {
    //     ...state,
    //     user: { userId: action.userId, userPwd: action.userPwd },
    //     userList: state.userList,
    //   };
    case "ACT_BUY":
      return {
        ...state , actPrice: {...state.actPrice, ...action.actPrice}
      }
 
    default:
      return state;
  }
};

const UserStateContext = createContext<any>(null);
const UserDispatchContext = createContext<any>(null);

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <UserStateContext.Provider value={state}>
      <UserDispatchContext.Provider value={dispatch}>
        {children}
      </UserDispatchContext.Provider>
    </UserStateContext.Provider>
  );
};

export const useUserState = () => {
  const state = useContext(UserStateContext);
  if (!state) throw new Error("Cannot find UserProvider");
  return state;
};

export const useUserDispatch = () => {
  const dispatch = useContext(UserDispatchContext);
  if (!dispatch) throw new Error("Cannot find UserProvider");
  return dispatch;
};