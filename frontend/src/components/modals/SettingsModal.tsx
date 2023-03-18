import { Button, Form, Modal } from "react-bootstrap";

interface SettingsModalProps {
  onDismiss: () => void;
}

const SettingsModal = ({ onDismiss }: SettingsModalProps) => {
  return (
    <Modal show onHide={onDismiss} centered>
      <Modal.Header closeButton>
        <Modal.Title>Settings</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Label>Choose your news preferences:</Form.Label>
        <Form>
          <Form.Switch id="general-switch" label="General" defaultChecked />
          <Form.Switch id="business-switch" label="Business" />
          <Form.Switch id="entertainment-switch" label="Entertainment" />
          <Form.Switch id="health-switch" label="Health" />
          <Form.Switch id="science-switch" label="Science" />
          <Form.Switch id="sports-switch" label="Sports" />
          <Form.Switch id="technology-switch" label="Technology" />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onDismiss}>
          Close
        </Button>
        <Button variant="primary" onClick={onDismiss}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default SettingsModal;
