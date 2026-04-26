import { useState, useEffect } from 'react';
import { createProduct, updateProduct } from '../api/productApi';

function ProductForm({ editProduct, onSuccess }) {
    const [form, setForm] = useState({
        name: '', description: '', price: ''
    });
    const [errors, setErrors] = useState([]);

    useEffect(() => {
        if (editProduct) {
            setForm(editProduct);
        } else {
            setForm({ name: '', description: '', price: '' });
        }
    }, [editProduct]);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrors([]);
        try {
            if (editProduct) {
                await updateProduct(editProduct.id, form);
            } else {
                await createProduct(form);
            }
            setForm({ name: '', description: '', price: '' });
            onSuccess();
        } catch (err) {
            if (err.response?.data?.errors) {
                setErrors(err.response.data.errors);
            } else {
                setErrors(['Something went wrong. Try again.']);
            }
        }
    };

    return (
        <form onSubmit={handleSubmit} style={{marginBottom:'24px'}}>
            <h2>{editProduct ? 'Edit Product' : 'Add Product'}</h2>
            {errors.map((e, i) => (
                <p key={i} style={{color:'red',fontSize:'13px'}}>{e}</p>
            ))}
            <div>
                <input name="name" placeholder="Name"
                       value={form.name} onChange={handleChange} />
            </div>
            <div>
                <input name="description" placeholder="Description"
                       value={form.description} onChange={handleChange} />
            </div>
            <div>
                <input name="price" placeholder="Price" type="number"
                       value={form.price} onChange={handleChange} />
            </div>
            <button type="submit">
                {editProduct ? 'Update' : 'Create'}
            </button>
        </form>
    );
}

export default ProductForm;