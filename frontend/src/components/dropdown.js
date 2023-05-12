import React, { useState } from "react";
import "./dropdown.css";

const Dropdown = () => {
  const [_id, setId] = useState("");
  const [periodnum, setPeriodNum] = useState(1);
  const [subjectInputs, setSubjectInputs] = useState([]);

  const handleOptionChange = (event) => {
    setId(event.target.value);
  };

  const addSubject = (event) => {
    setSubjectInputs([
      ...subjectInputs,
      { index: periodnum, coursecode: "", abbreviation: "" },
    ]);
    setPeriodNum(periodnum + 1);
  };

  const handleSubjectInputChange = (index, event, key) => {
    const newSubjectInputs = [...subjectInputs];
    newSubjectInputs[index][key] = event.target.value;
    setSubjectInputs(newSubjectInputs);
  };

  const handleSubmit = async () => {
    const data = {
      day: _id,
      periods: subjectInputs,
    };
    console.log("Hello");
    console.log(data);

    try {
      const response = await fetch("http://localhost:1337/facdashboard", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const responseData = await response.json();
      console.log(responseData);
    } catch (error) {
      console.error("Error:", error);
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
        <div key={index}>
          {/* <input
            className="input-box"
            type="text"
            
            value={subject.index}
            // onChange={(event) =>
            //   handleSubjectInputChange(index, event, 'index')
            // }
          /> */}
          <label>{subject.index}  </label>
          <input
            className="input-box"
            type="text"
            placeholder="Enter Course Code"
            value={subject.coursecode}
            onChange={(event) =>
              handleSubjectInputChange(index, event, "coursecode")
            }
          />
          <input
            className="input-box"
            type="text"
            placeholder="Enter Abbreviation"
            value={subject.abbreviation}
            onChange={(event) =>
              handleSubjectInputChange(index, event, "abbreviation")
            }
          />
        </div>
      ))}
      <button onClick={addSubject}>Add Subject</button>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Dropdown;
