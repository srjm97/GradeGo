import React, { useState } from 'react';
import { TextField, Button, Table, TableHead, TableRow, TableCell, TableBody,Select,MenuItem   } from '@mui/material';

const Timetable = () => {
    const [selectedDay, setSelectedDay] = useState('');
    const [courseCode, setCourseCode] = useState('');
    const [abbreviation, setAbbreviation] = useState('');
    const [timetable, setTimetable] = useState([]);
    const [viewTimetable, setViewTimetable] = useState(false);

    const handleDayChange = (event) => {
        setSelectedDay(event.target.value);
    };

    const handleInputChange = (event, index, property) => {
        const newTimetable = [...timetable];
        newTimetable[index][property] = event.target.value;
        setTimetable(newTimetable);
    };

    const addPeriod = () => {
        const newPeriod = { day: selectedDay, coursecode: courseCode, abbreviation: abbreviation };
        setTimetable([...timetable, newPeriod]);
        setCourseCode('');
        setAbbreviation('');
    };

    const handleSubmit = async () => {
        setViewTimetable(true);
    };

    return (
        <div>
            
            <Select value={selectedDay} onChange={handleDayChange}>
                <MenuItem value="">-- Select --</MenuItem>
                <MenuItem value="Monday">Monday</MenuItem>
                <MenuItem value="Tuesday">Tuesday</MenuItem>
                <MenuItem value="Wednesday">Wednesday</MenuItem>
                <MenuItem value="Thursday">Thursday</MenuItem>
                <MenuItem value="Friday">Friday</MenuItem>
                <MenuItem value="Saturday">Saturday</MenuItem>
            </Select>

            {selectedDay && (
                <div>
                    <h2>Enter Period:</h2>
                    <TextField
                        label="Course Code"
                        value={courseCode}
                        onChange={(event) => setCourseCode(event.target.value)}
                    />
                    <TextField
                        label="Abbreviation"
                        value={abbreviation}
                        onChange={(event) => setAbbreviation(event.target.value)}
                    />
                    <br />
                    <br />
                    <br />
                    <Button variant="contained" onClick={addPeriod}>
                        Add Period 
                    </Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <br />
                    <br />
                    <br />
                    <Button variant="contained" onClick={handleSubmit}>
                        View Timetable
                    </Button>
                </div>
            )}

            {viewTimetable && (
                <div>
                    <h2>Timetable:</h2>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Day</TableCell>
                                <TableCell>Abbreviation</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'].map((day) => (
                                <TableRow key={day}>
                                    <TableCell>{day}</TableCell>
                                    
                                    <TableCell>
                                        {timetable
                                            .filter((period) => period.day === day)
                                            .map((period, index) => (
                                                <TableCell>{period.abbreviation}</TableCell>
                                            ))}
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            )}
        </div>
    );
};

export default Timetable;