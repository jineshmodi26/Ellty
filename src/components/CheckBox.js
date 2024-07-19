import React from 'react'

const CheckBox = (props) => {
  return (
    <div className={props.pageName === "All pages" ? 'checkbox-container' : 'checkbox-container-single'}>
      <p>{props.pageName}</p>
      <label className="custom-checkbox">
        <input
          type="checkbox"
          checked={props.checked}
          onChange={props.onChange}
        />
        <span className="checkmark"></span>
      </label>
    </div>
  )
}

export default CheckBox