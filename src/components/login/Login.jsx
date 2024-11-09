import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import auth from "../../firebase/firebase.init";

const Login = () => {
    const provider = new GoogleAuthProvider();
    const handleGoogleSignin = () => {
        signInWithPopup(auth,provider)
        .then(result => {
            console.log(result)
        })
        .catch(error => {
            console.log(error)
        })
    }
    return (
        <div>
           <button onClick={handleGoogleSignin}>log in with google</button> 
        </div>
    );
};

export default Login;