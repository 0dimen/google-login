import * as React from 'react';
import GoogleLogin from 'react-google-login';

const Login = () =>{
    const googleClientId:string=import.meta.env.VITE_APP_CLIENT_ID||"";
    const [userObj, setUserObj] = React.useState({
        email:"",
        name:"",
    })

    const onLoginSuccess=(res:any)=>{
        setUserObj({...userObj,
        email:res.profileObj.email,
        name:res.profileObj.name,
    })
    }

    return (
        <div>
            <GoogleLogin
                clientId={googleClientId}
                buttonText='Google'
                onSuccess={result=> console.log("SUCCESS: "+onLoginSuccess(result))}
                onFailure={result=> console.log("FAILED:"+result)}
                />
        </div>
    );
};

export default Login;