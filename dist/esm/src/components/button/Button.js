import { __rest } from '../../../_virtual/_tslib.js';
import * as React from 'react';
import './Button.css.js';

const Button = (_a) => {
    var { variant, children } = _a, props = __rest(_a, ["variant", "children"]);
    return (React.createElement("button", Object.assign({ className: `btn btn-default btn-${variant}` }, props), children));
};

export { Button as default };
