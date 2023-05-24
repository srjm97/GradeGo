import React, { useEffect, useState } from 'react';
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
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
} from '@mui/material';

const AdminCourses = () => {
  const semesters = [1, 2, 3, 4, 5, 6, 7, 8];
  const [selectedSemester, setSelectedSemester] = useState('');
  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [selectedBatch, setSelectedBatch] = useState('');
  const [faculties, setFaculties] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFaculty, setSelectedFaculty] = useState(null);

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
        setCourses(data.semesterCourses);
        setFaculties(data.faculties);
      } else {
        console.error('Error:', response.statusText);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    console.log(courses);
  }, [courses]);

  const handleCourseClick = (course) => {
    setSelectedCourse(course);
  };

  const handleBatchSelect = (event) => {
    setSelectedBatch(event.target.value);
    fetchFaculties(event.target.value);
  };

  const fetchFaculties = async (selectedBatch) => {
    try {
      const response = await fetch('http://localhost:1337/admin/semesterCourses');
      if (response.ok) {
        const data = await response.json();
        setFaculties(data.faculties);
      } else {
        console.error('Error:', response.statusText);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    console.log(faculties);
  }, [faculties]);

  const handleFacultySelect = (faculty) => {
    setSelectedFaculty(faculty);
  };

  const handleDialogClose = () => {
    setSelectedCourse(null);
    setSelectedBatch('');
    setFaculties([]);
    setSearchQuery('');
    setSelectedFaculty(null);
  };

  const handleSubmit = () => {
    // Perform any necessary actions with the selected course, batch, and faculty
    console.log('Selected Course:', selectedCourse);
    console.log('Selected Batch:', selectedBatch);
    console.log('Selected Faculty:', selectedFaculty);
    handleDialogClose();
  };

  const handleSearchQueryChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filterFacultiesByName = (faculty) => {
    const fullName = `${faculty.name.first_name} ${faculty.name.middle_name} ${faculty.name.last_name}`;
    return fullName.toLowerCase().includes(searchQuery.toLowerCase());
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
                <TableCell>Action</TableCell>
                {/* Add more table headers as needed */}
              </TableRow>
            </TableHead>
            <TableBody>
              {courses.map((course) => (
                <TableRow key={course._id}>
                  <TableCell>{course._id}</TableCell>
                  <TableCell>{course.courseName}</TableCell>
                  <TableCell>
                    <Button variant="outlined" onClick={() => handleCourseClick(course)}>
                      Select Batch
                    </Button>
                  </TableCell>
                  {/* Add more table cells with course data as needed */}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}

      <Dialog open={selectedCourse !== null} onClose={handleDialogClose}>
        <DialogTitle>Select Batch</DialogTitle>
        <DialogContent>
          <FormControl fullWidth style={{ marginBottom: '10px', minWidth: '120px' }}>
            <InputLabel id="batch-label">Batch</InputLabel>
            <Select
              labelId="batch-label"
              id="batch-select"
              value={selectedBatch}
              onChange={handleBatchSelect}
              label="Batch"
            >
              <MenuItem value={1}>Batch 1</MenuItem>
              <MenuItem value={2}>Batch 2</MenuItem>
            </Select>
          </FormControl>

          <TextField
            label="Search Faculties"
            value={searchQuery}
            onChange={handleSearchQueryChange}
            fullWidth
            style={{ marginBottom: '10px' }}
          />

          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {faculties
                .filter(filterFacultiesByName)
                .map((faculty) => (
                  <TableRow key={faculty._id}>
                    <TableCell>{faculty._id}</TableCell>
                    <TableCell>{`${faculty.name.first_name} ${faculty.name.middle_name} ${faculty.name.last_name}`}</TableCell>
                    <TableCell>
                      <Button variant="outlined" onClick={() => handleFacultySelect(faculty)}>
                        Select Faculty
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              {faculties.length === 0 && (
                <TableRow>
                  <TableCell colSpan={2}>
                    <Typography variant="body1" align="center" style={{ marginTop: '10px' }}>
                      No matching faculties found.
                    </Typography>
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose}>Cancel</Button>
          <Button onClick={handleSubmit} variant="contained" color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default AdminCourses;
