import React from 'react';
import { Box, CustomTooltip } from 'components';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import styled from 'styled-components';
import '../../../css/Statistics.css';

const StyledHeader = styled.h4`
  font-family: GTWalsheimPro;
  font-size: 14px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #aeb1b8;
  margin: 0;
  margin-top: ${({ marginTop }) => marginTop}rem;
`;

const StyledBalanceAmount = styled.p`
  font-family: GTWalsheimPro;
  font-size: 36px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: 0.83;
  letter-spacing: normal;
  color: #1c202e;
  margin-top: 1rem;
`;

const TransactionChart = ({ data }) => {
  return (
    <Box>
      <StyledHeader>Net balance</StyledHeader>
      <StyledBalanceAmount>{data[data.length - 1].amount}€</StyledBalanceAmount>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data} style={{ marginLeft: '-1.3rem' }}>
          <XAxis dataKey="dateDay" />
          <YAxis />
          <Tooltip content={<CustomTooltip />} />
          <Line
            type="monotone"
            dataKey="amount"
            stroke="#ff3378"
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </Box>
  );
};

export default TransactionChart;
