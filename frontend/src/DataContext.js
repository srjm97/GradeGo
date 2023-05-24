import React, { createContext, useState,useEffect } from 'react';

export const DataContext = createContext();

export const DataProvider = (props) => {
    const [hellodata, setHelloData] = useState(() => {
        const storedData = localStorage.getItem('hellodata');
        return storedData ? JSON.parse(storedData) : {
            status: '',
            user: '',
            details: {},
            course: {},
            accessToken: ""
        };
    });

    useEffect(() => {
        localStorage.setItem('hellodata', JSON.stringify(hellodata));
    }, [hellodata]);

    return (
        <DataContext.Provider value={{ hellodata, setHelloData }}>
            {props.children}
        </DataContext.Provider>
    );
};

