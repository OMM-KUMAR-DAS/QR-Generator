import React from 'react'
import { useState } from 'react'
import {Typography,Box,Button,TextField} from '@mui/material'

const QRcode = () => {
    

    const[inp,setI]= useState("")
    const[data,setQ]= useState()
    const[load,setload]= useState(false)

    
    const omm=async(event)=>{
        event.preventDefault()
        try{
            const res=await fetch(`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${inp}`)
            setQ(res.url)
            setload(true)
            setI("")
        }
        catch(error)
        {
            alert("sorry")
        }
    }

  return (


   
    <Box sx={{backgroundColor:'#14080e',margin:'0',padding:'0px',width:'100%',minHeight:'100vh'}}>
        

        
            
            <form>

               <Typography varient="h2" sx={{ color: '#fff',textAlign:'center',fontWeight:"bold",width:'100%'}}  >QR CODE GENERATOR</Typography>
               
               <Box sx={{ width: { xs: '85%', sm: '60%', md: '50%' },display:'flex',justifyContent:'center',alignContent:'center',marginLeft:'auto',marginRight:'auto',boxShadow: '0px 0px 25px rgba(0, 0, 0, 0.5)',padding:'10px',marginTop:'40px',borderRadius:'25px',flexDirection:'column',border:'3px solid white',backgroundColor:'#f7ebe8',boxShadow: "0 0 20px 0 rgba(255, 255, 255, 0.9)"}}>
               

             

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
                   


                     
                     { 
                        load &&

                            <img className="qrr" src={data} alt=" " style={{width:'35%',marginLeft:'auto',marginRight:'auto'}}/>
                     }
                     
                      <br></br>
                      <br></br>
                     
                    <Button onClick={omm} sx={{width:'50%',marginLeft:'auto',marginRight:'auto',border:'2px solid lightblue',borderRadius:'25px'}} varient="outlined"> Generate</Button>
                   






            </Box>    
                
            </form>

    </Box>
  )
}

export default QRcode
