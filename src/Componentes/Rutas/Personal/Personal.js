import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Cookies from 'universal-cookie';
import { editOneUser, fetchAllUsers, fetchOneUser } from '../../../features/users/userSlice';
import UserCard from '../../Tools/UserCard/UserCard';
import './Personal.css'
function Personal() {
    let cookies = new Cookies()
    let user = cookies.get('user')
    let dispatch = useDispatch()
    let allUsers = useSelector(status => status.users.users)
    let serverResponse = useSelector(status => status.users.response)
    useEffect(() => {
        if(user?.privileges === 'admin'){
            dispatch(fetchAllUsers())
        }
    }, [])
    useEffect(() => {
        if(user?.privileges === 'admin'){
            dispatch(fetchAllUsers())
        }
    }, [serverResponse])
    function ableUser(user){
        dispatch(editOneUser({id: user?.id, findBy: 'disabled', infoUpdated: false}))
    }
    function disableUser(user){
        dispatch(editOneUser({id: user?.id, findBy: 'disabled', infoUpdated: true}))

    }
    return ( <>
        <div className='userCardsContainer'>
            {allUsers?.map(personal => {
                return (<div className='userCardContainerParent'>
                    <UserCard user={personal} >
                    </UserCard>
                   { personal?.disabled && <button onClick={() => {ableUser(personal)}}>Habilitar</button>}
                   { !personal?.disabled && <button onClick={() => {disableUser(personal)}}>Desahabilitar</button>}
                </div>)
            })}
        </div>
    
    
    </> );
}

export default Personal;