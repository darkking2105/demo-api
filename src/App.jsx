import { useState, useRef } from 'react';
import ProductList from './Component/ProductList';
import ProductForm from './Component/ProductForm';

function App() {
  const [editProduct, setEditProduct] = useState(null);
  const [refresh, setRefresh] = useState(0);

  const handleEdit = (product) => {
    setEditProduct(product);
  };

  const handleSuccess = () => {
    setEditProduct(null);
    setRefresh(r => r + 1);
  };

  return (
      <div style={{maxWidth:'700px',margin:'40px auto',padding:'0 20px'}}>
        <h1>Product Manager</h1>
        <hr style={{margin:'16px 0'}}/>
        <ProductForm
            editProduct={editProduct}
            onSuccess={handleSuccess}
        />
        <ProductList
            key={refresh}
            onEdit={handleEdit}
        />
      </div>
  );
}

export default App;