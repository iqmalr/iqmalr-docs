// Example from https://beta.reactjs.org/learn

import { useState } from 'react';
import styles from './counters.module.css';

function MyButton() {
  const [count, setCount] = useState(0)

  const handleClick = (action) => {
    action === 'increment' ? setCount(count + 1) : count > 0 && setCount(count - 1);
  }

  return (
    <div>
      <button onClick={() => handleClick('increment')} className={styles.counter}>
         +
      </button>
      <button onClick={() => handleClick('decrement')} className={styles.counter}>
         -
      </button>
      <div className={styles.count}>{count}</div>
    </div>
  )
}

export default function MyApp() {
  return <MyButton />
}