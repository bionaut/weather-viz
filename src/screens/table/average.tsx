import * as React from 'react'
import { Line, LineChart, ResponsiveContainer } from 'recharts'

type AverageProps = {
  data: number[]
}

export const Average: React.FC<AverageProps> = ({ data }) => {
  const chartData = data.map(value => ({ value }))

  // fixme issue with full width (99%) in recharts
  // https://github.com/recharts/recharts/issues/172
  return (
    <ResponsiveContainer width={'99%'}>
      <LineChart data={chartData} height={80}>
        <Line
          type="monotone"
          dataKey="value"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </ResponsiveContainer>
  )
}
