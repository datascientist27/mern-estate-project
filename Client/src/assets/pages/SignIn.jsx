import { useState} from "react"
import { useDispatch, useSelector } from "react-redux";
import { Link , useNavigate } from "react-router-dom";
import { signInSart,signInSuccess,signInFailure } from "../../redux/user/userSlice";





export default function SignIn() {

  const [formData,setFormData]=useState({});
 const {loading,error}=useSelector((state)=>state.user)

  const navigate =useNavigate();
  const dispatch = useDispatch();

  const changeHandler=(e)=>{
    setFormData({
      ...formData,
      [e.target.id]:e.target.value
    })
  }
  
  const submitHandler= async (e)=>{
    e.preventDefault();
    try {
      dispatch(signInSart());
      const res= await fetch('Api/auth/signin' ,
       {
        method:'POST',
       headers:{
        'Content-Type':'application/json',
       },
       body:JSON.stringify(formData),
       });
  
       const data =await res.json();
       console.log(data)
       if (data.success===false) {
      dispatch(signInFailure(data.message));
        return;
       }
      dispatch(signInSuccess(data))
       navigate('/');
    } catch (error) {
        dispatch(signInFailure(data.message));
    }
   
    
    };

    console.log(formData)
 

  return (
    <div className=' p-3 max-w-lg mx-auto '>
      <h1 className='text-center text-emerald-950 font-semibold text-3xl my-7'> Sign In</h1>
      <form onSubmit={submitHandler} className='flex flex-col  gap-4'>
        <input type="text" placeholder='Email' className='border p-3  rounded-lg ' id='email'onChange={changeHandler} />
        <input type="text" placeholder='Password' className='border p-3  rounded-lg' id='password'onChange={changeHandler} />
        <button disabled={loading} className=' text-white  bg-emerald-950 hover:opacity-95 disabled:opacity-75 rounded-lg p-3 uppercase'onSubmit={submitHandler} >{loading? 'loading...': 'Sign Up'}</button>
      </form>
      <p className='p-3'>Dont have an account ? <Link to="/sing-up"><span className='text-red-600'>Sing Up</span></Link></p>
      <div >
        {error && <p className="text-red-600 ml-3">{error}</p>}
      </div>
    </div>
  )
}
