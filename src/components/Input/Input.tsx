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
  /**
   * Input variant
   */
  variant?: 'default' | 'outlined' | 'filled';
}

const getInputStyles = (
  variant: InputProps['variant'] = 'default',
  error: boolean = false,
  disabled: boolean = false,
  isFocused: boolean = false
): React.CSSProperties => {
  const borderColor = error ? '#dc3545' : isFocused ? '#007bff' : '#ced4da';
  
  const baseStyles: React.CSSProperties = {
    width: '100%',
    padding: '10px 12px',
    fontSize: '16px',
    fontFamily: 'system-ui, -apple-system, sans-serif',
    outline: 'none',
    cursor: disabled ? 'not-allowed' : 'text',
    transition: 'border-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
    color: disabled ? '#6c757d' : '#212529',
  };

  const variantStyles: Record<NonNullable<InputProps['variant']>, React.CSSProperties> = {
    default: {
      border: `1px solid ${borderColor}`,
      borderRadius: '4px',
      backgroundColor: disabled ? '#e9ecef' : '#ffffff',
      boxShadow: isFocused ? `0 0 0 3px ${error ? 'rgba(220, 53, 69, 0.25)' : 'rgba(0, 123, 255, 0.25)'}` : 'none',
    },
    outlined: {
      border: `2px solid ${borderColor}`,
      borderRadius: '8px',
      backgroundColor: 'transparent',
      boxShadow: isFocused ? `0 0 0 3px ${error ? 'rgba(220, 53, 69, 0.15)' : 'rgba(0, 123, 255, 0.15)'}` : 'none',
    },
    filled: {
      borderTop: '1px solid transparent',
      borderLeft: '1px solid transparent',
      borderRight: '1px solid transparent',
      borderBottom: `2px solid ${borderColor}`,
      borderRadius: '4px',
      backgroundColor: disabled ? '#e9ecef' : '#f8f9fa',
      boxShadow: 'none',
    },
  };
  
  return {
    ...baseStyles,
    ...variantStyles[variant],
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
  variant = 'default',
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
        style={getInputStyles(variant, error, disabled, isFocused)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      {helperText && <div style={helperTextStyles(error)}>{helperText}</div>}
    </div>
  );
};
