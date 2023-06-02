import React, { useState } from 'react';

const AddUser = () => {
    const [user, setUser] = useState({});

    const handleAddUser = event =>{
        event.preventDefault();


        fetch('https://crud-server-rho.vercel.app/information', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({user})
        })
        .then(res => res.json())
      
        .then(data => {
            if(data.acknowledged){
                alert('user added successfully')
                event.target.reset();
            }
        })
    }

    const handleInputBlur = event =>{
        const field = event.target.name;
        const value = event.target.value;
        const newUser = {...user}
        newUser[field] = value;
        setUser(newUser);
    }
    return (
        <div>
            <h2 className='text-2xl mb-3 text-center'>Please add a new User</h2>
            <form onSubmit={handleAddUser}>
                <input onChange={handleInputBlur} type="text" name="name" placeholder='name' className='input input-ghost input-bordered mb-2' required />
                <br />
                <input onChange={handleInputBlur} type="number" name="phone" placeholder='phone number' className='input input-ghost input-bordered mb-2' required />
                <br />
                <input onChange={handleInputBlur} type="email" name="email" id="" placeholder='email' className='input input-ghost input-bordered mb-2' required />
                <br />
                <input onChange={handleInputBlur} type="text" name="hobbies" placeholder='hobbies' className='input input-ghost input-bordered mb-3' required />
                <br />
                <button  className="btn btn-accent" type='submit'>Add User</button>
            </form>
        </div>
    );
};

export default AddUser;