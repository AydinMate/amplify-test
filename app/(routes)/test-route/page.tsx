import React from 'react';
import TestClientComponent from './TestClientComponent';

interface TestRoutePageProps {
 
}

const TestRoutePage: React.FC<TestRoutePageProps> = ({}) => {
  return (
    <div>
      hello world test route
      <TestClientComponent />
    </div>
  );
}

export default TestRoutePage;