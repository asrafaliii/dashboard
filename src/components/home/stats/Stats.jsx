import styled from '@emotion/styled';
import { Box, Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import { stats } from '../../../data/stats';

const Stats = () => {
  const Item = styled(Paper)({
    padding: '5px 10px',
    borderRadius: '12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  });

  return (
    <Grid container spacing={2}>
      {stats.map(({ id, title, amount, isMoney }, i) => (
        <Grid item xs={12} sm={i === stats.length - 1 ? 12 : 6} lg={6} key={id}>
          <Item
            sx={{
              borderStyle: 'solid',
              borderWidth: '1px',
              borderColor: 'divider',
            }}
          >
            <Box sx={{ flex: 1 }}>
              <Typography sx={{ opacity: 0.7 }}>{title}</Typography>
              <Typography variant="h4" sx={{ my: 2 }}>
                {`${isMoney ? '' + amount : amount}`}
              </Typography>
            </Box>
          </Item>
        </Grid>
      ))}
    </Grid>
  );
};

export default Stats;
