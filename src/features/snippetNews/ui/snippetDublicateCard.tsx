import { formatNewsDate } from "@/shared/libs/utils/dateUtils";
import { formatReach } from "@/shared/libs/utils/formatReach";
import { Space, Typography } from "antd";
import { SourceInfo } from "./snippetSourceInfo";

interface DuplicateCardProps {
  title: string;
  url: string;
  date: string;
  reach: number;
  domain: string;
  country: string;
  countryCode: string;
  language?: string;
  authors: string[][];
}

const { Text, Link } = Typography;

export const DuplicateCard: React.FC<DuplicateCardProps> = ({
  title,
  url,
  date,
  reach,
  domain,
  country,
  countryCode,
  authors,
}) => (
  <div className="duplicate-card">
    <div className="duplicate-header">
      <Space size={12} align="center">
        <Text type="secondary" className="duplicate-secondary-text">
          {formatNewsDate(date)}
        </Text>
        <Text type="secondary" className="duplicate-secondary-text">
          {formatReach(reach, true)} Top Reach
        </Text>
      </Space>
    </div>
    <div className="duplicate-title">
      <Link href={url} target="_blank" className="duplicate-title-link">
        {title}
      </Link>
    </div>
    <SourceInfo
      domain={domain}
      country={country}
      countryCode={countryCode}
      authors={authors}
      classNamePrefix="duplicate-"
    />
  </div>
);
