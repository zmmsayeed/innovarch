import React from 'react';

// importing stylesheet
import './style.css';

const DropDownButton = React.forwardRef(({ children, onClick }, ref) => (
    <a href="" ref={ref} onClick={e => { e.preventDefault();  onClick(e); }}
        className="filterDropDown font-open-sans"
    >
        {children}

        <span style={{ fontSize: '1.5em' }} >
            <i class="fas fa-filter ml-1"></i>
        </span>
    </a>
));

export default DropDownButton
