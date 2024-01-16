import { Link } from "react-router-dom"

export default function SignUp() {
  return (
    <div className=' p-3 max-w-lg mx-auto '>
      <h1 className='text-center text-emerald-950 font-semibold text-3xl my-7'> Sign Up</h1>
      <form  className='flex flex-col  gap-4'>
        <input type="text" placeholder='Username' className='border p-3 focus:outline-none rounded-lg  ' id='username' />
        <input type="text" placeholder='Email' className='border p-3 focus:outline-none rounded-lg ' id='email' />
        <input type="text" placeholder='Password' className='border p-3 focus:outline-none rounded-lg' id='password' />
        <button className=' text-white  bg-emerald-950 hover:opacity-95 disabled:opacity-75 rounded-lg p-3 uppercase'>Sign up</button>
      </form>
      <p className='p-3'>Have an account ? <Link to="/sing-in"><span className='text-red-600'>sign in</span></Link></p>
    </div>
  )
}
