import React from 'react';

export default function TextfieldInput({ header, value, onChange, name }) {
    return (
        <>
            <h2>{header}</h2>
            <input
                type="text"
                id={header}
                name={name}
                value={value}
                onChange={onChange}
            />
        </>
    );
}