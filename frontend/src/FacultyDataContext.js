import React, { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export const FacultyDataContext = createContext();

export const FacultyDataProvider = ({ children }) => {
  const [facsemdata, setFacSemData] = useState(() => {
    const storedData = localStorage.getItem('facsemdata');
    return storedData
      ? JSON.parse(storedData)
      : {
          _id: '',
          coursesHandled: [],
        };
  });

  useEffect(() => {
    localStorage.setItem('facsemdata', JSON.stringify(facsemdata));
  }, [facsemdata]);

  return (
    <FacultyDataContext.Provider value={{ facsemdata, setFacSemData }}>
      {children}
    </FacultyDataContext.Provider>
  );
};

FacultyDataProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
