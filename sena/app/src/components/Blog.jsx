import { Button, TextField } from '@mui/material'
import React from 'react'

const Blog = () => {
  return (
    <div>
        <br /> <br />
       <h1>BLOG FORM</h1> 
       <TextField label='Blog Name' variant='outlined' />
       <br /><br />
       <TextField label='Description' variant='outlined' />
       <br /><br />
       <TextField label='Author Name' variant='outlined' />
       <br /><br />
       <Button variant='outlined' sx={{backgroundColor:'white',borderColor:'black',color:'black'}}>SUBMIT</Button>
    </div>
  )
}

export default Blog