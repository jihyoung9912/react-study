import { useQuery } from '@tanstack/react-query';
import { fetchCoinHistory } from './api';
import ApexChart from 'react-apexcharts';
import { Helmet } from 'react-helmet-async';

interface IHistorical {
  time_open: number;
  time_close: number;
  open: string;
  high: string;
  low: string;
  close: number;
  volume: string;
  market_cap: number;
}

interface ChartProps {
  coinId: string;
}

const Chart = ({ coinId }: ChartProps) => {
  const { isLoading, data } = useQuery<IHistorical[]>(['ohlcy', coinId], () =>
    fetchCoinHistory(coinId),
  );
  return (
    <div>
      <Helmet>
        <title>Chart</title>
      </Helmet>
      {isLoading ? (
        'Loading Chart...'
      ) : (
        <ApexChart
          type="line"
          series={[
            {
              name: coinId,
              data: data?.map((price) => price.close) ?? [],
            },
          ]}
          options={{
            theme: { mode: 'dark' },
            chart: {
              height: 300,
              width: 500,
              toolbar: {
                show: false,
              },
              background: 'transparent',
            },
            grid: {
              show: false,
            },
            stroke: {
              curve: 'smooth',
              width: 5,
            },
            yaxis: {
              show: false,
            },
            xaxis: {
              labels: {
                show: false,
              },
              axisTicks: {
                show: false,
              },
              axisBorder: {
                show: false,
              },
              categories: data?.map((price) => price.time_close) ?? [],
            },
            fill: {
              type: 'gradient',
              gradient: { gradientToColors: ['#0be881'] },
            },
            colors: ['#0fbcf9'],
            tooltip: {
              y: {
                formatter: (value) => `$${value.toFixed(2)}`,
              },
            },
          }}
        />
      )}
    </div>
  );
};

export default Chart;
