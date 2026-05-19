import "./App.css";
import { useAppDispatch, useAppSelector } from "./features/hooks";
import {
  increment,
  decrement,
  reset,
  amountAdded,
} from "./features/counter-slice";
import { useGetPostsQuery } from "./posts/posts-api-slice";

function App() {
  const dispatch = useAppDispatch();
  const count = useAppSelector((state) => state.counter.value);
  const { data: posts = [], isLoading, isError } = useGetPostsQuery(undefined);

  return (
    <div className="App">
      <h1>Redux toolkit</h1>
      <p>{count}</p>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
      <button onClick={() => dispatch(amountAdded(5))}>Add 5</button>
      <h2>Posts</h2>
      {isLoading && <p>Loading posts...</p>}
      {isError && <p>Unable to load posts.</p>}
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
