import React, { useState, useEffect, useContext } from 'react';
import { Helmet } from 'react-helmet-async';
// import { filter } from 'lodash';
import { sentenceCase } from 'change-case';
import { FacultyDataContext } from '../FacultyDataContext';


import {
  Card,
  Table,
  Stack,
  Avatar,
  Button,
  Checkbox,
  TableRow,
  MenuItem,
  TableHead,
  TableBody,
  TableCell,
  Container,
  Typography,
  TableContainer,
  TablePagination,
  Select,
  CircularProgress,
} from '@mui/material';
import Label from '../components/label';
import Scrollbar from '../components/scrollbar';


// ----------------------------------------------------------------------

const TABLE_HEAD = [
  { id: 'rollNumber', label: 'Roll Number', alignRight: false },
  { id: 'name', label: 'Name', alignRight: false },
  { id: 'status', label: 'Attendance Status', alignRight: false },
  { id: '' },
];


export default function AttendanceSetting() {

  const { facsemdata } = useContext(FacultyDataContext);
  const [selectedOpt, setSelectedOpt] = useState("");
  const [semester, setSemester] = useState(0);
  const [courseCode, setCourseCode] = useState("");
  const [batch, setBatch] = useState(0);
  const [loading, setLoading] = useState(false);

  const handleSelectOption = (event) => {

    const selectedValue = event.target.value;
    const selectedOption = facsemdata.facultyDetails.coursesHandled.find(
      (course) => course._id === selectedValue._id
    );

    if (selectedOption) {
      setSemester(selectedOption.semester);
      setCourseCode(selectedOption.courseCode);
      setBatch(selectedOption.batch);
    }

    setSelectedOpt(selectedValue);

  };


  const [userList, setUserList] = useState([]);
  const [page, setPage] = useState(0);
  // const [order, setOrder] = useState('asc');
  const [selected, setSelected] = useState([]);
  // const [orderBy, setOrderBy] = useState('name');
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [filteredStudents, setFilteredStudents] = useState(userList);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const requestData = {
        semester: semester,
        batch: batch,
        courseCode: courseCode
      };

      try {
        const response = await fetch('https://gradego-rtib.onrender.com/tutor/attendancedata', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(requestData),
        });

        if (!response.ok) {
          throw new Error('Error: Fetch request failed');
        }

        const data = await response.json();
        setUserList(data);
        setLoading(false);

      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [selectedOpt]);

  useEffect(() => {
    function initialClick() {
      const newSelected = userList.map((n) => n.name.firstName);
      setSelected(newSelected);
      const updatedStudents = userList.map((student) => ({
        ...student,
        status: 'present',
      }));
      setFilteredStudents(updatedStudents);
    }
    initialClick();
  }, [userList]);

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = userList.map((n) => n.name.firstName);
      setSelected(newSelecteds);
      const updatedStudents = userList.map((student) => ({
        ...student,
        status: 'present',
      }));
      setFilteredStudents(updatedStudents);
      return;
    }

    setSelected([]);
    const updatedStudents = userList.map((student) => ({
      ...student,
      status: 'absent',
    }));
    setFilteredStudents(updatedStudents);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else {
      newSelected = newSelected.concat(selected.slice(0, selectedIndex), selected.slice(selectedIndex + 1));
    }

    const updatedStudents = userList.map((student) => {
      if (newSelected.includes(student.name.firstName)) {
        return {
          ...student,
          status: 'present',
        };
      } else {
        return {
          ...student,
          status: 'absent',
        };
      }
    });

    setSelected(newSelected);
    setFilteredStudents(updatedStudents);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - filteredStudents.length) : 0;

  const submitAttendance = async () => {
    let currentDate = new Date().toISOString().slice(0, 10); // Get current date in yyyy-mm-dd format
    let currentHour = new Date().getHours(); // Get current hour
    if (currentHour <= 12) {
      currentHour = currentHour - 8;
    }

    else if (currentHour >= 13) {
      currentHour = currentHour - 9;
    }

    const attendanceData = filteredStudents.map((student) => {
      const { _id, status } = student;

      return {
        _id,
        courseCode,
        date: currentDate,
        hour: currentHour,
        isPresent: status === 'present'
      };
    });

    try {
      const response = await fetch('https://gradego-rtib.onrender.com/tutor/attendance', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(attendanceData),
      });

      if (!response.ok) {
        throw new Error('Error: Attendance submission failed');
      }

      // Handle successful submission (e.g., show a success message, redirect, etc.)
    } catch (error) {
      console.error(error);
      // Handle error (e.g., show an error message)
    }
  };

  return (
    <>
      
        <Helmet>
          <title>Attendance Settings</title>
        </Helmet>
        <Container>
          <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
            <Typography variant="h4">Attendance Settings</Typography>
          </Stack>
          <Stack direction="row" spacing={2}>
            <Typography variant="subtitle1">Select Details:</Typography>
            <Select value={selectedOpt} onChange={handleSelectOption}>
              {facsemdata.facultyDetails.coursesHandled.map((course) => (
                <MenuItem key={course._id} value={course}>
                  Semester: {course.semester} | Batch: {course.batch} | Course Code: {course.courseCode}
                </MenuItem>
              ))}
            </Select>
          </Stack>

          {loading ? ( 
            <div  style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  minHeight: '300px', // Set a minimum height for the container
                }}>
              <CircularProgress />
            </div>
            
          ) : (
            < Card >
            <Scrollbar>
              <TableContainer sx={{ minWidth: 800 }}>
                <Table>
                  <TableHead>
                    <TableRow>

                      {TABLE_HEAD.map((headCell) => (
                        <TableCell
                          key={headCell.id}
                          align={headCell.alignRight ? 'right' : 'left'}
                          // sortDirection={orderBy === headCell.id ? order : false}
                        >
                          {headCell.label}
                        </TableCell>
                      ))}

                      <TableCell padding="checkbox">
                        <Checkbox
                          color="primary"
                          indeterminate={selected.length > 0 && selected.length < filteredStudents.length}
                          checked={filteredStudents.length > 0 && selected.length === filteredStudents.length}
                          onChange={handleSelectAllClick}
                          inputProps={{ 'aria-label': 'select all desserts' }}
                        />
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {filteredStudents
                      .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                      .map((row, index) => {
                        const { _id, name, status } = row;
                        const isItemSelected = selected.indexOf(name.firstName) !== -1;

                        return (
                          <TableRow
                            hover
                            key={_id}
                            tabIndex={-1}
                            role="checkbox"
                            selected={isItemSelected}
                            aria-checked={isItemSelected}
                          >

                            <TableCell>{index + 1}</TableCell>
                            <TableCell>
                              <Stack direction="row" alignItems="center" spacing={2}>
                                <Avatar alt={name.firstName} src={`/assets/images/avatars/avatar_${index + 1}.jpg`} />
                                <Typography variant="subtitle2" noWrap>
                                  {`${name.firstName} ${name.lastName}`}
                                </Typography>
                              </Stack>
                            </TableCell>
                            <TableCell>
                              <Label
                                variant={status === 'present' ? 'filled' : 'outlined'}
                                color={status === 'present' ? 'success' : 'error'}
                              >
                                {sentenceCase(status)}
                              </Label>
                            </TableCell>
                            <TableCell padding="checkbox">
                              <Checkbox
                                color="primary"
                                checked={isItemSelected}
                                onChange={(event) => handleClick(event, name.firstName)}
                                inputProps={{ 'aria-labelledby': _id }}
                              />
                            </TableCell>
                          </TableRow>
                        );
                      })}
                    {emptyRows > 0 && (
                      <TableRow style={{ height: 53 * emptyRows }}>
                        <TableCell colSpan={6} />
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </TableContainer>

              <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                count={filteredStudents.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              />
              <Button variant="contained" onClick={submitAttendance}>
                Submit Attendance
              </Button>
            </Scrollbar>
          </Card>)}
      </Container>
    
    </>
  );
}