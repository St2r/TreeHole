import React, {useState} from 'react';
import {Button} from '@material-ui/core';

function App(): JSX.Element {
  const [count, setCount] = useState(0);

  return (
    <Button variant="contained" color='primary' onClick={() => setCount(count + 1)}>{count}</Button>
  );
}

export default App;
