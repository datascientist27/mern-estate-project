import { useState} from "react"
import { Link , useNavigate } from "react-router-dom"



export default function SignIn() {
  const [error,setError]=useState(null);
  const [formData,setFormData]=useState({});
  const [loading,setLoading ]= useState(false);
  const navigate =useNavigate();

  const changeHandler=(e)=>{
    setFormData({
      ...formData,
      [e.target.id]:e.target.value
    })
  }
  
  const submitHandler= async (e)=>{
    e.preventDefault();
    try {
      setLoading(true)
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
        setLoading(false);
        setError(error.message)
        return;
       }
       setLoading(false);
       setError(null);
       navigate('/');
    } catch (error) {

      setLoading(false);
      setError(error.message);
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
