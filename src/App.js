import './App.css';
import ProfilePhoto from './Component/Profile/ProfilePhoto';
import FullName from './Component/Profile/FullName';
import Address from './Component/Profile/Address';
import { Row, Col, Card, Button } from 'antd';
import { GithubFilled, FacebookFilled, LinkedinFilled, GoogleSquareFilled } from '@ant-design/icons';
function App() {
  return (
    <div style={{ display: 'flex', justifyContent: "center", height: "100vh", backgroundColor: "#D9D7F1" }}>
      <Card style={{ alignSelf: "center", backgroundColor: "#D9D7F1" }}>
        <Row justify="center">
          <ProfilePhoto />
        </Row>
        <Row justify="center">
          <FullName />
        </Row>

        <Row justify="center">
          <Address />
        </Row>
        <Row justify="center">
          <label style={{ fontSize: "24px", fontWeight: "400", color: "#000B49", fontFamilly: "Arial" }}>Full Stack Developer</label>
        </Row>

        <Row justify="center" style={{ marginTop: "5%" , marginBottom: "5%" }}>
          <Col span={4}>
            <GithubFilled style={{fontSize:"20px", color:"#000B49"}}/>

          </Col>
          <Col span={4}>
            <FacebookFilled  style={{fontSize:"20px", color:"#000B49"}} />

          </Col>
          <Col span={4}>
            <LinkedinFilled  style={{fontSize:"20px", color:"#000B49"}}/>

          </Col>
          <Col span={4}>
            <GoogleSquareFilled  style={{fontSize:"20px", color:"#000B49"}}/>

          </Col>
        </Row>
        <Row justify="center">
          <Button style={{color:"white", backgroundColor:"#000B49", fontSize:"18px"}}>
            Contact
          </Button>
        </Row>

      </Card>
    </div>



  );
}

export default App;
