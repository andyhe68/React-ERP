import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from './components/Layout';
import DashboardPage from './pages/dashboard/DashboardPage';
import OrderPage from './pages/order/OrderPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/order" element={<OrderPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
