import { Tabs } from 'antd';
import { SettingsProps } from '../../types/props/containerProps';
import { CreateRole } from '../components/Roles';
import AccessControlSettings from './AccessControlSettings';

const { TabPane } = Tabs;

export const Settings: React.FC<SettingsProps> = () => {
  return (
    <div className="container my-2 m-4 row m-0">
      <Tabs defaultActiveKey="1">
        <TabPane tab="Role Manager" key="1">
          <CreateRole />
        </TabPane>
        <TabPane tab="Access Controls" key="2">
          <AccessControlSettings />
        </TabPane>

        {/* <TabPane tab="Some setting 2" key="3">
					<AssignSubdomains />
				</TabPane> */}
      </Tabs>
    </div>
  );
};
