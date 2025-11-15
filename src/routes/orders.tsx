
import { EmptyState } from "../components/molecules/empty-state/empty-state";


export const Orders = () => {
  const orders = []; 

  return (
    <div>
      {orders.length === 0 ? (
        <EmptyState
          title="No orders yet"
          description="There’s currently no orders placed"
          iconSrc="/empty-state-orders.svg"
        />
      ) : (
    
        <h1>Orders</h1>
      )}
    </div>
  );
};
