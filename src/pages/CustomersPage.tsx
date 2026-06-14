import { mockCustomers, Customer } from '../mockData';

function CustomersPage() {
  return (
    <div style={{ animation: 'fadeIn 0.3s ease' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 20 }}>
        <h1 style={{ margin: 0, fontSize: 24, fontWeight: 600 }}>客户管理</h1>
        <button style={{
          padding: '8px 20px', background: '#6366f1', color: '#fff', border: 'none',
          borderRadius: 8, cursor: 'pointer', fontWeight: 500, fontSize: 14,
        }}>+ 添加客户</button>
      </div>

      <div style={{ background: '#fff', borderRadius: 12, border: '1px solid #e5e7eb', overflow: 'hidden' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid #e5e7eb' }}>
              {['客户', '公司', '电话', '邮箱', '订单数'].map(h => (
                <th key={h} style={{ padding: '12px 16px', textAlign: 'left', fontSize: 13, fontWeight: 600, color: '#6b7280' }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {mockCustomers.map((customer, i) => (
              <tr key={customer.id} style={{ borderBottom: '1px solid #f3f4f6', animation: adeIn 0.3s ease s both }}>
                <td style={{ padding: '12px 16px', fontWeight: 500 }}>{customer.name}</td>
                <td style={{ padding: '12px 16px' }}>{customer.company}</td>
                <td style={{ padding: '12px 16px' }}>{customer.phone}</td>
                <td style={{ padding: '12px 16px', color: '#6b7280' }}>{customer.email}</td>
                <td style={{ padding: '12px 16px' }}>
                  <span style={{
                    padding: '4px 10px', borderRadius: 6, fontSize: 13, fontWeight: 600,
                    background: '#eff6ff', color: '#3b82f6',
                  }}>{customer.orders}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CustomersPage;

