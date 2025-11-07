import React from 'react';

export interface InputProps {
  /**
   * Input value
   */
  value?: string;
  /**
   * Change handler
   */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  /**
   * Input type
   */
  type?: 'text' | 'email' | 'password' | 'number';
  /**
   * Placeholder text
   */
  placeholder?: string;
  /**
   * Disabled state
   */
  disabled?: boolean;
  /**
   * Error state
   */
  error?: boolean;
  /**
   * Label text
   */
  label?: string;
  /**
   * Helper text
   */
  helperText?: string;
}

const getInputStyles = (
  error: boolean = false,
  disabled: boolean = false,
  isFocused: boolean = false
): React.CSSProperties => {
  const borderColor = error ? '#dc3545' : isFocused ? '#007bff' : '#ced4da';
  
  return {
    width: '100%',
    padding: '10px 12px',
    fontSize: '16px',
    fontFamily: 'system-ui, -apple-system, sans-serif',
    border: `1px solid ${borderColor}`,
    borderRadius: '4px',
    outline: 'none',
    backgroundColor: disabled ? '#e9ecef' : '#ffffff',
    color: disabled ? '#6c757d' : '#212529',
    cursor: disabled ? 'not-allowed' : 'text',
    transition: 'border-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
    boxShadow: isFocused ? `0 0 0 3px ${error ? 'rgba(220, 53, 69, 0.25)' : 'rgba(0, 123, 255, 0.25)'}` : 'none',
  };
};

const labelStyles: React.CSSProperties = {
  display: 'block',
  marginBottom: '6px',
  fontSize: '14px',
  fontWeight: 500,
  fontFamily: 'system-ui, -apple-system, sans-serif',
  color: '#212529',
};

const helperTextStyles = (error: boolean): React.CSSProperties => ({
  marginTop: '4px',
  fontSize: '12px',
  fontFamily: 'system-ui, -apple-system, sans-serif',
  color: error ? '#dc3545' : '#6c757d',
});

const containerStyles: React.CSSProperties = {
  marginBottom: '16px',
};

export const Input: React.FC<InputProps> = ({
  value,
  onChange,
  type = 'text',
  placeholder,
  disabled = false,
  error = false,
  label,
  helperText,
}) => {
  const [isFocused, setIsFocused] = React.useState(false);

  return (
    <div style={containerStyles}>
      {label && <label style={labelStyles}>{label}</label>}
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        style={getInputStyles(error, disabled, isFocused)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      {helperText && <div style={helperTextStyles(error)}>{helperText}</div>}
    </div>
  );
};
