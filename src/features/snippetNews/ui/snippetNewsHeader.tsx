import { IData_TagItem } from "@/entities";
import { formatNewsDate } from "@/shared/libs/utils/dateUtils";
import { formatReach } from "@/shared/libs/utils/formatReach";
import { Dropdown, Tag, Typography } from "antd";
import SnippetTopTraficControl from "./snippetTopTraficControl";
import { santimentColorCheck } from "@/shared/libs/utils/sentimentColor";
import { InfoCircleOutlined } from "@ant-design/icons";
import { TrafficChart } from "./snippetTrafficChart";

interface NewsHeaderProps {
  date: string;
  reach: number;
  sentiment?: string;
  traffic?: Array<IData_TagItem>;
  className?: string;
}

const { Text } = Typography;

export const NewsHeader: React.FC<NewsHeaderProps> = ({
  date,
  reach,
  sentiment,
  traffic,
  className = "news-header",
}) => {
  return (
    <div className={className}>
      <div className="news-info">
        <Text type="secondary" className="secondary-text">
          {formatNewsDate(date)}
        </Text>
        <Text className="secondary-text">
          <span className="white-text">{formatReach(reach)}</span> Reach
        </Text>
        {traffic && <SnippetTopTraficControl traffics={traffic} />}
      </div>
      <section className="news-card-container">
        {sentiment && (
          <Tag color={santimentColorCheck(sentiment)} className="sentiment-tag">
            {sentiment}
          </Tag>
        )}
        <Dropdown
          dropdownRender={() => (
            <div className="traffic-chart-container">
              {traffic ? (
                <TrafficChart traffic={traffic} />
              ) : (
                <div>No traffic data available</div>
              )}
            </div>
          )}
          placement="bottom"
          trigger={["click"]}
        >
          <div className="info-icon-wrapper">
            <InfoCircleOutlined />
          </div>
        </Dropdown>
      </section>
    </div>
  );
};
