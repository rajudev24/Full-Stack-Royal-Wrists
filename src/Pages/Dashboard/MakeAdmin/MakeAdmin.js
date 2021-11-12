import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');

    const handleBlur = e =>{
        // setAdmin(e.target.value)
        const result = e.target.value
        setEmail(result);
    }
    
    const addAdmin = e =>{
        const user = {email}
        fetch(`https://shrouded-savannah-73194.herokuapp.com/users`, {
            method: 'PUT',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res=> res.json())
        .then(data =>{
            if(data.modifiedCount > 0){
                
                alert ('Successfully added Admin')
                setEmail('')
            }
        })

        e.preventDefault()
    }


    return (
        <div>
            <h2>this is make Admin page</h2>
            <form onSubmit ={addAdmin} >
            <TextField
             id="outlined-basic" 
             label="Email" 
             type ='email'
             onBlur = {handleBlur}
             variant="outlined" 
             />
             <Button 
            type="submit"
            variant='contained'
            style={{
                marginLeft: '10px',
                padding: '15px 10px'
            }} 
            > Make Admin</Button>
            </form>
            
            
        </div>
    );
};

export default MakeAdmin;