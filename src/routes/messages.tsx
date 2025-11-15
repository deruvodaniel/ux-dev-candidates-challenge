
import { EmptyState } from "../components/molecules/empty-state/empty-state";


export const Messages = () => {
  const Messages = []; 

  return (
    <div>
      {Messages.length === 0 ? (
        <EmptyState
          title="No Messages yet"
          description="There’s currently no Messages placed"
          iconSrc="/empty-state-msg.svg"
        />
      ) : (
    
        <h1>Orders</h1>
      )}
    </div>
  );
};

