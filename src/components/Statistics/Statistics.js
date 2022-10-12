import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Statistics = () => {
    return (
        <div>
            <p>total</p>
            <h3>This is Statistics</h3>

            <LineChart width={500} height={400}></LineChart>
            <Line type="monotone" dataKey="total" stroke="#82ca9d" />
        </div>
    );
};

export default Statistics;