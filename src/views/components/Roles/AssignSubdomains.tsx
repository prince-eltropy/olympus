import { Row, Col, Typography, Table } from 'antd';
import { AssignSubdomainsProps } from '../../../types/props/rolesProps';
import { accessData, subdomainAccessCols } from '../../../dummyData';

const { Title } = Typography;

export const AssignSubdomains: React.FC<AssignSubdomainsProps> = () => {
  return (
    <Row>
      <Col span={12}>
        <Title level={3}> ASSIGN SUBDOMAINS</Title>
      </Col>

      <Col span={24}>
        <Table
          columns={subdomainAccessCols}
          dataSource={accessData}
          pagination={false}
        />
      </Col>
    </Row>
  );
};
