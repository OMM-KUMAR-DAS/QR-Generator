import React from 'react'
import { useState } from 'react'
import {Typography,Box,Grid,TextField} from '@mui/material'

const QRcode = () => {

    const[inp,setI]= useState("")
    const[data,setQ]= useState()
    
    const omm=async(event)=>{
        event.preventDefault()
        try{
            const res=await fetch(`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${inp}`)
            setQ(res.url)
        }
        catch(error)
        {
            alert("sorry")
        }
    }
  return (
    <div className='con'>
        

        <br></br>
            
            <form onSubmit={omm}>
               <Typography varient="h2" style={{ color: '#fff' }} align="center"  fontWeight="bold"  gutterBottom >QR CODE GENERATOR</Typography>
               
               <Box sx={{display:'flex',justifyContent:'center',alignContent:'center',width:'70%',marginLeft:'auto',marginRight:'auto',boxShadow: '0px 0px 25px rgba(0, 0, 0, 0.5)',padding:'10px',marginTop:'40px',borderRadius:'10%'}}>
               

               <Grid spacing={1}>

                    <Grid item xs={12} sm={6} >
                            <TextField
                                    required
                                    fullWidth
                                    sx={{ marginBottom: '20px',marginTop:'20px' ,textAlign:'center' }}
                                    InputLabelProps={{ style: { color: 'black',fontFamily:'cursive', fontWeight:'bold' } }}
                                    type="text"
                                    label="URL"
                                    className="inp"
                                    value={inp}
                                    placeholder='Enter url or text'
                                    variant="outlined"
                                    onChange={(event)=>setI(event.target.value)}
                                    />
                    </Grid> 


                     <Grid item xs={12} sm={6} >
                            <img className="qrr" src={data} alt=" "/>
                     </Grid> 
                      <br></br>
                      <br></br>
                     <Grid item xs={12} sm={6} >
                          <button className="bt">Generate Qr code</button>
                     </Grid>   





               </Grid>

            </Box>    
                
            </form>

    </div>
  )
}

export default QRcode