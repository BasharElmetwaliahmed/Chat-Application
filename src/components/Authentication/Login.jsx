import SignIn from "./Signin"
import SignUp from "./Signup"

function Login() {
  return (
    <div className="flex gap-40 px-7  justify-center items-center w-3/4 mx-auto">
        <SignIn/>
        <SignUp/>
    </div>
  )
}

export default Login