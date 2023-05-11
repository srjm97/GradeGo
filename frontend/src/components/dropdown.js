import React, { useState } from 'react';
import './dropdown.css'
const Dropdown = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [subjectInputs, setSubjectInputs] = useState(['', '', '', '', '', '', '']);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSubjectInputChange = (index, event) => {
    const newSubjectInputs = [...subjectInputs];
    newSubjectInputs[index] = event.target.value;
    setSubjectInputs(newSubjectInputs);
  };

  const handleSubmit = async () => {
    const data = {
      selectedOption,
      subjects: subjectInputs,
    };
    console.log("Hello");
    console.log(data);

    try {
      const response = await fetch('https://your-server-url.com/endpoint', {
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
      <select id="dropdown" value={selectedOption} onChange={handleOptionChange}>
        <option value="">-- Select --</option>
        <option value="Monday">Monday</option>
        <option value="Tuesday">Tuesday</option>
        <option value="Wednesday">Wednesday</option>
        <option value="Thursday">Thursday</option>
        <option value="Friday">Friday</option>
        <option value="Saturday">Saturday</option>
      </select>
      <p>Selected option: {selectedOption}</p>

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







