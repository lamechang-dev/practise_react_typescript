import { FC } from 'react';
import { Button, Card, Icon, Statistic } from 'semantic-ui-react';
import useTimer from "hooks/use-timer";
import './Timer.css';

type TimerProps = { limit: number };

const Timer: FC<TimerProps> = ({ limit }) => {
  const [timeLeft, isPrime, reset] = useTimer(limit);

  return (
    <Card>
      <Statistic className="number-board">
        <Statistic.Label>time</Statistic.Label>
        <Statistic.Value
          className={isPrime ? 'prime-number' : undefined}
        >
          {timeLeft}
        </Statistic.Value>
      </Statistic>
      <Card.Content>
        <Button color="red" fluid onClick={reset}>
          <Icon name="redo" />
          Reset
        </Button>
      </Card.Content>
    </Card>
  );
};

export default Timer;
