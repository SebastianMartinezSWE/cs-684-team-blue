import { Button, Form, Modal } from "react-bootstrap";
import { User } from "../../models/user";
interface SettingsModalProps {
  onDismiss: () => void;
  userData: User;
}

const SettingsModal = ({ onDismiss, userData }: SettingsModalProps) => {
  return (
    <Modal show onHide={onDismiss} centered>
      <Modal.Header closeButton>
        <Modal.Title>Settings</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Label>Choose your news preferences:</Form.Label>
        <Form>
          <Form.Check id="general-checkbox" label="General" defaultChecked />
          <Form.Check id="business-checkbox" label="Business" />
          <Form.Check id="entertainment-checkbox" label="Entertainment" />
          <Form.Check id="health-checkbox" label="Health" />
          <Form.Check id="science-checkbox" label="Science" />
          <Form.Check id="sports-checkbox" label="Sports" />
          <Form.Check id="technology-checkbox" label="Technology" />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onDismiss}>
          Close
        </Button>
        <Button type="submit" variant="primary" onClick={onDismiss}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default SettingsModal;
