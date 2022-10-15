import React from 'react';
import {
  ResponsiveContainer,
  LineChart,
  CartesianGrid,
  Line,
  YAxis,
  XAxis,
  Tooltip,
  Legend,
} from 'recharts';
import styles from 'styles/modules/price-graph.module.scss';

const PriceTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return <div className={styles['price-tooltip']}>$ {payload[0].value}</div>;
  }
};

const PriceGraph = (props) => {
  return (
    <>
      <h2>Price Stats for coinID : {props.coinId}</h2>
      <div className={styles['price-graph-wrapper']}>
        <ResponsiveContainer width="100%" height={600}>
          <LineChart data={props.data}>
            <CartesianGrid strokeDasharray="5 5" />
            <XAxis dataKey="datetime" />
            <YAxis dataKey="price" />
            <Tooltip content={<PriceTooltip />} />
            <Legend />
            <Line
              type="monotone"
              dataKey="price"
              stroke="#77e561"
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </>
  );
};

export { PriceGraph };
