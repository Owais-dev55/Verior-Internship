import { useState } from 'react';
import './Cart.css';

export interface Product {
  id: number;
  name: string;
  price: number;
}

export interface CartItem extends Product {
  qty: number;
}


const products: Product[] = [
  { id: 1, name: 'React T-Shirt', price: 20 },
  { id: 2, name: 'Node Mug',      price: 12 },
  { id: 3, name: 'JS Sticker',    price: 2  },
];

function ProductList({ onAdd }: { onAdd: (p: Product) => void }) {
  return (
    <>
      <h2>Products</h2>
      {products.map((p) => (
        <div key={p.id} className="card">
          <span>{p.name}</span>
          <span>${p.price}</span>
          <button onClick={() => onAdd(p)}>Add to Cart</button>
        </div>
      ))}
    </>
  );
}

interface CartProps {
  items: CartItem[];
  onChangeQty: (id: number, qty: number) => void;
  onRemove: (id: number) => void;
}

function Cart({ items, onChangeQty, onRemove }: CartProps) {
  const total = items.reduce((s, i) => s + i.price * i.qty, 0);
  return (
    <>
      <h2>Cart ({items.length})</h2>
      {items.length === 0 && <p>No items yet.</p>}

      {items.map((i) => (
        <div key={i.id} className="card">
          <span>{i.name}</span>
          <span>${i.price} × {i.qty}</span>

          <button onClick={() => onChangeQty(i.id, i.qty - 1)} disabled={i.qty === 1}>-</button>
          <button onClick={() => onChangeQty(i.id, i.qty + 1)}>+</button>

          <button data-variant="remove" onClick={() => onRemove(i.id)}>Remove</button>
        </div>
      ))}

      <h3>Total: ${total.toFixed(2)}</h3>
    </>
  );
}

export default function CartApp() {
  const [cart, setCart] = useState<CartItem[]>([]);

  function addToCart(product: Product) {
    setCart((old) => {
      const existing = old.find((i) => i.id === product.id);
      if (existing) {
        return old.map((i) =>
          i.id === product.id ? { ...i, qty: i.qty + 1 } : i
        );
      }
      return [...old, { ...product, qty: 1 }];
    });
  }

  function changeQty(id: number, qty: number) {
    setCart((old) => old.map((i) =>
      i.id === id ? { ...i, qty } : i
    ));
  }

  function removeFromCart(id: number) {
    setCart((old) => old.filter((i) => i.id !== id));
  }

  return (
    <div className="wrapper">
      <h1>Simple Shopping Cart 🛒</h1>
      <ProductList onAdd={addToCart} />
      <hr />
      <Cart items={cart} onChangeQty={changeQty} onRemove={removeFromCart} />
    </div>
  );
}
