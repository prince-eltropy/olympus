import { Row, Col, Typography, Table, Button } from 'antd';
import { roleCols, roleData } from '../../../dummyData';
import { PlusCircleOutlined } from '@ant-design/icons';
import { useState } from 'react';
import AddRoleModal from './AddRoleModal';
import { CreateRoleProps } from '../../../types/props/rolesProps';

const { Title } = Typography;

export const CreateRole: React.FC<CreateRoleProps> = () => {
  const [visible, setVisiblity] = useState(false);
  const [currentRole, setCurrentRole] = useState({});

  const toggleVisiblity = () => {
    let updatedVisiblity = visible ? false : true;
    setVisiblity(updatedVisiblity);
  };

  return (
    <>
      <Row>
        <Col span={12}>
          <Title level={3}> ALL ROLES</Title>
        </Col>
        <Col span={12} className="pl-3 text-right">
          <Button
            type="primary"
            className="ml-2 py-0"
            icon={<PlusCircleOutlined />}
            size="middle"
            onClick={() => {
              toggleVisiblity();
              setCurrentRole({});
            }}
          >
            Create a New Role
          </Button>
        </Col>

        <Col span={24}>
          <AddRoleModal
            visible={visible}
            toggleVisiblity={toggleVisiblity}
            data={currentRole}
          />
          <Table
            columns={roleCols}
            dataSource={roleData}
            onRow={record => {
              return {
                onClick: () => {
                  toggleVisiblity();
                  setCurrentRole(record);
                },
              };
            }}
          />
        </Col>
      </Row>
    </>
  );
};
