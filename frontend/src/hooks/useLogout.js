import { useAuthContext } from "./useAuthContext";

export const useLogout = () => {
  const { dispatch } = useAuthContext();

  const logout = () => {
    //remove from localstorage
    localStorage.removeItem("user");

    // remove from AuthContext,dispatch LOGOUT action
    dispatch({ type: "LOGOUT" });
  };

  return { logout };
};
