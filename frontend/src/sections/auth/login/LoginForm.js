import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// @mui
import { Link, Stack, IconButton, InputAdornment, TextField, Checkbox } from '@mui/material';
import { LoadingButton } from '@mui/lab';
// components
import Iconify from '../../../components/iconify';

// ----------------------------------------------------------------------


export default function LoginForm() {

  const [ktuId, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState(false);
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

    const data = await response.json();
    console.log(data);
    if (data.status === 'ok') {
      if (data.user === 'student') {
        window.location.href = '/dashboard'
      }
      else if (data.user === 'faculty') {
        window.location.href = '/facdashboard'
      }
    }
    else {
      setErrMsg(true);
      alert("Incorrect username or password")
    }
    console.log(data);
  }
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const handleClick = () => {
    navigate('/dashboard', { replace: true });
  };

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
