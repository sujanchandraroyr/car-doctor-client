import { Link } from 'react-router-dom';
import img from '../../assets/images/login/login.svg'
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';

const SignUp = () => {
    const {createUser} = useContext(AuthContext);
    
    
    const handleSignUp = (e) => {
        e.preventDefault()
        const form = e.target;
        // const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        
        //createUser
        createUser(email, password)
        .then(result => {
            console.log(result.user)
        })
        .catch(error => {
            console.log(error.code)
        })
    }
    return (
        <div className="hero bg-base-200 py-5">
            <div className="hero-content flex-col lg:flex-row">
                <div className="w-1/2">
                    <img src={img} alt="login" />
                </div>
                <div className="card shrink-0 w-1/2 max-w-sm shadow-2xl bg-base-100 ">
                    <h1 className="text-5xl font-bold text-center">SignUp now!</h1>
                    <form onSubmit={handleSignUp} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="enter your name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className='btn' type="submit" value="Login" />
                        </div>
                    </form>
                    <div className='text-center mb-1'>
                        <p>Have an acount? <span className='text-orange-500 text-center'><Link to='/login'>Login</Link></span></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;