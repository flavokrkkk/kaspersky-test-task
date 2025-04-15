import { formatAuthors } from "@/shared/libs/utils/formatAuthors";
import { formatDomain } from "@/shared/libs/utils/formatDomain";
import { getFlagUrl } from "@/shared/libs/utils/getFlagUrl";
import { GlobalOutlined, BookOutlined, UserOutlined } from "@ant-design/icons";
import { Space, Typography } from "antd";

interface SourceInfoProps {
  domain: string;
  country: string;
  countryCode: string;
  language?: string;
  authors: string[][];
  classNamePrefix?: string;
}

const { Text, Link } = Typography;

export const SourceInfo: React.FC<SourceInfoProps> = ({
  domain,
  country,
  countryCode,
  language,
  authors,
  classNamePrefix = "",
}) => (
  <div className={`${classNamePrefix}source-info`}>
    <Space size={12} align="center">
      <Space size={4} align="center">
        <GlobalOutlined />
        <Link
          href={domain}
          target="_blank"
          className={`${classNamePrefix}source-link`}
        >
          {formatDomain(domain)}
        </Link>
      </Space>
      <Space size={4} align="center">
        <img
          src={getFlagUrl(countryCode)}
          alt={country}
          className={`${classNamePrefix}flag`}
        />
        <Text type="secondary" className={`${classNamePrefix}country-text`}>
          {country}
        </Text>
      </Space>
      {language && (
        <Space size={4} align="center">
          <BookOutlined />
          <Text type="secondary" className={`${classNamePrefix}language-text`}>
            {language.toUpperCase()}
          </Text>
        </Space>
      )}
      <Space size={4} align="center">
        <UserOutlined />
        <Text type="secondary" className={`${classNamePrefix}author-text`}>
          {formatAuthors(authors)}
        </Text>
      </Space>
    </Space>
  </div>
);
