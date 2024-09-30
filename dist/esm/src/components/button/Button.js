import * as React from 'react';
import './Button.css.js';

const Button = ({ variant, children }) => {
    return React.createElement("button", { className: `btn btn-default btn-${variant}` }, children);
};

export { Button as default };
