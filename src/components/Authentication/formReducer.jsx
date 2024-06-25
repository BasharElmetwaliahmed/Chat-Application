export const initialState = {
  email: "",
  username: "",
  password: "",
  emailError: "",
  passwordError: "",
  usernameError: "",
};
export default function reducer(state, action) {
  switch (action.type) {
    case "UPDATE_USERNAME":
      return { ...state, username: action.payload, usernameError: "" };
    case "UPDATE_EMAIL":
      return { ...state, email: action.payload, emailError: "" };
    case "UPDATE_PASSWORD":
      return { ...state, password: action.payload, passwordError: "" };
    case "SET_EMAIL_ERROR":
      return { ...state, emailError: action.payload };
    case "SET_PASSWORD_ERROR":
      return { ...state, passwordError: action.payload };
    case "SET_USERNAME_ERROR":
      return { ...state, usernameError: action.payload };
    default:
      return state;
  }
}
