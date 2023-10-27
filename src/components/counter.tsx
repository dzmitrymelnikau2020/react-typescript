import { useState, useCallback, useEffect, useReducer, Dispatch } from "react";

const reducer = (count: number, newValue: number) => newValue;

type ReducerState = ReturnType<typeof reducer>


const Counter = () => {
  const [count, setCount] = useReducer(reducer , 0);
  //const [count, setCount] = useState<number>(0);
  const [draftCount, setDraftCount] = useState(count);

  useEffect(() => {
    setDraftCount(count)
  }, [count])

  const decrement = useCallback(() => setCount(count -1),[count])
  const increment = useCallback(() => setCount(count +1), [count])
  const reset = useCallback(() => setCount(0), [])
  const handleSubmit = useCallback((e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setCount(draftCount)
  }, [draftCount, setCount])

    return (
      <section className="flex flex-col items-center w-2/3 gap-8 p-8 bg-white border-4 shadow-lg border-primary-500">
        <h1>Days Since the Last Accident</h1>
        <p className="text-6xl">{count}</p>
        <div className="flex gap-2">
          <button onClick={decrement}>➖ Decrement</button>
          <button onClick={reset}>🔁 Reset</button>
          <button onClick={increment}>➕ Increment</button>
        </div>
        <div>
          <form onSubmit={(e: React.FormEvent<HTMLFormElement>) => handleSubmit(e)}>
            <input
             type="number"
             value={draftCount}
             onChange={(e) => setDraftCount(e.target.valueAsNumber)}
            />
            <button type="submit">Update Counter</button>
          </form>
        </div>
      </section>
    );
  };
  
  export default Counter;