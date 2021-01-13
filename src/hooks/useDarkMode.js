import React, { useState } from 'react';
import useLocalStorage from './useLocalStorage';


const useDarkMode = () => {
    const [values, setValues] = useLocalStorage('mode');
   
    return [values, setValues];
  };


  export default useDarkMode;