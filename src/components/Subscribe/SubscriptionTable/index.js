import React from 'react';
import { Button, Table } from 'react-bootstrap';

import tick_icon from '../../../assets/tick.png';
import cross_icon from '../../../assets/cross.png';

const SubscriptionTable = () => {
    const tick = <img className="icon-subscribe" src={tick_icon} />;
    const cross = <img className="icon-subscribe" src={cross_icon} />;

    return (
        <Table striped bordered hover variant="dark">
            <thead>
                <tr>
                <th>Plans:</th>
                <th>Basic</th>
                <th>Standard</th>
                <th>Premium</th>
                </tr>
            </thead>
            <tbody className="table-subscribe-body">
                <tr>
                    <td>Unlimited Placards</td>
                    <td>{tick}</td>
                    <td>{tick}</td>
                    <td>{tick}</td>
                </tr>
                <tr>
                    <td>Customizable Environments</td>
                    <td>{cross}</td>
                    <td>{tick}</td>
                    <td>{tick}</td>
                </tr>
                <tr>
                    <td>Unlimited Timetable Optimizations</td>
                    <td>{cross}</td>
                    <td>{tick}</td>
                    <td>{tick}</td>
                </tr>
                <tr>
                    <td>Personalized Study Plan</td>
                    <td>{cross}</td>
                    <td>{cross}</td>
                    <td>{tick}</td>
                </tr>
                <tr>
                    <td>Private Tutoring</td>
                    <td>{cross}</td>
                    <td>{cross}</td>
                    <td>{tick}</td>
                </tr>
            </tbody>
            <tfoot>
                <tr>
                    <td>Cost: </td>
                    <td>$20 / month</td>
                    <td>$50 / month</td>
                    <td>$100 / month</td>
                </tr>
                <tr>
                    <td>Sign me up for: </td>
                    <td><Button className="btn-subscribe basic" href="/warning">Basic</Button></td>
                    <td><Button className="btn-subscribe standard" href="/warning">Standard</Button></td>
                    <td><Button className="btn-subscribe premium" href="/warning">Premium</Button></td>
                </tr>
            </tfoot>
        </Table>
    );
};

export default SubscriptionTable;