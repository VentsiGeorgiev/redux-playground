import "./App.css";
import { useAppDispatch, useAppSelector } from "./features/hooks";
import {
  increment,
  decrement,
  reset,
  amountAdded,
} from "./features/counter-slice";

function App() {
  const dispatch = useAppDispatch();
  const count = useAppSelector((state) => state.counter.value);

  return (
    <div className="App">
      <h1>Redux toolkit</h1>
      <p>{count}</p>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
      <button onClick={() => dispatch(amountAdded(5))}>Add 5</button>
    </div>
  );
}

export default App;
