import React from 'react'
import {useGoogleLogin} from '@react-oauth/google'
const Login = () => {
  const responseGoogle = async(authResult) => {
    try {
      console.log(authResult);
    } catch (error) {
      console.log(error);
    }
  }
  const googleLogin = useGoogleLogin({
    onSuccess: tokenResponse => console.log(tokenResponse),
    onError: error => console.log(error),
    flow: 'auth-code'
  })
  return (
    <div>
     <button onClick={googleLogin}
      className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Login with Google</button> 
    </div>
  )
}

export default Login
