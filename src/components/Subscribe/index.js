import React from 'react';
import { Button } from 'react-bootstrap';

import Banner from '../Banner';
import Footer from '../Footer';
import SubscriptionTable from './SubscriptionTable';

import '../styles.css';

const Subscribe = () => {
    return (
        <div>
            <Banner heading={"Subscription"} text={<><SubscriptionTable /><Button href="/warning">Warning</Button></>} type={3} />
            <Footer />
        </div>
    );
};

export default Subscribe;