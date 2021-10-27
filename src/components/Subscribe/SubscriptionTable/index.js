import React from 'react';
import { Table } from 'react-bootstrap';

const SubscriptionTable = () => {
    const text = "..."
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                <th>0</th>
                <th>0</th>
                <th>0</th>
                <th>0</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td> </td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                </tr>
                <tr>
                <td colSpan="2">0</td>
                <td>0</td>
                <td>0</td>
                </tr>
                <tr>
                <td>0</td>
                <td colSpan="2">0</td>
                <td>0</td>
                </tr>
            </tbody>
        </Table>
    );
};

export default SubscriptionTable;