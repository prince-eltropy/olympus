import {
  Button,
  Descriptions,
  Divider,
  List,
  Select,
  Space,
  Table,
  Tooltip,
} from 'antd';
import {
  DeleteOutlined,
  EditTwoTone,
  RollbackOutlined,
} from '@ant-design/icons';
import CustomerContact from './views/components/Customers/CustomerContact';
import { Option } from 'antd/lib/mentions';
import { showMessage } from './helper';
import { Link } from 'react-router-dom';

export const subdomainData = [
  {
    uid: '657833be-0b7a-476c-b666-3a8b234ee2d8',
    id: '4512',
    customer: 'Global Credit Union',
    subdomain: 'globalcreditunion.eltropy.com',
  },
  {
    uid: '2336004f-2182-4c4f-9018-1863ab6071a2',
    id: '5874',
    customer: 'Global Credit Union',
    subdomain: 'globalcreditunion.eltropy.com',
  },
  {
    uid: '6eefa200-46e2-4847-adda-eb79a5b4c342',
    id: '9874',
    customer: 'Global Credit Union',
    subdomain: 'globalcreditunion.eltropy.com',
  },
  {
    uid: '1e292afa-8a5d-4c29-be10-61a8cbeb599a',
    id: '6582',
    customer: 'Global Credit Union',
    subdomain: 'globalcreditunion.eltropy.com',
  },
  {
    uid: '8424ef41-dab9-4068-8177-674d1090da5a',
    id: '4581',
    customer: 'Global Credit Union',
    subdomain: 'globalcreditunion.eltropy.com',
  },
  {
    uid: '88950437-c033-4f76-aa58-f84a2c4f9fad',
    id: '3256',
    customer: 'Global Credit Union',
    subdomain: 'globalcreditunion.eltropy.com',
  },
  {
    uid: '98a3fad9-6635-4d80-a12d-36265d2baade',
    id: '8548',
    customer: 'Global Credit Union',
    subdomain: 'globalcreditunion.eltropy.com',
  },
  {
    uid: 'b1fd9271-4796-4e17-87e6-9e4c4b19d385',
    id: '7848',
    customer: 'Global Credit Union',
    subdomain: 'globalcreditunion.eltropy.com',
  },
];

export const subdomainCols = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
    //   defaultSortOrder: 'descend',
    // 	sorter: (a, b) => a.id - b.id,
  },
  {
    title: 'Customer',
    dataIndex: 'customer',
    key: 'customer',
  },
  {
    title: 'Eltropy Subdomain',
    dataIndex: 'subdomain',
    key: 'subdomain',
  },
  {
    title: 'Actions',
    render: () => (
      <Space size="middle">
        <Tooltip title="Edit Subdomain">
          <Button icon={<EditTwoTone />}></Button>
        </Tooltip>
        <Tooltip title="Delete Subdomain">
          <Button type={'primary'} danger icon={<DeleteOutlined />}></Button>
        </Tooltip>
      </Space>
    ),
    key: 'actions',
  },
];

export const roles = ['BASIC', 'CS_BASIC', 'CS_ADMIN', 'DEVOPS', 'SUPERUSER'];
const subdomainList = [
  'San Jose CU',
  'New Jersey FCU',
  'Texas CU',
  'Dallas FCU',
  'Ohio CU',
  'New Mexico FCU',
  'Miami CU',
  'Florida FCU',
  'Brooklyn CU',
  'Washington FCU',
  'Staten Island CU',
];

export const accessData = [
  {
    uid: 1,
    colleague: 'Rakesh Goyal',
    access: [0, 0, 0, 0, 1, 1],
  },
  {
    uid: 2,
    colleague: 'Sarla V',
    access: [0, 0, 0, 0, 1, 1],
  },
  {
    uid: 3,
    colleague: 'Jim Cairns',
    access: [0, 1, 0, 0, 0, 0],
  },
  {
    uid: 4,
    colleague: 'Matt Lindley',
    access: [0, 0, 1, 0, 0, 0],
  },
  {
    uid: 5,
    colleague: 'Sai Kothapalle',
    access: [0, 0, 0, 1, 0, 0],
  },
  {
    uid: 6,
    colleague: 'Hasan Naqvi',
    access: [1, 0, 0, 0, 0, 0],
  },
];

