import {GoogleAuthProvider,  getAuth, signInWithPopup } from "firebase/auth";
import {useDispatch} from 'react-redux'
import { app } from "../../firebase";
import { signInSuccess } from "../../redux/user/userSlice.js";
import {useNavigate } from "react-router-dom";




export default function Oath() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleGoogleClick =  async  () => {

        try {
            const provider= new GoogleAuthProvider();
            const auth = getAuth(app);
            const result= await signInWithPopup(auth,provider);
          

            const res = await fetch('Api/auth/google',

            {
                method:'POST',
                headers:{
                    'Content-Type':'application/json',
                },
                body:JSON.stringify({
                    name:result.user.displayName,
                    email:result.user.email,
                    photo:result.user.photoURL}),
            });

            const data = await res.json()
            
            dispatch(signInSuccess(data));
            navigate('/')

        } catch (error) {
            console.log('error when signg in with google' , error)
        }  
       }
  return (
      < button 
      onClick={handleGoogleClick} 
      type='button'
       className=  'bg-red-700 text-white uppercase p-2 rounded-lg hover:opacity-95'>

         sign in with google 
        
     </button>
    
      
  );
}
