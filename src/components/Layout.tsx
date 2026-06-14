import { Outlet } from 'react-router-dom';

import './Layout.css';
import Sidebar from './Sidebar';

function Layout() {
  return (
    <div className="layout">
      <Sidebar />
      <div className="layout-main">
        <main className="layout-content">
          <Outlet />
        </main>
        <footer className="layout-footer">
          <p>&copy; 2026 My App</p>
        </footer>
      </div>
    </div>
  );
}

export default Layout;
