import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { FormattedMessage } from "react-intl"
import { useIntl } from 'react-intl';

function Login() {
  const intl = useIntl();
  const [formValues, setFormValues] = React.useState({
    email: "",
    password: "",
  });
  const [formValid, setFormValid] = React.useState({
    email: true,
    password: false,
  });
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = React.useState(false);

  const updateEmail = (event) => {
    setFormValues({ ...formValues, email: event.target.value });
  };
  const updatePassword = (event) => {
    setFormValues({ ...formValues, password: event.target.value });
    setFormValid({ ...formValid, password: event.target.value.length >= 9 });
  };

  const loginBtnAction = () => {
    if (!showPassword) {
      setShowPassword(true);
      return;
    }

    if (formValid.email && formValid.password) {
      console.log("Email:", formValues.email);
      console.log("Password:", formValues.password);
      navigate("/Inventario");
    }
  };

  return (
    <div className="screen">
      <Container
        className="mainSquare"
        style={{ backgroundColor: "white", height: "100%", width: "100%" }}
      >
        <Row
          style={{
            width: "100%",
            minHeight: "75vh",
            display: "flex",
            alignItems: "center",
            alignContent: "center",
          }}
        >
          <Col
            style={{
              width: "50%",
              minHeight: "75vh",
              backgroundColor: "lightcoral",
              display: "flex",
              alignItems: "center",
              alignContent: "center",
            }}
          >
          </Col>
          <Col
            style={{
              minHeight: "75vh",
              backgroundColor: "white",
              display: "flex",
              alignItems: "center",
              alignContent: "center",
            }}
          >
            <Form>
              {showPassword ? (
                <>
                  <Form.Label>Email</Form.Label>
                  <div>{formValues.email}</div>
                </>
              ) : (
                <Form.Group>
                  <Form.Label>
                    <FormattedMessage 
                    id = "email">
                    </FormattedMessage>
                      </Form.Label>
                  <Form.Control
                    type="email"
                    
                    placeholder={intl.formatMessage({ id: "enter email" })}
                    onChange={updateEmail}
                    value={formValues.email}
                  ></Form.Control>
                  <Form.Text className="text-muted">
                    <FormattedMessage id = "politica email">
                    </FormattedMessage>
                  </Form.Text>
                </Form.Group>
              )}

              {showPassword && (
                <>
                  <Form.Group>
                    <Form.Label>
                      <FormattedMessage id = "password">
                      </FormattedMessage>
                      </Form.Label>
                    <Form.Control
                      type="password"
                      placeholder={intl.formatMessage({ id: "enter password" })}
                      onChange={updatePassword}
                      value={formValues.password}
                      style={{ borderColor: formValid.password ? "" : "red" }}
                    ></Form.Control>
                    <Form.Text className="tex-muted">
                      <FormattedMessage id = "password condition">

                      </FormattedMessage>
                    </Form.Text>
                  </Form.Group>
                </>
              )}
            </Form>
            <br />
            <Button onClick={loginBtnAction}>
              {showPassword ? "Login" : <FormattedMessage id = "next"></FormattedMessage>}
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default Login;
