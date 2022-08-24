import React from 'react';
import ReactDOM from 'react-dom';
import Functions from './functions-version';
import './assets/css/index.css';

export const Page = () => {
    return (
        <h1>This is a test</h1>
    )
}

ReactDOM.render(
	// <Classes />,
    <Functions />,
	document.getElementById('root')
);