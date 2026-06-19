import { useNavigate, useLocation } from 'react-router-dom';
import { Icons } from './Icons';

interface NavItem {
  label: string;
  path: string;
  icon: React.ComponentType;
}

const NAV_ITEMS: NavItem[] = [
  { label: '仪表盘', path: '/', icon: Icons.Dashboard },
  { label: '订单管理', path: '/order', icon: Icons.Orders },
  { label: '库存管理', path: '/inventory', icon: Icons.Inventory },
  { label: '客户管理', path: '/customers', icon: Icons.Customers },
  { label: '采购管理', path: '/purchasing', icon: Icons.Purchasing },
  { label: '财务管理', path: '/finance', icon: Icons.Finance },
  { label: '人力资源', path: '/hr', icon: Icons.HR },
  { label: '系统设置', path: '/settings', icon: Icons.Settings },
];

function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path: string): boolean =>
    location.pathname === path || location.pathname.startsWith(path + '/');

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <div className="erp-icon">ERP</div>
        <div className="erp-title">
          <span>ERP 管理系统</span>
          <span className="erp-sub">Enterprise Pro</span>
        </div>
      </div>
      <nav className="sidebar-nav">
        {NAV_ITEMS.map((item) => {
          const current = isActive(item.path);
          const Icon = item.icon;
          return (
            <button
              key={item.path}
              className={current ? 'sidebar-nav-item active' : 'sidebar-nav-item'}
              onClick={() => navigate(item.path)}
            >
              <Icon />
              {item.label}
            </button>
          );
        })}
      </nav>
    </aside>
  );
}

export default Sidebar;
