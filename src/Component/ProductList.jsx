import { useEffect, useState } from 'react';
import { getAllProducts, deleteProduct } from '../api/productApi';

function ProductList({ onEdit }) {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchProducts = async () => {
        try {
            const response = await getAllProducts();
            setProducts(response.data);
        } catch (err) {
            setError('Could not load products. Is Spring Boot running?');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    const handleDelete = async (id) => {
        await deleteProduct(id);
        fetchProducts();
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p style={{color:'red'}}>{error}</p>;

    return (
        <div>
            <h2>Products</h2>
            {products.length === 0 && <p>No products yet. Add one!</p>}
            {products.map(p => (
                <div key={p.id} style={{
                    border:'1px solid #ddd', padding:'12px',
                    marginBottom:'8px', borderRadius:'8px'
                }}>
                    <strong>{p.name}</strong> — ${p.price}
                    <p>{p.description}</p>
                    <button onClick={() => onEdit(p)}>Edit</button>
                    <button onClick={() => handleDelete(p.id)}
                            style={{marginLeft:'8px',color:'red'}}>
                        Delete
                    </button>
                </div>
            ))}
        </div>
    );
}

export default ProductList;