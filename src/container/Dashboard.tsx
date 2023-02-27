import React, { useState } from "react";
import TableComponent from "../components/table";

interface TableProps {

}

const mockData =[
    {
        'date': '27/02/2023',
        'data': [
            {
                'itemId': '101',
                'item': 'adib',
                'value': 200,
                'paid': false,
            },{
                'itemId': '102',
                'item': 'spaylater',
                'value': 150,
                'paid': true,
            },{
                'itemId': '103',
                'item': 'grabpaylater',
                'value': 250,
                'paid': false,
            }]
    },{
        'date': '26/02/2023',
        'data': [
            {
                'itemId': '104',
                'item': 'ayob',
                'value': 220,
                'paid': false,
            }, {
                'itemId': '105',
                'item': 'unifi',
                'value': 180,
                'paid': true,
            }, {
                'itemId': '106',
                'item': 'cuckoo',
                'value': 200,
                'paid': false,
            }]
    }
]

const Dashboard = (props: TableProps): JSX.Element => {
    const { } = props;

    return (
    <div className="flex flex-col justify-center items-center m-auto p-11">
        <TableComponent
            className={"table w-1/2 h-4/6 border-solid"}
                thTitle={['paid', 'debt-item', 'credit']}
            thData={mockData}
        />
    </div>
    );
}

export default Dashboard;