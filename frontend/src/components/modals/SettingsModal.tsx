import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import * as SettingsApi from "../../api/settings";
import { User } from "../../models/user";
interface SettingsModalProps {
  onDismiss: () => void;
  userData: User;
  showSettingsModal: boolean;
}

const SettingsModal = ({
  onDismiss,
  userData,
  showSettingsModal,
}: SettingsModalProps) => {
  const [settingData, setSettingData] = useState<User["settings"]>(
    userData.settings
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.checked;
    setSettingData((prevValues) => {
      return { ...prevValues, [name]: value };
    });
  };

  async function saveSettings(updatedSettings: User["settings"]) {
    try {
      await SettingsApi.updateSettings(userData._id, updatedSettings);
    } catch (error) {
      console.error(error);
      alert(error);
    }
  }

  return (
    <Modal
      show={showSettingsModal}
      onHide={() => {
        onDismiss();
        setSettingData(userData.settings);
      }}
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title data-testid="Settings-Modal">Settings</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Label>Choose your news preferences:</Form.Label>
        <Form id="settings">
          <Form.Check
            type="checkbox"
            id="general-checkbox"
            label="General"
            name="general"
            checked={settingData.general}
            onChange={handleChange}
          />
          <Form.Check
            label="Business"
            checked={settingData.business}
            name="business"
            onChange={handleChange}
          />
          <Form.Check
            label="Entertainment"
            checked={settingData.entertainment}
            name="entertainment"
            onChange={handleChange}
          />
          <Form.Check
            label="Health"
            checked={settingData.health}
            name="health"
            onChange={handleChange}
          />
          <Form.Check
            label="Science"
            checked={settingData.science}
            name="science"
            onChange={handleChange}
          />
          <Form.Check
            label="Sports"
            checked={settingData.sports}
            name="sports"
            onChange={handleChange}
          />
          <Form.Check
            label="Technology"
            checked={settingData.technology}
            name="technology"
            onChange={handleChange}
          />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="secondary"
          onClick={() => {
            setSettingData(userData.settings);
            onDismiss();
          }}
        >
          Close
        </Button>
        <Button
          type="submit"
          variant="primary"
          onClick={() => {
            saveSettings(settingData);
            onDismiss();
          }}
        >
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default SettingsModal;
