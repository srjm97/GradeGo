import React, { useEffect } from 'react';
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
  Container,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from '@mui/material';

const AdminCourses = () => {
  const semesters = [1, 2, 3, 4, 5, 6, 7, 8];
  const [selectedSemester, setSelectedSemester] = React.useState('');
  const [courses, setCourses] = React.useState([]);

  useEffect(() => {
    // Send GET request to fetch courses when the selected semester changes
    if (selectedSemester) {
      fetchCourses();
    }
  }, [selectedSemester]);

  const handleSemesterChange = (event) => {
    setSelectedSemester(event.target.value);
  };

  const fetchCourses = async () => {
    try {
      const response = await fetch('http://localhost:1337/admin/semesterCourses', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ semester: selectedSemester }),
      });

      if (response.ok) {
        const data = await response.json();
        setCourses(data);
      } else {
        console.error('Error:', response.statusText);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <Container maxWidth="sm" style={{ marginTop: '20px', marginBottom: '20px' }}>
      <Typography variant="h4" align="center" gutterBottom style={{ marginBottom: '10px' }}>
        Faculty Courses
      </Typography>
      <FormControl fullWidth style={{ marginBottom: '10px', minWidth: '120px' }}>
        <InputLabel id="semester-label">Semester</InputLabel>
        <Select
          labelId="semester-label"
          id="semester-select"
          value={selectedSemester}
          onChange={handleSemesterChange}
          label="Semester"
        >
          {semesters.map((semester) => (
            <MenuItem key={semester} value={semester}>
              Semester {semester}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {courses.length > 0 && (
        <div style={{ marginTop: '10px' }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Name</TableCell>
                {/* Add more table headers as needed */}
              </TableRow>
            </TableHead>
            <TableBody>
              {courses.map((course) => (
                <TableRow key={course._id}>
                  <TableCell>{course._id}</TableCell>
                  <TableCell>{course.courseName}</TableCell>
                  {/* Add more table cells with course data as needed */}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}
    </Container>
  );
};

export default AdminCourses;
