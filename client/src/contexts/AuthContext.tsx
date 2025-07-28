import { createContext, useContext, useReducer } from "react";

type AuthContextType = initialStateType & {
  login: (email: string, password: string) => void;
  logout: () => void;
};

type AuthContextProps = {
  children: React.ReactNode;
};

type initialStateType = {
  isAuthenticated: boolean;
  user: typeof FAKE_USER | null | undefined;
};

type ActionType = {
  type: string;
  payload?: typeof FAKE_USER;
};

const AuthContext = createContext<AuthContextType | null>(null);

const FAKE_USER = {
  name: "Jack",
  email: "jack@example.com",
  password: "qwerty",
  avatar: "https://i.pravatar.cc/100?u=zz",
};

const initialState = {
  isAuthenticated: false,
  user: null,
};

function reducer(state: initialStateType, action: ActionType) {
  switch (action.type) {
    case "login":
      return { ...state, isAuthenticated: true, user: action.payload };
    case "logout":
      return { ...state, isAuthenticated: false, user: null };
    default:
      throw new Error("Unknown Action Type");
  }
}

function AuthProvider({ children }: AuthContextProps) {
  const [{ isAuthenticated, user }, dispatch] = useReducer(
    reducer,
    initialState,
  );

  function login(email: string, password: string) {
    if (email === FAKE_USER.email && password === FAKE_USER.password)
      dispatch({ type: "login", payload: FAKE_USER });
  }
  function logout() {
    dispatch({ type: "logout" });
  }
  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  if (context === null)
    throw new Error("AuthContext use outside of AuthProvider");
  return context;
}

export { AuthProvider, useAuth };
