import { r as reactExports } from '../../../_virtual/index.js';
import './Button.css.js';

const Button = ({ variant, children }) => {
    return reactExports.createElement("button", { className: `btn btn-default btn-${variant}` }, children);
};

export { Button as default };