export const accessCols = [
  {
    title: 'Colleague',
    dataIndex: 'colleague',
    key: 'colleague',
    width: 150,
  },
  {
    title: 'Roles',
    key: 'access',
    render: record => (
      <Select
        mode="multiple"
        style={{ width: '100%' }}
        placeholder="Please select"
        defaultValue={['BASIC']}
        onSelect={selectedIndex =>
          showMessage(
            'Please Wait...',
            `${roles[selectedIndex]}  was successfully assigned to ${record.colleague}`
          )
        }
        onDeselect={selectedIndex =>
          showMessage(
            'Please Wait...',
            `${roles[selectedIndex]}  was successfully revoked from ${record.colleague}`
          )
        }
      >
        {roles.map((role, key) => (
          <Option key={key}>{role}</Option>
        ))}
      </Select>
    ),
  },

  // {
  // 	title: 'Actions',
  // 	render: () => (
  // 		<Space size="middle">
  // 			<Tooltip title="Edit Access">
  // 				<Button icon={<EditTwoTone />}></Button>
  // 			</Tooltip>
  // 			{/* <Tooltip title="View Assigned Subdomain">
  // 				<Button icon={<CloudTwoTone />}>Subdomains</Button>
  // 			</Tooltip> */}

  // 		</Space>
  // 	),
  // 	key: 'actions',
  // }
];

export const customerCols = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.id - b.id,
  },
  {
    title: 'Customer',
    dataIndex: 'customer',
    key: 'customer',
  },
  {
    title: 'Contact Info',
    key: 'aum',
    render: data => <CustomerContact contactData={data.contactInfo} />,
  },
  {
    title: 'AUM',
    dataIndex: 'aum',
    key: 'aum',
  },
  {
    title: 'ARR',
    dataIndex: 'arr',
    key: 'arr',
  },
  {
    title: 'Actions',
    render: row => (
      <Space size="middle">
        <Tooltip title="Edit Subdomain">
          <Button icon={<EditTwoTone />}></Button>
        </Tooltip>
        <Tooltip title="Delete Subdomain">
          <Button type={'primary'} danger icon={<DeleteOutlined />}></Button>
        </Tooltip>
      </Space>
    ),
    key: 'actions',
  },
];

export const customerData = [
  {
    uid: '657833be-0b7a-476c-b666-3a8b234ee2d8',
    id: '4512',
    customer: 'Global Credit Union',
    contactInfo: {
      poc: 'John Smith',
      phone: '+18001234567',
      mail: 'john.smith@gcu.com',
      location: 'Palo Alto, CA',
    },
    aum: '$ 375M',
    arr: '$ 160K',
  },
  {
    uid: '2336004f-2182-4c4f-9018-1863ab6071a2',
    id: '5874',
    customer: 'Global Credit Union',
    contactInfo: {
      poc: 'John Smith',
      phone: '+18001234567',
      mail: 'john.smith@gcu.com',
      location: 'Palo Alto, CA',
    },
    aum: '$ 350M',
    arr: '$ 150K',
  },
];

export const inprogressCols = [
  {
    title: 'CERTIFICATE NAME',
    dataIndex: 'certificate',
    key: 'certificate',
  },
  {
    title: 'VALIDITY',
    dataIndex: 'validity',
    key: 'validity',
  },
  {
    title: 'STATUS',
    dataIndex: 'status',
    key: 'status',
  },
  {
    title: 'Actions',
    render: row =>
      row.status === 'Validated' ? (
        <Space size="middle">
          <Tooltip title="Edit Subdomain">
            {' '}
            <Link to="/dashboard/manage-subdomain/addToLoadBalancer">
              <Button type="primary">Add to Load balancer</Button>
            </Link>
          </Tooltip>
        </Space>
      ) : (
        'Waiting for validation'
      ),
    key: 'actions',
  },
];

export const inprogressData = [
  {
    certificate: 'globalcreditunion.eltropy.com',
    validity: 'Requested',
    status: 'Pending',
  },
  {
    certificate: 'globalcreditunion.eltropy.com',
    validity: 'Requested',
    status: 'Validated',
  },
  {
    certificate: 'globalcreditunion.eltropy.com',
    validity: 'Requested',
    status: 'Pending',
  },
  {
    certificate: 'globalcreditunion.eltropy.com',
    validity: 'Requested',
    status: 'Validated',
  },
  {
    certificate: 'samplecu.eltropy.com',
    validity: 'Requested',
    status: 'Validated',
  },
];

export const roleCols = [
  {
    title: 'Role',
    dataIndex: 'role',
    key: 'role',
  },
  {
    title: 'Actions',
    dataIndex: 'role',
    key: 'role',
    width: 100,
    render: record => (
      <Space size="middle">
        {/* <AddRoleModal /> */}
        <Tooltip title="Edit Access">
          <Button icon={<EditTwoTone />}></Button>
        </Tooltip>
      </Space>
    ),
  },
];

