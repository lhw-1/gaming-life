import React from 'react';

import Banner from '../Banner';
import Footer from '../Footer';
import SubscriptionTable from './SubscriptionTable';

import '../styles.css';

const Subscribe = () => {
    const text1 = "Get started with Memit today! Choose one of the plans below.";
    const text2 = <br />;
    return (
        <div>
            <Banner 
                heading={"Subscription"} 
                text1={text1}
                text2={text2}
                text3={<SubscriptionTable />} 
                type={2} />
            <Footer />
        </div>
    );
};

export default Subscribe;