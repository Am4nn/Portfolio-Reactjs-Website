import React, { createContext } from 'react';
import useScrollSpy from '../hooks/useScrollSpy';
import { sections } from '../utils/config'

export const Context = createContext();

const StateProvider = props => {
    const [currentSection, refreshActiveNavLink] = useScrollSpy(sections, 200);

    return (
        <Context.Provider
            value={{ currentSection, refreshActiveNavLink }}
        >
            {props.children}
        </Context.Provider>
    );
};

export default StateProvider;
