import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { filter } from 'lodash';
import { sentenceCase } from 'change-case';
import {
  Card,
  Table,
  Stack,
  Paper,
  Avatar,
  Button,
  Popover,
  Checkbox,
  TableRow,
  MenuItem,
  TableHead,
  TableBody,
  TableCell,
  Container,
  Typography,
  IconButton,
  TableContainer,
  TablePagination,
} from '@mui/material';
import Label from '../components/label';
import Iconify from '../components/iconify';
import Scrollbar from '../components/scrollbar';
import { faker } from '@faker-js/faker';
import { sample } from 'lodash';

// ----------------------------------------------------------------------

const USER_LIST = [...Array(24)].map((_, index) => ({
  id: faker.datatype.uuid(),
  avatarUrl: `/assets/images/avatars/avatar_${index + 1}.jpg`,
  name: faker.name.fullName(),
  rollNumber: index + 1,
  status: 'present',
}));

const TABLE_HEAD = [
  { id: 'rollNumber', label: 'Roll Number', alignRight: false },
  { id: 'name', label: 'Name', alignRight: false },
  { id: 'status', label: 'Attendance Status', alignRight: false },
  { id: '' },
];


export default function AttendanceSetting() {

  useEffect(() => {
    const fetchData = async () => {
      const requestData = {
        semester: 6,
        batch: 1,
        courseCode: 'CST310',
      };

      try {
        const response = await fetch('/tutor/attendance', {
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
        console.log(data); // Handle the received data from the backend
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const [open, setOpen] = useState(null);
  const [page, setPage] = useState(0);
  const [order, setOrder] = useState('asc');
  const [selected, setSelected] = useState([]);
  const [orderBy, setOrderBy] = useState('name');
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [filteredStudents, setFilteredStudents] = useState(USER_LIST);

  const handleOpenMenu = (event) => {
    setOpen(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setOpen(null);
  };

  useEffect(() => {
    function initialClick() {
      const newSelected = USER_LIST.map((n) => n.name);
      setSelected(newSelected);
      const updatedStudents = USER_LIST.map((student) => ({
        ...student,
        status: 'present',
      }));
      setFilteredStudents(updatedStudents);
    }
    initialClick();
  }, []);

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = USER_LIST.map((n) => n.name);
      setSelected(newSelecteds);
      const updatedStudents = USER_LIST.map((student) => ({
        ...student,
        status: 'present',
      }));
      setFilteredStudents(updatedStudents);
      return;
    }

    setSelected([]);
    const updatedStudents = USER_LIST.map((student) => ({
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

    const updatedStudents = USER_LIST.map((student) => {
      if (newSelected.includes(student.name)) {
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

  const applySortFilter = (array, comparator, query) => {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
      const order = comparator(a[0], b[0]);
      if (order !== 0) return order;
      return a[1] - b[1];
    });
    if (query) {
      return filter(array, (_user) => _user.name.toLowerCase().indexOf(query.toLowerCase()) !== -1);
    }
    return stabilizedThis.map((el) => el[0]);
  };

  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - filteredStudents.length) : 0;

  return (

    <>
          <div>
          <Helmet>
            <title>Attendance Settings</title>
          </Helmet>
          <Container>
            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
              <Typography variant="h4">Attendance Settings</Typography>
            </Stack>

            <Card>
              <Scrollbar>
                <TableContainer sx={{ minWidth: 800 }}>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell padding="checkbox">
                          <Checkbox
                            color="primary"
                            indeterminate={selected.length > 0 && selected.length < filteredStudents.length}
                            checked={filteredStudents.length > 0 && selected.length === filteredStudents.length}
                            onChange={handleSelectAllClick}
                            inputProps={{ 'aria-label': 'select all desserts' }}
                          />
                        </TableCell>
                        {TABLE_HEAD.map((headCell) => (
                          <TableCell
                            key={headCell.id}
                            align={headCell.alignRight ? 'right' : 'left'}
                            sortDirection={orderBy === headCell.id ? order : false}
                          >
                            {headCell.label}
                          </TableCell>
                        ))}
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {filteredStudents
                        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                        .map((row) => {
                          const { id, avatarUrl, name, rollNumber, status } = row;
                          const isItemSelected = selected.indexOf(name) !== -1;

                          return (
                            <TableRow
                              hover
                              key={id}
                              tabIndex={-1}
                              role="checkbox"
                              selected={isItemSelected}
                              aria-checked={isItemSelected}
                            >

                              <TableCell padding="checkbox">
                                <Checkbox
                                  color="primary"
                                  checked={isItemSelected}
                                  onChange={(event) => handleClick(event, name)}
                                  inputProps={{ 'aria-labelledby': id }}
                                />
                              </TableCell>
                              <TableCell >{rollNumber}</TableCell>
                              <TableCell>
                                <Stack direction="row" alignItems="center" spacing={2}>
                                  <Avatar alt={name} src={avatarUrl} />
                                  <Typography variant="subtitle2" noWrap>
                                    {name}
                                  </Typography>
                                </Stack>
                              </TableCell>
                              <TableCell>
                                <Label
                                  variant={status === 'present' ? 'ghost' : 'filled'}
                                  color={status === 'present' ? 'success' : 'error'}
                                >
                                  {sentenceCase(status)}
                                </Label>
                              </TableCell>
                              <TableCell align="right">
                                <IconButton size="small">
                                  <Iconify icon="eva:more-vertical-2-fill" />
                                </IconButton>
                              </TableCell>
                            </TableRow>
                          );
                        })}

                      {emptyRows > 0 && (
                        <TableRow style={{ height: 53 * emptyRows }}>
                          <TableCell colSpan={5} />
                        </TableRow>
                      )}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Scrollbar>

              <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                count={filteredStudents.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              />
            </Card>
          </Container>
        </div>)}
    </>
  );
}
