import React from 'react';

const ThemeToggle = ({ theme, toggleTheme }) => {
  return (
    <button
      onClick={toggleTheme}
      className="theme-toggle position-relative d-flex align-items-center justify-content-center rounded-pill border-0 p-2"
      style={{
        width: '60px',
        height: '25px',
        cursor: 'pointer',
        background: theme === 'light' ? '#1e293b' : '#f8fafc',
        transition: 'all 0.3s ease'
      }}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      <div 
        className="d-flex align-items-center justify-content-center rounded-circle"
        style={{
          width: '19px',
          height: '19px',
          backgroundColor: theme === 'light' ? '#fff' : '#0f172a',
          position: 'absolute',
          left: theme === 'light' ? '4px' : '32px',
          transition: 'left 0.3s ease'
        }}
      >
        {theme === 'light' ? (
          <i className="bi bi-sun-fill text-warning" style={{ fontSize: '12px' }}></i>
        ) : (
          <i className="bi bi-moon-fill text-primary" style={{ fontSize: '12px' }}></i>
        )}
      </div>
    </button>
  );
};

export default ThemeToggle;