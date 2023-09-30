import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FormattedMessage } from 'react-intl';


function Navbar2({ locale, setLocale }) {
  return (
    <Navbar className="bg-body-tertiary justify-content-between">
      <Form inline>
        <Row>
          <Col xs="auto">
            {/* lang */}
            {locale.includes("en") ? (
              <button
                className="w-[20px] aspect-square"
                onClick={(e) => {
                  e.preventDefault();
                  setLocale("es");
              }}
              >
                <FormattedMessage id="idioma"></FormattedMessage>
              </button>
            ) : (
              <button
                className="w-[20px] aspect-square"
                onClick={() => setLocale("en")}
              >
                <FormattedMessage id="idioma"></FormattedMessage>
              </button>
            )}
          </Col>
        </Row>
      </Form>
    </Navbar>
  );
}

export default Navbar2;