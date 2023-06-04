import styled from '@emotion/styled';
import { Box, Typography } from '@mui/material';
import React from 'react';
import Stats from '../components/home/stats/Stats';

const Dashboard = () => {
  const ComponentWrapper = styled(Box)({
    marginTop: '10px',
    paddingBottom: '10px',
  });

  return (
    <Box sx={{ pt: '80px', pb: '20px' }}>
      <Typography variant="h6" sx={{ marginBottom: '14px' }}>
        Dashboard
      </Typography>
      <ComponentWrapper>
        <Stats />
      </ComponentWrapper>
    </Box>
  );
};

export default Dashboard;
