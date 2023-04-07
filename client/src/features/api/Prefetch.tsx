import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { store } from '../../app';
import { termsApiSlice } from '../terms';

const PrefetchDataLayout = () => {
  useEffect(() => {
    console.log('Prefetch subscribing');
    const terms = store.dispatch(termsApiSlice.endpoints.getTerms.initiate());

    return () => {
      console.log('Prefetch unsubscribing');
      terms.unsubscribe();
    };
  }, []);

  return <Outlet />;
};

export default PrefetchDataLayout;
