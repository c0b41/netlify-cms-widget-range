import React from 'react'

export default (props) => {
  const {
    forID,
    value,
    onChange,
    classNameWrapper,
    setActiveStyle,
    setInactiveStyle,
    field,
  } = props

  return (
    <div
      id={forID}
      className={classNameWrapper}
      onFocus={setActiveStyle}
      onBlur={setInactiveStyle}
    >
      <input
        type="range"
        value={value || ''}
        onChange={(e) => onChange(e.target.value)}
        style={{ width: field.get('width') || 'auto' }}
        max={field.get('max') || null}
        min={field.get('min') || null}
        step={field.get('step') || null}
      />
    </div>
  )
}
