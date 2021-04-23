import { Button, Col, Row, Typography, Image } from 'antd';
import { Link } from 'react-router-dom';
import logo from '../../assets/img/logo.png';
import { LoginProps } from '../../types/props/containerProps';

const { Title } = Typography;

export const Login: React.FC<LoginProps> = () => {
  return (
    <div className="loginBg vert-center">
      <Row>
        <Col className="bg-white text-center shadow-sm p-5">
          <Image width={300} src={logo} preview={false} />

          <Title>Eltropy Launchpad</Title>

          <Link to="/dashboard">
            <Button className="col-md-10 col-12" type="primary" size="large">
              SIGN IN
            </Button>
          </Link>
        </Col>
      </Row>
    </div>
  );
};