export const roleData = [
  {
    uid: 1,
    role: 'BASIC',
    access: ['0000', '0100', '0100', '0000'],
  },
  {
    uid: 2,
    role: 'CS_BASIC',
    access: ['1100', '1110', '0100', '0000'],
  },
  {
    uid: 3,
    role: 'CS_ADMIN',
    access: ['1111', '1111', '0100', '0000'],
  },
  {
    uid: 4,
    role: 'DEVOPS',
    access: ['0100', '1111', '0000', '0000'],
  },
  {
    uid: 5,
    role: 'ENGG',
    access: ['0100', '1111', '0100', '0000'],
  },
  {
    uid: 5,
    role: 'SUPERUSER',
    access: ['1111', '1111', '0100', '1111'],
  },
];

export const subdomainAccessCols = [
  {
    title: 'Colleague',
    dataIndex: 'colleague',
    key: 'colleague',
    width: 130,
  },
  {
    title: 'Subdomains',
    key: 'access',
    render: record => (
      <Select
        mode="multiple"
        style={{ width: '100%' }}
        placeholder="Please select"
        defaultValue={[0, 1]}
        onSelect={selectedIndex => {
          showMessage(
            'Please Wait...',
            `${subdomainList[selectedIndex]}'s access was granted to ${record.colleague}`
          );
        }}
        onDeselect={selectedIndex =>
          showMessage(
            'Please Wait...',
            `${subdomainList[selectedIndex]}'s access was revoked from ${record.colleague}`
          )
        }
      >
        {subdomainList.map((subdomain, key) => (
          <Option key={key}>{subdomain}</Option>
        ))}
      </Select>
    ),
  },
];

const emailData = [
  'postmaster@samplecu.com',
  'administrator@samplecu.com',
  'webmaster@samplecu.com',
  'admin@samplecu.com',
  'hostmaster@samplecu.com',
];

export const byEmailModalConfig = {
  title: 'Validation By Email',
  content: (
    <>
      We've sent validation emails to the following emails for approval to issue
      the certificate. Please make sure this process is completed within 72
      hours (3 days) or the certificate request will be expired.
      <Divider orientation="left">Emails Sent to</Divider>
      <List
        size="small"
        dataSource={emailData}
        renderItem={item => <List.Item>{item}</List.Item>}
      />
      <Space />
      You can also track the validation progress in{' '}
      <b>Manage Subdomains &gt; In Progress</b>
    </>
  ),
  okText: 'OK',
  onOk: () => {},
  witdh: '560',
};

const dnsCols = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Type',
    dataIndex: 'type',
    key: 'type',
  },
  {
    title: 'Value',
    dataIndex: 'value',
    key: 'value',
  },
];

const dnsData = [
  {
    name: '_b534ef102058a4225a5100d5c4720304.securetext.samplecu.com',
    type: 'CNAME',
    value: '_b534ef102058a4225a5100d5c4720304.otireut.acm-validation.aws',
  },
];

export const cNameMappingReview = {
  title: 'One last check',
  content: (
    <>
      <Descriptions title="Please review the CNAME Mapping" bordered>
        <Descriptions.Item label="Host Regex" span={4}>
          securetext.samplecu.com
        </Descriptions.Item>
        <Descriptions.Item label="Certificate Name">
          samplecu.eltropy.com
        </Descriptions.Item>
      </Descriptions>
    </>
  ),
  okText: 'OK',
  cancelText: 'Go Back',
  width: 600,
  onOk: () => {},
};

export const byDNSModalConfig = {
  title: 'Validation By DNS',
  content: (
    <>
      Add the following CNAME record to the DNS configuration for you domain.
      The porcedure for adding CNAME record depends on you DNS service Provider
      <Table
        className="mt-3"
        pagination={false}
        size="small"
        columns={dnsCols}
        dataSource={dnsData}
        scroll={{ x: true }}
      />
    </>
  ),
  okText: 'OK',
  onOk: () => {},
  width: 980,
};

export const recentlyDeployedCols = [
  {
    title: 'CNAME',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Host Regex',
    dataIndex: 'hregex',
    key: 'hregex',
  },
  {
    title: 'Deployed on',
    dataIndex: 'dtime',
    key: 'dtime',
  },
  {
    title: 'Actions',
    render: row => (
      <Tooltip title="Edit Subdomain">
        <Button danger icon={<RollbackOutlined />}>
          Rollback
        </Button>
      </Tooltip>
    ),
    key: 'actions',
  },
];

export const recentlyDeployedData = [
  {
    name: 'samplecu.eltropy.com',
    hregex: 'securetext.samplecu.com',
    dtime: '22 Apr 2021',
  },
];
