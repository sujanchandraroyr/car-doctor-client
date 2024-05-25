import { Link, useLocation, useNavigate } from 'react-router-dom';
// import img from '../../assets/images/login/login.svg'
import loginpic from '../../assets/images/login/file.png'
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import axios from 'axios';

const Login = () => {
    const { loginUser } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();



    const handleLogin = (e) => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        //loginUser
        loginUser(email, password)
            .then(result => {
                const logedUser = result.user;
                console.log(logedUser)


                // get token
                const user = { email }
                axios.post('http://localhost:5000/jwt', user, { withCredentials: true })
                    .then(res => {
                        console.log(res.data)
                        if (res.data.success) {
                            navigate(location?.state ? location.state : '/')
                        }
                    })
            })
            .catch(error => {
                console.log(error.message)
            })
    }

    return (
        <div className="hero bg-base-200 py-5">
            <div className="hero-content flex-col items-center lg:flex-row">
                <div className="w-1/2">
                    <img src={loginpic} alt="login" />
                </div>
                <div className="card shrink-0 w-1/2 max-w-sm shadow-2xl bg-base-100 ">
                    <h1 className="text-5xl font-bold text-center">Login now!</h1>
                    <form onSubmit={handleLogin} className="card-body">
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
                        <p>New to Car Doctor? <span className='text-orange-500 text-center'><Link to='/signup'>SignUp</Link></span></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;