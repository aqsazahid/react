import React from "react";

const Filter = (props) => {
    return (
        <div className='mb-2'>
            find countries <input value={props.value} onChange={props.handleChange} />
        </div>
    );
};

export default Filter;
