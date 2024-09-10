function Register() {
  return (
    <div>
        <h1>Register with us</h1>
         <form>
            <label htmlFor="email">Email</label>
            <input type="email" name='email' />
            <label htmlFor="password">password</label>
            <input type="password" name='password' />
         </form>
    </div>
  )
}

export default Register