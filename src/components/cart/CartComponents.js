import Link from "next/link";
import { Minus, Plus, ShoppingBag, X } from "lucide-react";
import { IconWrapper } from "@/components/ui/Icon";
import { Divider } from "@/components/ui/Divider";

export function QuantitySelector({ quantity, onIncrease, onDecrease }) {
  return (
    <div className="flex items-center border border-border-soft rounded-radius-sm h-8 w-24">
      <button 
        onClick={onDecrease}
        disabled={quantity <= 1}
        className="w-8 h-full flex items-center justify-center text-muted hover:text-heading disabled:opacity-50 transition-colors outline-none focus-ring"
        aria-label="Decrease quantity"
      >
        <IconWrapper icon={Minus} size="sm" />
      </button>
      <div className="flex-1 text-center text-[11px] font-medium font-mono">
        {quantity}
      </div>
      <button 
        onClick={onIncrease}
        className="w-8 h-full flex items-center justify-center text-muted hover:text-heading transition-colors outline-none focus-ring"
        aria-label="Increase quantity"
      >
        <IconWrapper icon={Plus} size="sm" />
      </button>
    </div>
  );
}

export function CartItem({ item, onUpdate, onRemove }) {
  return (
    <div className="flex items-start space-x-4 py-6 group cart-item-stagger">
      {/* Image */}
      <Link href={item.href || "#"} className="w-20 h-24 md:w-24 md:h-28 shrink-0 bg-neutral-200 rounded-radius-sm overflow-hidden outline-none focus-ring">
        <div className="w-full h-full bg-neutral-200 group-hover:scale-105 transition-transform duration-700 ease-out" />
      </Link>
      
      {/* Content */}
      <div className="flex flex-col flex-grow min-h-[6rem] md:min-h-[7rem] justify-between">
        <div className="flex justify-between items-start">
          <div className="flex flex-col pr-4">
            <span className="text-[10px] font-medium uppercase tracking-widest text-muted mb-1">
              {item.category}
            </span>
            <Link href={item.href || "#"} className="text-body-md text-heading font-medium hover:text-primary transition-colors outline-none focus-ring">
              {item.name}
            </Link>
            {item.variant && (
              <span className="text-[11px] text-neutral-500 mt-1">
                {item.variant}
              </span>
            )}
          </div>
          <button 
            onClick={() => onRemove(item.id)}
            className="text-muted hover:text-heading transition-colors p-1 -m-1 outline-none focus-ring"
            aria-label="Remove item"
          >
            <IconWrapper icon={X} size="sm" />
          </button>
        </div>
        
        <div className="flex items-end justify-between mt-4">
          <QuantitySelector 
            quantity={item.quantity} 
            onIncrease={() => onUpdate(item.id, item.quantity + 1)}
            onDecrease={() => onUpdate(item.id, item.quantity - 1)}
          />
          <span className="text-body-sm font-medium">
            ${(item.price * item.quantity).toLocaleString()}
          </span>
        </div>
      </div>
    </div>
  );
}

export function EmptyCart({ onClose }) {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center px-6 py-12 cart-item-stagger">
      <div className="w-16 h-16 rounded-full bg-neutral-100 flex items-center justify-center mb-6 text-neutral-400">
        <IconWrapper icon={ShoppingBag} size="lg" />
      </div>
      <h3 className="text-display-xs font-heading mb-3">Your cart is empty</h3>
      <p className="text-body-sm text-muted mb-8 max-w-[250px]">
        Discover our latest collections and find the perfect pieces for your home.
      </p>
      <button 
        onClick={onClose}
        className="w-full bg-heading text-background py-4 text-[11px] font-medium tracking-widest uppercase hover:bg-primary transition-colors rounded-radius-sm outline-none focus-ring"
      >
        Continue Shopping
      </button>
    </div>
  );
}

export function OrderSummary({ subtotal, shipping = "Calculated at checkout", tax = "Calculated at checkout" }) {
  return (
    <div className="flex flex-col space-y-4 pt-6 bg-background">
      <div className="flex justify-between items-center text-body-sm text-muted">
        <span>Subtotal</span>
        <span className="text-heading font-medium">${subtotal.toLocaleString()}</span>
      </div>
      <div className="flex justify-between items-center text-body-sm text-muted">
        <span>Shipping</span>
        <span>{shipping}</span>
      </div>
      <div className="flex justify-between items-center text-body-sm text-muted">
        <span>Tax</span>
        <span>{tax}</span>
      </div>
      
      <Divider className="my-2" />
      
      <div className="flex justify-between items-center text-body-lg font-medium text-heading mb-4">
        <span>Total</span>
        <span>${subtotal.toLocaleString()} USD</span>
      </div>
      
      <div className="flex flex-col space-y-3">
        <button className="w-full bg-heading text-background py-4 text-[11px] font-medium tracking-widest uppercase hover:bg-primary transition-colors rounded-radius-sm outline-none focus-ring">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
}

export function RecommendedProducts({ products }) {
  if (!products || products.length === 0) return null;

  return (
    <div className="pt-8 pb-4">
      <h4 className="text-ui-label text-muted tracking-widest uppercase mb-6 cart-item-stagger">Recommended</h4>
      <div className="flex flex-col space-y-4">
        {products.map((prod) => (
          <div key={prod.name} className="flex items-center space-x-4 group cart-item-stagger">
            <div className="w-16 h-20 shrink-0 bg-neutral-200 rounded-radius-sm overflow-hidden relative">
              <div className="w-full h-full bg-neutral-200 group-hover:scale-105 transition-transform duration-700 ease-out" />
            </div>
            <div className="flex flex-col flex-grow justify-center">
              <span className="text-[10px] font-medium uppercase tracking-widest text-muted mb-1">
                {prod.category}
              </span>
              <h4 className="text-body-sm text-heading font-medium group-hover:text-primary transition-colors">
                {prod.name}
              </h4>
              <span className="text-body-sm text-neutral-500 mt-1">
                ${prod.price.toLocaleString()}
              </span>
            </div>
            <button className="text-[10px] font-medium uppercase tracking-widest text-heading hover:text-primary transition-colors p-2 outline-none focus-ring">
              Add
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
