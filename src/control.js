import React from 'react'

export default () => {
  const {
    forID,
    value,
    onChange,
    classNameWrapper,
    setActiveStyle,
    setInactiveStyle,
    field,
    ...others
  } = this.props

  return (
    <div
      id={forID}
      className={classNameWrapper}
      onFocus={setActiveStyle}
      onBlur={setInactiveStyle}
    >
      <input
        type="range"
        {...others}
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
