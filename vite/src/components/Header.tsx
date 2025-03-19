import { Link } from 'react-router';

export const Header = () => {
  return (
    <header style={{
      display: 'flex',
      justifyContent: 'center',
      padding: '1rem',
      gap: '1rem',
      marginBottom: '2rem',
      borderBottom: '1px solid #646cff'
    }}>
      <Link to="/">Home</Link>
      <Link to="/actions-demo">Actions Demo</Link>
      <Link to="/form-status-demo">Form Status Demo</Link>
      <Link to="/optimistic-demo">Optimistic Demo</Link>
      <Link to="/context-demo">Context Demo</Link>
      <Link to="/ref-demo">Ref Demo</Link>
      <Link to="/document-meta-demo">Document Meta Demo</Link>
    </header>
  );
}; 