import { useState } from "react";
import { useReducer } from "react";
import toast from "react-hot-toast";
import { useAuth } from "../../context/AuthContext";
import reducer, { initialState } from "./formReducer";

function SignUp() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [loading, setLoading] = useState(false);
  const { signUp } = useAuth();
  const [uploadedImage, setUploadedImage] = useState({
    file: null,
    url: "",
  });

  const submitHandler = async (e) => {
    let error = false;
    e.preventDefault();

    if (
      !/(?=^.{8,}$)((?=.*\d)(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/.test(
        state.password
      )
    ) {
      dispatch({
        type: "SET_PASSWORD_ERROR",
        payload:
          "password must contain at least eight characters, at least one number and both lower and uppercase letters and special characters",
      });

      error = true;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(state.email)) {
      dispatch({
        type: "SET_EMAIL_ERROR",
        payload: "email must be in form of example@email.com",
      });
      error = true;
    }

    if (state.username.trim() === "") {
      dispatch({
        type: "SET_USERNAME_ERROR",
        payload: "username mustn't be empty",
      });
      error = true;
    }
    if (!error) {
      setLoading(true)
      try {
        await signUp(
          state.username,
          state.email,
          state.password,
          uploadedImage
        );
      } catch (err) {
        toast.error(err.message);
      }
      finally{
        setLoading(false)
      }
    }
  };

  const uploadImageHandler = (e) => {
    console.log(e.target.files[0]);
    if (e.target.files[0]) {
      setUploadedImage({
        file: e.target.files[0],
        url: URL.createObjectURL(e.target.files[0]),
      });
    }
  };
  return (
    <main className="form">
      <h2 className="text-5xl font-semibold">Create New Account</h2>
      <form className="flex flex-col   w-full gap-2  " onSubmit={submitHandler}>
        <div className="my-4 flex gap-8 cursor-pointer ">
          <label
            className="font-semibold underline cursor-pointer flex items-center gap-4 "
            htmlFor="upload">
            <img
              src={
                uploadedImage.url ||
                "https://static-00.iconduck.com/assets.00/avatar-icon-512x512-gu21ei4u.png"
              }
              className="w-12 h-12 rounded-full   opacity-40"
            />
            upload avatar image
          </label>
          <input
            type="file"
            id="upload"
            onChange={uploadImageHandler}
            className="hidden"
          />
        </div>
        <div>
          <label htmlFor="username" className="input-label">
            username
          </label>
          <input
            type="text"
            id="username"
            className="input"
            placeholder="John"
            onChange={(e) =>
              dispatch({ type: "UPDATE_USERNAME", payload: e.target.value })
            }
            required
          />
          {state.usernameError && (
            <p className="error-msg">*{state.usernameError}</p>
          )}
        </div>
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
          {state.passwordError && (
            <p className="error-msg">*{state.passwordError}</p>
          )}
        </div>

        <button className={' btn-auth disabled:opacity-50 disabled:bg-primaryLight transition-all duration-300'} disabled={loading} >{loading?'Loading':'Sign Up'}</button>
      </form>
    </main>
  );
}

export default SignUp;
