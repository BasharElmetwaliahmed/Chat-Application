import { useReducer } from "react";
import reducer, { initialState } from "./formReducer";

function SignIn() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const submitHandler = async (e) => {
    let error = false;
    e.preventDefault();

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(state.email)) {
      dispatch({
        type: "SET_EMAIL_ERROR",
        payload: "email must be in form of example@email.com",
      });
      error = true;
    }

    if (!error) {
      try {
        dispatch({ type: "CLEAR" });
      } catch (e) {}
    }
  };
  return (
    <main className=" form">
      <h2 className="text-5xl font-semibold">Sign in</h2>
      <form
        className="flex flex-col gap-2  w-full "
        onSubmit={submitHandler}>
        <div>
          <label htmlFor="email" className="input-label">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="input"
            placeholder="example@example.com"
            onChange={(e) =>
              dispatch({ type: "UPDATE_EMAIL", payload: e.target.value })
            }
            required
          />
          {state.emailError && <p className="error-msg">*{state.email}</p>}
        </div>
        <div>
          <label htmlFor="password" className="input-label">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="input"
            onChange={(e) =>
              dispatch({ type: "UPDATE_PASSWORD", payload: e.target.value })
            }
            placeholder="At least 8 characters"
            required
          />
        </div>
        <button className=" btn-auth ">
          Log in
        </button>

      </form>
    </main>
  );
}

export default SignIn;
