import React from 'react';
import TestClientComponent from './TestClientComponent';
import prismadb from '@/lib/prismadb';

interface TestRoutePageProps {
 
}



const TestRoutePage: React.FC<TestRoutePageProps> = async ({}) => {


const products = await prismadb.product.findMany(
  {
    where: {
      storeId: "319e42e8-2651-480f-85ff-3ed22b05ab09"
    },
    select: {
      name: true,
      id: true
    }
  }
)

  return (
    <div>
      hello world test route
      <TestClientComponent products={products}/>
    </div>
  );
}

export default TestRoutePage;