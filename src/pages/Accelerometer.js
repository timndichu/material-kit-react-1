
// @mui

import { Grid, Container, Typography, Card, CardHeader, Box } from '@mui/material';
import React, { useState, useEffect } from 'react';
import moment from 'moment';

// components
import Page from '../components/Page';

// sections
import {
  AppTasks,
 
  Chart,

} from '../sections/@dashboard/app';

// ----------------------------------------------------------------------

export default function Accelerometer() {
  

  const [bids, setBids] = useState(['Waiting for connection...']);
  const [accelerometerValues, setAccelerometerValues] = useState([0]);
  const currentDate1 = new Date();
  const showDate1 = moment(currentDate1).format('HH:mm:ss');
  const [date, setDate] = useState(showDate1.toString());

  useEffect(() => {
    const ws = new WebSocket('wss://nanosat.herokuapp.com');
    const currentDate = new Date();
    const showDate = moment(currentDate).format('HH:mm:ss');
    ws.onmessage = (event) => {
      const json = event.data;
        setDate(showDate.toString())
         let arr = [];
      if(json!=="Hello Server") {
        arr = json.split(',')
      }
     
     if(arr[0]==="A") {
        setAccelerometerValues((prevAcc)=> 
        prevAcc.concat(arr[1],arr[2],arr[3]))
      }
      console.log(arr)
      setBids((prevBids)=> 
        prevBids.concat(<br/>, json))
    };

    return () => ws.close();
  }, []);

  return (
    <Page title="Dashboard">
      <Container maxWidth="xl">
        <Typography variant="h4" sx={{ mb: 5 }}>
          Hi, Welcome back
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={8}>
            <Chart
              title="MPU6050 (Gyroscope + Accelerometer + Temperature) Sensor data"
              subheader="(+10°C) hotter than last year"
              date={date}
              chartData={[
               
                {
                  name: 'Accelerometer',
                  type: 'area',
                  fill: 'gradient',
                  data: accelerometerValues[0],
      
                },
                {
                  name: 'Accelerometer',
                  type: 'area',
                  fill: 'gradient',
                  data: accelerometerValues[1],
      
                },
                {
                  name: 'Accelerometer',
                  type: 'area',
                  fill: 'gradient',
                  data: accelerometerValues[2],
      
                },
               
              ]}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <Card>
              <CardHeader title="Websocket Readings" />

              <Box sx={{ p: 3, pb: 1 }} dir="ltr">
                {bids}
              </Box>
            </Card>
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <AppTasks
              title="Tasks"
              list={[
                { id: '1', label: 'Upload satellite data' },
                { id: '2', label: 'Record temperature readings' },
                { id: '3', label: 'Compare gyro values' },
                { id: '4', label: 'Transmit new commands' },
              ]}
            />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
