import PropTypes from "prop-types";
import { AreaChart, Area, Tooltip, XAxis } from "recharts";

import "./style.css";

export const SplineAreaChart = (props) => {
  return (
    <div className="graphic_vector" style={{ width: 395, height: 354 }}>
      <AreaChart
        width={395}
        height={354}
        data={props.data}
        margin={{ top: 8, right: 0, left: 0, bottom: 8 }}
      >
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop stopColor="#FFA31A" stopOpacity={0.8} />
            <stop offset=".88" stopColor="#FF7F00" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="date" tick={false} axisLine={false} />
        <Tooltip />
        <Area
          type="monotone"
          dataKey={props.dataKey}
          stroke="#FF800B"
          fillOpacity={1}
          fill="url(#colorUv)"
        />
      </AreaChart>
    </div>
  );
};

SplineAreaChart.propTypes = {
  data: PropTypes.array,
  dataKey: PropTypes.string,
};
