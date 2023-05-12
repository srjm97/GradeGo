import React, { useState } from 'react';
import './dropdown.css'
const Dropdown = () => {
  const [_id, setId] = useState('');
  const [subjectInputs, setSubjectInputs] = useState(['', '', '', '', '', '', '']);

  const handleOptionChange = (event) => {
    setId(event.target.value);
  };
  const handleSubjectInputChange = (index, event) => {
    const newSubjectInputs = [...subjectInputs];
    newSubjectInputs[index] = event.target.value;
    setSubjectInputs(newSubjectInputs);
  };

  const handleSubmit = async () => {
    const data = {
      _id,
      periods: subjectInputs,
    };
    console.log("Hello");
    console.log(data);

    try {
      const response = await fetch('http://localhost:1337/facdashboard', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const responseData = await response.json();
      console.log(responseData);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="dropdown">
      <label htmlFor="dropdown">Select an option:</label>
      <select id="dropdown" value={_id} onChange={handleOptionChange}>
        <option value="">-- Select --</option>
        <option value="Monday">Monday</option>
        <option value="Tuesday">Tuesday</option>
        <option value="Wednesday">Wednesday</option>
        <option value="Thursday">Thursday</option>
        <option value="Friday">Friday</option>
        <option value="Saturday">Saturday</option>
      </select>
      <p>Selected option: {_id}</p>

      <h4>Enter Subjects:</h4>
      {subjectInputs.map((subject, index) => (
        <input className='input-box'
          key={index}
          type="text"
          placeholder='Enter subject'
          value={subject}
          onChange={(event) => handleSubjectInputChange(index, event)}
        />
      ))}

      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Dropdown;







