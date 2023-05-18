import { useState,useContext,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {DataContext} from '../../../DataContext';
// @mui
import { Link, Stack, IconButton, InputAdornment, TextField, Checkbox } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import Iconify from '../../../components/iconify';


// ----------------------------------------------------------------------

export default function LoginForm() {
  const { hellodata, setHelloData } = useContext(DataContext);
  const [ktuId, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState(false);
  let data={};
  const validateUser = async (event) => {
    event.preventDefault();
    const response = await fetch("http://localhost:1337/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ktuId,
        password,
      }),
    });

    data = await response.json();
    
    setHelloData(data);
    if(data.status!='ok') {
      setErrMsg(true);
      alert("Incorrect username or password");
    }
    
  }
    
  const navigate = useNavigate();
  useEffect(() => {
    
    if (hellodata.status === 'ok') {
      if (hellodata.user === 'student') {
        window.location.href = '/studdashboard';
      } else if (hellodata.user === 'faculty') {
        navigate('/dashboard', { replace: true });
      }
    } 
  }, [hellodata]);

  

  const [showPassword, setShowPassword] = useState(false);

  // const handleClick = () => {
  //   navigate('/dashboard', { replace: true });
  // };
  
  
  return (
    <>
      <Stack spacing={3}>
        <TextField value={ktuId} name="email" onChange={(e) => setUsername(e.target.value)} label="Username" />

        <TextField
          name="password"
          value={password}
          label="Password"
          onChange={(e) => setPassword(e.target.value)}
          type={showPassword ? 'text' : 'password'}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                  <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Stack>
      <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 2 }}>
        <Link variant="subtitle2" underline="hover">
          Forgot password?
        </Link>
      </Stack>
      <LoadingButton fullWidth size="large" type="submit" variant="contained" onClick={validateUser}>
        Login
      </LoadingButton>
    </>
  );
  
}
