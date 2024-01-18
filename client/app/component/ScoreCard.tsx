import { Card, CardHeader, CardBody } from '@nextui-org/react';
import React from 'react';
import ScoreCardBody from './ScoreCardBody';
import ScoreCardHeader from './ScoreCardHeader';

const ScoreCard = () => {
  return (
    <div>
      <Card className="py-4">
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
          <ScoreCardHeader />
        </CardHeader>
        <CardBody className="overflow-visible py-2">
          <ScoreCardBody />
        </CardBody>
      </Card>
    </div>
  );
};

export default ScoreCard;
