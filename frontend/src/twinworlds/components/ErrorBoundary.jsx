import React from 'react';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('TerraTwin Component Error caught by ErrorBoundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          padding: '1.5rem',
          margin: '1rem auto',
          maxWidth: '800px',
          border: '1px solid rgba(217, 122, 122, 0.4)',
          borderRadius: '8px',
          background: 'rgba(217, 122, 122, 0.08)',
          color: '#fff',
          fontFamily: 'var(--font-mono, monospace)',
          fontSize: '0.85rem'
        }}>
          <h4 style={{ color: '#ff8a8a', marginBottom: '0.5rem' }}>Telemetry Offline (Isolated)</h4>
          <p style={{ color: '#aaa', margin: 0 }}>
            {this.state.error?.message || 'Section encountered an issue but was isolated.'}
          </p>
        </div>
      );
    }
    return this.props.children;
  }
}
