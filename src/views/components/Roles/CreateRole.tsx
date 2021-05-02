import { Row, Col, Typography, Table, Button } from 'antd';
import { roleCols, roleData } from '../../../dummyData';
import { PlusCircleOutlined } from '@ant-design/icons';
import { useEffect, useState } from 'react';
import AddRoleModal from './AddRoleModal';
import { CreateRoleProps } from '../../../types/props/rolesProps';
import { genericApiCall } from '../../../utils/services';
import HttpMethods from '../../../types/enums/HttpMethods';

const { Title } = Typography;

interface roleDataType {
	id: string,
    createdOn:Date,
    updatedOn: Date,
    name: string,
    access: [],
    isDeleted: boolean
}


export const CreateRole: React.FC<CreateRoleProps> = () => {
  const [visible, setVisiblity] = useState(false);
  const [currentRole, setCurrentRole] = useState({});

  const toggleVisiblity = () => {
    let updatedVisiblity = visible ? false : true;
    setVisiblity(updatedVisiblity);
  };

  const [roles, setRoles] = useState<roleDataType[]>();

  const getAllRoles = async () => {
	let allRoles :roleDataType[] = await genericApiCall(HttpMethods.GET, '/adminportal/roles', {});
	
	let activeRoles = allRoles.filter(x => x.isDeleted === false)
	setRoles(activeRoles);

  }

  useEffect(() => {
	  (async () => {
		  await getAllRoles();
	  })();
  },[])

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
		  	getRoles = {getAllRoles}
            visible={visible}
            toggleVisiblity={toggleVisiblity}
            data={currentRole}
          />
          <Table
            columns={roleCols}
            dataSource={roles}
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
