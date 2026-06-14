import { mockInventory, InventoryItem } from '../mockData';

function InventoryPage() {
  return (
    <div style={{ animation: 'fadeIn 0.3s ease' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 20 }}>
        <h1 style={{ margin: 0, fontSize: 24, fontWeight: 600 }}>库存管理</h1>
        <button style={{
          padding: '8px 20px', background: '#6366f1', color: '#fff', border: 'none',
          borderRadius: 8, cursor: 'pointer', fontWeight: 500, fontSize: 14,
        }}>+ 添加商品</button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16 }}>
        {mockInventory.map((item, i) => (
          <div key={item.id} style={{
            background: '#fff', borderRadius: 12, padding: 20, border: '1px solid #e5e7eb',
            animation: 'fadeIn 0.3s ease'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 12 }}>
              <span style={{ fontWeight: 600 }}>{item.name}</span>
              <span style={{ fontSize: 13, color: '#6b7280' }}>{item.id}</span>
            </div>
            <div style={{ fontSize: 13, color: '#6b7280', marginBottom: 8 }}>{item.category}</div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: 18, fontWeight: 700, color: '#6366f1' }}>¥{item.price}</span>
              <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                <span style={{ fontSize: 13, color: '#6b7280' }}>库存: </span>
                <span style={{ fontSize: 14, fontWeight: 600, color: item.stock < item.minStock ? '#ef4444' : '#10b981' }}>
                  {item.stock}
                </span>
              </div>
            </div>
            {item.stock < item.minStock && (
              <div style={{ marginTop: 8, padding: '4px 8px', background: '#fef2f2', borderRadius: 6, fontSize: 12, color: '#ef4444' }}>
                ⚠️ 库存不足
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default InventoryPage;

