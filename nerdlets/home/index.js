import React from "react";
import { BarChart, AreaChart, PieChart, LineChart, RadarChart } from "nr1";

// https://docs.newrelic.com/docs/new-relic-programmable-platform-introduction

export default class Nerdlet1Nerdlet extends React.Component {
  render() {
    return (
      <>
        <h1>My Custom Visualization</h1>
        <BarChart
          accountIds={[4267240]}
          query="SELECT average(host.cpuPercent) AS 'CPU used %' FROM Metric WHERE `entityGuid` = 'NDI2NzI0MHxJTkZSQXxOQXwzNjIwMDM1NDkxMjI1NTQ3NTIw' TIMESERIES auto"
          fullWidth
        />
        <BarChart
          accountIds={[4267240]}
          query="SELECT average(host.net.transmitBytesPerSecond) AS 'Transmit bytes per second', average(host.net.receiveBytesPerSecond) AS 'Receive bytes per second' FROM Metric WHERE `entityGuid` = 'NDI2NzI0MHxJTkZSQXxOQXwzNjIwMDM1NDkxMjI1NTQ3NTIw'"
          fullWidth
        />
        <BarChart
          accountIds={[4267240]}
          query="SELECT average(host.cpuPercent) AS 'CPU used %' FROM Metric WHERE `entityGuid` = 'NDI2NzI0MHxJTkZSQXxOQXwzNjIwMDM1NDkxMjI1NTQ3NTIw'"
          fullWidth
          />
        <AreaChart
          accountIds={[4267240]}
          query="SELECT average(host.net.transmitBytesPerSecond) AS 'Transmit bytes per second', average(host.net.receiveBytesPerSecond) AS 'Receive bytes per second' FROM Metric WHERE `entityGuid` = 'NDI2NzI0MHxJTkZSQXxOQXwzNjIwMDM1NDkxMjI1NTQ3NTIw' TIMESERIES auto"
          fullWidth
        />
        <LineChart
          accountIds={[4267240]}
          query="SELECT average(host.net.transmitBytesPerSecond) AS 'Transmit bytes per second', average(host.net.receiveBytesPerSecond) AS 'Receive bytes per second' FROM Metric WHERE `entityGuid` = 'NDI2NzI0MHxJTkZSQXxOQXwzNjIwMDM1NDkxMjI1NTQ3NTIw' TIMESERIES auto"
          fullWidth
        />
      </>
    );
  }
}


