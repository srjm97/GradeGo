import { Helmet } from 'react-helmet-async';
import React, { useState, useEffect,useContext } from 'react';
import { useTheme } from '@mui/material/styles';
import { Grid, Container, Typography } from '@mui/material';
import { FacultyDataContext } from '../FacultyDataContext';
import { DataContext } from '../DataContext';
import {
  AppCurrentVisits,

} from '../sections/@dashboard/app';



export default function StudAttendance() 
{
  const theme = useTheme();
    return (
      <>
        <Grid item xs={12} md={6} lg={4}>
            <AppCurrentVisits
              title="Students Attendance"
              chartData={[
                { label: 'Present', value: 4344 },
                { label: 'Absent', value: 5435 },
                
              ]}
              chartColors={[
                theme.palette.success.main,
                theme.palette.error.main,
              ]}
            />
          </Grid>

      </>
    )


  
}
