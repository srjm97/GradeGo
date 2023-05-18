import React, { createContext, useState } from 'react';

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
    const [hellodata, setHelloData] = useState({
        status: '',
        user: '',
        details: {},
        course: {}
    });

    return (
        <DataContext.Provider value={{ hellodata, setHelloData }}>
            {children}
        </DataContext.Provider>
    );
};

