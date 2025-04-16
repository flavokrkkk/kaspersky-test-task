import { useEffect, useRef } from "react";
import Highcharts from "highcharts";
import { IData_TrafficItem } from "@/entities";

export const TrafficChart: React.FC<{
  traffic: IData_TrafficItem[];
}> = ({ traffic }) => {
  const chartRef = useRef<HTMLDivElement>(null);
  const chartInstanceRef = useRef<Highcharts.Chart | null>(null);

  useEffect(() => {
    if (chartRef.current && traffic) {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
        chartInstanceRef.current = null;
      }

      chartInstanceRef.current = Highcharts.chart(chartRef.current, {
        chart: {
          type: "pie",
          backgroundColor: "#1a1a2e",
        },
        title: {
          text: "Traffic Distribution",
          style: {
            color: "#fff",
          },
        },
        series: [
          {
            type: "pie",
            name: "Traffic",
            data: traffic.map((item) => ({
              name: item.value,
              y: item.count,
            })),
          },
        ],
        plotOptions: {
          pie: {
            allowPointSelect: true,
            cursor: "pointer",
            dataLabels: {
              enabled: true,
              format: "{point.name}: {point.percentage:.1f}%",
              style: {
                color: "rgba(255, 255, 255, 0.87)",
                fontFamily: "system-ui, Avenir, Helvetica, Arial, sans-serif",
              },
            },
          },
        },
        colors: ["#4a5af9", "#ff6b6b", "#40c4ff", "#ffd740", "#66bb6a"],
      });
    }

    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
        chartInstanceRef.current = null;
      }
    };
  }, [traffic]);

  return <div ref={chartRef} className="traffic-chart" />;
};
