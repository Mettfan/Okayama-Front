import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createOneUser } from '../../../features/users/userSlice';
import './Register.css'
import UserCard from '../../Tools/UserCard/UserCard';
import karateInstructor from '../../../Assets/karateInstructor.png';
import Cookies from 'universal-cookie';
function Register() {
    let dispatch = useDispatch()
    let nav = useNavigate()
    let cookie = new Cookies()
    let currentUser = cookie.get('user')
    let [user, setUser] = useState({
        name: '',
        age: null,
        email: '',
        password: '',
        confirmPassword: '',
        privileges: 'usuario'
    })
    let handleRegisterSubmit = (e) => {
        e.preventDefault && e.preventDefault()
        dispatch(createOneUser({user: {...user, disabled: true}})).then(() => {
            nav('/login')
        } )

    }
    let handleOnChange = (e) => {
        console.log(user);
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }
    return ( <>
        {!currentUser?.disabled ? <div className='registerContainer'>
            
            <form className='formContainer' onSubmit={(e)=>{handleRegisterSubmit(e)}}>
            <h1>Regístrate</h1>
                <div className='inputGroup'>
                    <label>Nombre</label>
                    <input name='name' onChange = { (e) => handleOnChange(e)}/>
                </div>
                <div className='inputGroup'>
                    <label>Edad</label>
                    <input name='age' type={'number'} onChange = { (e) => handleOnChange(e)}/>
                </div>
                <div className='inputGroup'>
                    <label>E-mail</label>
                    <input name='email' onChange = { (e) => handleOnChange(e)}/>
                </div>
                <div className='inputGroup'>
                    <label>Contraseña</label>
                    <input name='password' type={'password'} onChange = { (e) => handleOnChange(e)}/>
                </div>
                <div className='inputGroup'>
                    <label>Confirmar Contraseña</label>
                    <input name='confirmPassword' type={'password'} onChange = { (e) => handleOnChange(e)}/>
                </div>
                <button className='registerButton' >Register</button>

            </form>
            <div className='usersCardPlaceHolderContainer'>
                <UserCard user = {{
                    name:user.name,
                    image: karateInstructor,
                    age: user?.age
                }} ></UserCard>

            </div>

        </div>: <div className='validatingContainer'>
                
                <h1>Se están validando sus datos por un administrador...</h1>
            
            </div>}
    
    
    </> );
}

export default Register;