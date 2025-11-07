import React from 'react';

export interface ButtonProps {
  /**
   * Button text content
   */
  children: React.ReactNode;
  /**
   * Click handler
   */
  onClick?: () => void;
  /**
   * Button variant
   */
  variant?: 'primary' | 'secondary' | 'danger';
  /**
   * Button size
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Disabled state
   */
  disabled?: boolean;
}

const getButtonStyles = (
  variant: ButtonProps['variant'] = 'primary',
  size: ButtonProps['size'] = 'medium',
  disabled: boolean = false
): React.CSSProperties => {
  const baseStyles: React.CSSProperties = {
    border: 'none',
    borderRadius: '4px',
    cursor: disabled ? 'not-allowed' : 'pointer',
    fontFamily: 'system-ui, -apple-system, sans-serif',
    fontWeight: 500,
    transition: 'all 0.2s ease-in-out',
    opacity: disabled ? 0.6 : 1,
  };

  const variantStyles: Record<string, React.CSSProperties> = {
    primary: {
      backgroundColor: '#007bff',
      color: '#ffffff',
    },
    secondary: {
      backgroundColor: '#6c757d',
      color: '#ffffff',
    },
    danger: {
      backgroundColor: '#dc3545',
      color: '#ffffff',
    },
  };

  const sizeStyles: Record<string, React.CSSProperties> = {
    small: {
      padding: '6px 12px',
      fontSize: '14px',
    },
    medium: {
      padding: '10px 20px',
      fontSize: '16px',
    },
    large: {
      padding: '14px 28px',
      fontSize: '18px',
    },
  };

  return {
    ...baseStyles,
    ...variantStyles[variant],
    ...sizeStyles[size],
  };
};

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = 'primary',
  size = 'medium',
  disabled = false,
}) => {
  const [isHovered, setIsHovered] = React.useState(false);

  const buttonStyles = getButtonStyles(variant, size, disabled);
  const hoverStyles: React.CSSProperties = isHovered && !disabled
    ? { transform: 'scale(1.02)', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }
    : {};

  return (
    <button
      style={{ ...buttonStyles, ...hoverStyles }}
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
    </button>
  );
};
