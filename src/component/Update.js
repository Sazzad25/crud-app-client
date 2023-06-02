import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const Update = () => {
    const storedUser = useLoaderData();
    const [user, setUser] = useState({storedUser});

    const handleUpdateUser = event =>{
        event.preventDefault();
        console.log(user);
        fetch(`https://crud-server-rho.vercel.app/information/${storedUser._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({user})
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            // if(data.modifiedCount > 0){
            //     alert('user updated')
    
            // }
        
        })

    }

    const handleInputChange = event =>{
        const field = event.target.value;
        const value = event.target.value;
        const newUser = {...user}
        newUser[field] = value;
        setUser(newUser);
    }
    return (
        <div>
            <h2>Please Update: {storedUser.user.name}</h2>
            <form onSubmit={handleUpdateUser}>
                <input onChange={handleInputChange} defaultValue={storedUser.user.name} type="text" name="name" placeholder='name'  className='input input-ghost input-bordered'  required />
                <br />
                <input onChange={handleInputChange} defaultValue={storedUser.user.phone} type="number" name="phone" placeholder='Phone Number'  className='input input-ghost input-bordered'  required />
                <br />
                <input onChange={handleInputChange} defaultValue={storedUser.user.email} type="email" name="email" placeholder='email'  className='input input-ghost input-bordered'  required />
                <br />
                <input onChange={handleInputChange} defaultValue={storedUser.user.hobbies} type="text" name="message" placeholder='hobbies'  className='input input-ghost input-bordered'  required />
                <br />
                <button className='btn btn-accent' type='submit'>Update User</button>
            </form>
        </div>
    );
};

export default Update;