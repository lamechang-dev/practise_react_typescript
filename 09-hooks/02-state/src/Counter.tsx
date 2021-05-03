import { FC, useState, useEffect, useCallback } from 'react';
import { Button, Card, Statistic } from 'semantic-ui-react';
import './Counter.css';

const Counter: FC = () => {
  const [count, setCount] = useState(0);
  const increment = () => setCount((c) => c + 1);
  const incrementByTwo = useCallback(() => setCount((c) => c + 2), [count]);
  const reset = () => setCount(0);

  useEffect((): void => {
    if (count === 10) {
      console.log('count is now reached to 10 !!!');
    }
  }, [count]);

  useEffect((): void => {
    console.log('increment by two');
  }, [incrementByTwo]);

  return (
    <Card>
      <Statistic className="number-board">
        <Statistic.Label>count</Statistic.Label>
        <Statistic.Value>{count}</Statistic.Value>
      </Statistic>
      <Card.Content>
        <div className="ui three buttons">
          <Button color="red" onClick={reset}>
            Reset
          </Button>
          <Button color="green" onClick={increment}>
            +1
          </Button>
          <Button color="blue" onClick={incrementByTwo}>
            +2
          </Button>
        </div>
      </Card.Content>
    </Card>
  );
};

export default Counter;
