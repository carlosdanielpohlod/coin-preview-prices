import { LineChart } from '@mui/x-charts/LineChart';
import './Charts.css';
import useCoinPrice from '../hooks/useCoinPrice';

const Charts = () => {
  const { isLoading, data, error } = useCoinPrice();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <div>
        <h3 className="chart-title">Bitcoin Price</h3>
      </div>
      <LineChart
        xAxis={[
          {
            id: 'Years',
            dataKey: 'year',
            scaleType: 'linear',
            valueFormatter: (year) => year.toString(),
            data: data.years,
          },
        ]}
        series={[
          {
            data: data.prices,
          },
        ]}
        width={500}
        height={300}
      />
    </div>
  );
};

export default Charts;