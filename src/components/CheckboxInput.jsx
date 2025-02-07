import React from 'react';

export default function CheckboxInput({ header, lables, onChange, name }) {
    return (
        <>
            <div className="form__group checkbox">
                <h2>{header}</h2>
                <ul>
                    {lables.map((label, index) => (
                        <li key={index}>
                            <input
                                id={label}
                                type="checkbox"
                                name={name}
                                value={label}
                                onChange={onChange}
                            />
                            <label htmlFor={label}>{label}</label>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}