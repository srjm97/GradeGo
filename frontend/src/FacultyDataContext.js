import React, { createContext, useState,useEffect } from 'react';

export const FacultyDataContext = createContext();

export const FacultyDataProvider = (props) => {
    const [facsemdata, setFacSemData] = useState(() => {
        const storedData = localStorage.getItem('facsemdata');
        return storedData ? JSON.parse(storedData) : {
            _id: '',
            coursesHandled: []
        };
    });

    useEffect(() => {
        localStorage.setItem('facsemdata', JSON.stringify(facsemdata));
    }, [facsemdata]);

    return (
        <FacultyDataContext.Provider value={{ facsemdata, setFacSemData }}>
            {props.children}
        </FacultyDataContext.Provider>
    );
};

