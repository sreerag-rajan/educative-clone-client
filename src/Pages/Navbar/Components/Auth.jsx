import { Button } from "@mui/material";
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';

import {useState, useEffect, Fragment, useRef } from "react";
import { useDispatch, useSelector } from "react-redux"


import avatar from "../../../Assets/Navbar/Auth/avatar.png"
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../../Redux/Auth/auth.action";


export const Auth = ()=>{
  const navigate = useNavigate()
    const user = useSelector((store)=>store.auth.user);
    const dispatch = useDispatch()

    useEffect(()=>{
        let x = JSON.parse(localStorage.getItem("educativeUser"))
        dispatch(loginUser(x));
    },[])

    const handleNavigate = (route)=>{
      navigate(route)
    }
    
    return(
        <>
        {user?<div>
            {/* <Avatar className="user" alt="Remy Sharp" src={avatar} /> */}
            <UserAvatar/>
        </div>:
        <div className="noUser">
            <Button onClick={()=>{handleNavigate("/login")}} sx={{color:"black", fontWeight:"bold"}}>Login</Button>
            <Button onClick={()=>{handleNavigate("/register")}}  variant="contained">Join For Free</Button>            
        </div>}
        </>
    )
}



const UserAvatar = ()=>{
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const dispatch = useDispatch()
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Fragment>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            {/* <Avatar sx={{ width: 32, height: 32 }}>M</Avatar> */}
            <Avatar className="user" alt="Remy Sharp" src={avatar} />
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem>
          <Avatar /> Profile
        </MenuItem>
        <MenuItem>
          <Avatar /> My account
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem onClick={()=>{
          localStorage.removeItem("educativeUser");
          dispatch(loginUser(null));
        }}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </Fragment>
  );
}
