import React from 'react'
import { useGoogleLogin } from '@react-oauth/google';
import { Link } from 'react-router-dom';


const Box = () => {
    const responseGoogle = async(res)=>{
        try {
            if(res.code){
                console.log(res.code);
            }
            
        } catch (error) {
            console.log(error);
            
        }

    }
    const googleLogin = useGoogleLogin({
        onSuccess:responseGoogle,
        onError:responseGoogle,
        flow: 'auth-code'
  })
  return (
    <div>
      <button style={{padding:"10px"}} onClick={(e)=>googleLogin()}>LogIn</button>
    </div>
  )
}

export default Box
