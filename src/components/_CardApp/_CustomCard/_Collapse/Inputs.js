import React from 'react';
import '../../../../index.scss';

const Inputs = (props) => {
  const handleChange = (ev) => {
    ev.preventDefault();
    const target = ev.target;
    const value = target.value;
    const id = target.id;
    props.handleChangeInput({
      key: id,
      value: value,
    });
  };
  return (
    <div>
      <label htmlFor='name'> {props.label}</label>
      <span className='asterisk'>{props.asterisk}</span>
      <input
        //className='js-input js-name'
        palette={props.palette}
        placeholder={props.placeholder}
        id={props.id}
        type={props.type}
        name={props.name}
        onChange={handleChange}
        checked={props.checked}
        required
      />
    </div>
  );
};

export default Inputs;