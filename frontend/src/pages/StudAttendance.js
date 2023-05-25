import React, { useState, useEffect, useContext } from 'react';
import { useTheme } from '@mui/material/styles';
import { Grid, Container, Typography, Select, MenuItem, InputLabel, FormControl } from '@mui/material';
import { FacultyDataContext } from '../FacultyDataContext';
import { DataContext } from '../DataContext';

import {
  AppCurrentVisits,
} from '../sections/@dashboard/app';

export default function StudAttendance() {
  const { hellodata } = useContext(DataContext);
  const theme = useTheme();
  const [selectedCourse, setSelectedCourse] = useState('');
  const [attendanceData, setAttendanceData] = useState({});

  // Handle course selection
  const handleCourseChange = (event) => {
    setSelectedCourse(event.target.value);
  };

  useEffect(() => {
    if (selectedCourse) {
      // Fetch attendance data
      fetchAttendanceData();
    }
  }, [selectedCourse, hellodata]);

  const fetchAttendanceData = async () => {
    try {
      const response = await fetch('http://localhost:1337/attendance/student', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ktuId: hellodata.details.batchDetails._id,
          courseCode: selectedCourse
        })
      });

      if (response.ok) {
        const data = await response.json();
        setAttendanceData(data);
      } else {
        // Handle error response
        console.log('Error:', response.status);
        
      }
    } catch (error) {
      // Handle fetch error
      console.log('Fetch Error:', error);
    }
  };

  return (
    <>
      <Grid item xs={12} md={6} lg={4}>
        {/* Dropdown to select course */}
        <FormControl fullWidth>
          <InputLabel id="course-select-label">Select a Course</InputLabel>
          <Select
            labelId="course-select-label"
            id="course-select"
            value={selectedCourse}
            onChange={handleCourseChange}
            displayEmpty
          >
            <MenuItem value="" disabled>
              Select a Course
            </MenuItem>
            {hellodata.details.studentCourses.coursesEnrolled[0].semesterCourses.map((course) => (
              <MenuItem key={course._id} value={course.courseCode}>
                {course.courseCode}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <AppCurrentVisits
          title="Students Attendance"
          chartData={[
            { label: 'Present', value: attendanceData?.presentCount || 0 },
            { label: 'Absent', value: attendanceData?.totalAttendanceLength ? attendanceData.totalAttendanceLength - attendanceData.presentCount : 0 },
          ]}
          chartColors={[
            theme.palette.success.main,
            theme.palette.error.main,
          ]}
        />
      </Grid>
    </>
  );
}