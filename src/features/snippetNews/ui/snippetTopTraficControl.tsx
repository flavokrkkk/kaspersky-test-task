import { IData_TagItem } from "@/entities";
import { Typography } from "antd";
import { FC } from "react";

const { Text } = Typography;

interface ISnippetHiglihtsControl {
  traffics: Array<IData_TagItem>;
}
const SnippetTopTraficControl: FC<ISnippetHiglihtsControl> = ({ traffics }) => (
  <Text className="secondary-text">
    Top Traffic:{" "}
    <section className="traffic-section">
      {traffics.map((traffic) => (
        <div className="traffic-item" key={traffic.value}>
          <span>{traffic.value}</span>
          <span className="traffic-percent">{traffic.count}%</span>
        </div>
      ))}
    </section>
  </Text>
);

export default SnippetTopTraficControl;
