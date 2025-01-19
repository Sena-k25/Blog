import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React, { useState } from 'react'
import axios from 'axios'
const Home = () => {
    const [data,setdata]=useState([])
    axios.get("https://jsonplaceholder.typicode.com/posts")
    .then((res) => {
        console.log(res.data)
        setdata(res.data)
    })
  return (
    <div>
        <TableContainer>
            <Table>
                <TableHead>
                    <br /> <br />
                    <TableRow> 
                        <TableCell>ID</TableCell>
                        <TableCell>TITLE</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((val) =>{
                        return (
                            <TableRow>
                                <TableCell>{val.id}</TableCell>
                                <TableCell>{val.title}</TableCell>
                            </TableRow>
                        )
                    })

                    }
                </TableBody>
            </Table>
        </TableContainer>
    </div>
  )
}

export default Home