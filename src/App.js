import React from 'react';
import { Route, useHistory } from 'react-router-dom';


export default function App() {
    const history = useHistory();
    history.push('sproutish/browse')

    return null;
}