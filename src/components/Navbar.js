import { AppBar, Button, Stack, Toolbar, Typography } from "@mui/material";
import {useNavigate} from "react-router-dom"

const Navbar = () => {

    const navigate = useNavigate(); 

    function refreshPage(){
        navigate('/')
        window.location.reload();
    } 
    return (
        <>
            <AppBar position="static" style={{backgroundColor:'#f70542'}}>
                <Toolbar>
                    <Typography variant='h6' component='h6' sx={{ flexGrow: 1,fontWeight: 'bold' }}>
                        MOVIE BOOKING APP
                    </Typography>
                    <Stack direction='row'>
                            <Button color='inherit' onClick={()=>refreshPage()}>Home</Button>                       
                    </Stack>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar;