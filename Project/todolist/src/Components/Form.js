import React from 'react';
import './CSS/Form.css';

const Form = ({value, onCreate, onChange, onKeyPress}) => {
    return(
        <div className="form">
            <input placeholder="오늘 할 일을 입력해주세요." value={value} onChange={onChange} onKeyPress={onKeyPress} />
            <div className="create-button" onClick={onCreate}>
            추가
            </div>
        </div>
    );
}

export default Form;