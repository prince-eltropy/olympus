import { Row, Col, Typography, Table } from 'antd';
import { AssignRolesProps } from '../../../types/props/rolesProps';
import { accessCols, accessData } from '../../../dummyData';

const { Title } = Typography;

export const AssignRoles: React.FC<AssignRolesProps> = () => {
  return (
    <Row>
      <Col span={12}>
        <Title level={3}> ASSIGN ROLES</Title>
      </Col>

      <Col span={24}>
        <Table
          columns={accessCols}
          dataSource={accessData}
          pagination={false}
        />
      </Col>
    </Row>
  );
};
