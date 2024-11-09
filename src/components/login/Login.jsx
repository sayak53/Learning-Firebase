import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import auth from "../../firebase/firebase.init";
import { useState } from "react";

const Login = () => {
    const[user,setUser] = useState(null)
    const provider = new GoogleAuthProvider();
    const handleGoogleSignin = () => {
        signInWithPopup(auth,provider)
        .then(result => {
            console.log(result)
            setUser(result.user)
        })
        .catch(error => {
            console.log(error)
            setUser(null)
        })
    }
    const handleSignOut = () => {
        signOut(auth)
        .then(() => {
            setUser(null)
        })
        .catch(error => console.log(error))
    }
    return (
        <div>
           {
            user?<button onClick={handleSignOut}>Sign Out</button>:<button onClick={handleGoogleSignin}>log in with google</button>
           }
           { 
             
               user && <div>
               <h4>{user.displayName}</h4>
               <p>{user.email}</p>
               <img src="https://lh3.googleusercontent.com/a/ACg8ocISw2JNu-UpVX6BXKVofn-z6vu8Ak7Ieshr0a46AT9Q9WZFE2Fw=s96-c" alt="profile pic" />
            </div>
           }
        </div>
    );
};

export default Login;