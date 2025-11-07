import React from 'react';

export interface ModalProps {
  /**
   * Controls modal visibility
   */
  isOpen: boolean;
  /**
   * Close handler
   */
  onClose: () => void;
  /**
   * Modal title
   */
  title?: string;
  /**
   * Modal content
   */
  children: React.ReactNode;
  /**
   * Modal size
   */
  size?: 'small' | 'medium' | 'large';
}

const overlayStyles: React.CSSProperties = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 1000,
};

const getModalStyles = (size: ModalProps['size'] = 'medium'): React.CSSProperties => {
  const sizeMap = {
    small: '400px',
    medium: '600px',
    large: '800px',
  };

  return {
    backgroundColor: '#ffffff',
    borderRadius: '8px',
    boxShadow: '0 10px 40px rgba(0, 0, 0, 0.3)',
    maxWidth: sizeMap[size],
    width: '90%',
    maxHeight: '90vh',
    overflow: 'auto',
    position: 'relative',
  };
};

const headerStyles: React.CSSProperties = {
  padding: '20px 24px',
  borderBottom: '1px solid #e9ecef',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
};

const titleStyles: React.CSSProperties = {
  margin: 0,
  fontSize: '20px',
  fontWeight: 600,
  fontFamily: 'system-ui, -apple-system, sans-serif',
  color: '#212529',
};

const closeButtonStyles: React.CSSProperties = {
  background: 'none',
  border: 'none',
  fontSize: '24px',
  cursor: 'pointer',
  color: '#6c757d',
  padding: '0',
  width: '32px',
  height: '32px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '4px',
  transition: 'background-color 0.2s ease-in-out',
};

const contentStyles: React.CSSProperties = {
  padding: '24px',
};

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
  size = 'medium',
}) => {
  const [isHoveringClose, setIsHoveringClose] = React.useState(false);

  React.useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const closeButtonHoverStyles: React.CSSProperties = isHoveringClose
    ? { backgroundColor: '#f8f9fa' }
    : {};

  return (
    <div style={overlayStyles} onClick={handleOverlayClick}>
      <div style={getModalStyles(size)}>
        <div style={headerStyles}>
          {title && <h2 style={titleStyles}>{title}</h2>}
          <button
            style={{ ...closeButtonStyles, ...closeButtonHoverStyles }}
            onClick={onClose}
            onMouseEnter={() => setIsHoveringClose(true)}
            onMouseLeave={() => setIsHoveringClose(false)}
            aria-label="Close modal"
          >
            ×
          </button>
        </div>
        <div style={contentStyles}>{children}</div>
      </div>
    </div>
  );
};
