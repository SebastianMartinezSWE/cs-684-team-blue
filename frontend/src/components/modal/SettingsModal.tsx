import { useState } from "react";
import { Alert, Button, Form, Modal } from "react-bootstrap";
import * as SettingsApi from "../../api/settings";
import { User } from "../../models/user";
interface SettingsModalProps {
  onDismiss: () => void;
  userData: User;
  showSettingsModal: boolean;
  settingsChanged: (changed: boolean) => void;
}

const SettingsModal = ({
  onDismiss,
  userData,
  showSettingsModal,
  settingsChanged,
}: SettingsModalProps) => {
  const [settingsData, setSettingsData] = useState<User["settings"]>(
    userData.settings,
  );

  const [showAlert, setShowAlert] = useState(false);

  async function checkSettings(updatedSettings: User["settings"]) {
    const settingsSelected = Object.values(updatedSettings).slice(0, -1);
    const checkSelectedSettings = settingsSelected.every(
      (setting) => setting === false,
    );

    return checkSelectedSettings;
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.checked;
    setSettingsData((prevValues) => {
      return { ...prevValues, [name]: value };
    });
  };

  async function saveSettings(updatedSettings: User["settings"]) {
    try {
      await SettingsApi.updateSettings(userData.username, updatedSettings);
      userData.settings = updatedSettings;
    } catch (error) {
      console.error(error);
      alert(error);
    }
  }

  return (
    <>
      <Modal
        show={showSettingsModal}
        onHide={() => {
          onDismiss();
          setSettingsData(userData.settings);
        }}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title data-testid="Settings-Modal">Settings</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {showAlert && (
            <Alert variant="warning">
              At least one preference must be chosen!
            </Alert>
          )}
          <Form.Label>Choose your news preferences:</Form.Label>
          <Form id="settings">
            <Form.Check
              type="checkbox"
              id="general-checkbox"
              label="General"
              name="general"
              checked={settingsData.general}
              onChange={handleChange}
            />
            <Form.Check
              type="checkbox"
              id="business-checkbox"
              label="Business"
              checked={settingsData.business}
              name="business"
              onChange={handleChange}
            />
            <Form.Check
              type="checkbox"
              id="entertainment-checkbox"
              label="Entertainment"
              checked={settingsData.entertainment}
              name="entertainment"
              onChange={handleChange}
            />
            <Form.Check
              type="checkbox"
              id="health-checkbox"
              label="Health"
              checked={settingsData.health}
              name="health"
              onChange={handleChange}
            />
            <Form.Check
              type="checkbox"
              id="science-checkbox"
              label="Science"
              checked={settingsData.science}
              name="science"
              onChange={handleChange}
            />
            <Form.Check
              type="checkbox"
              id="sports-checkbox"
              label="Sports"
              checked={settingsData.sports}
              name="sports"
              onChange={handleChange}
            />
            <Form.Check
              type="checkbox"
              id="technology-checkbox"
              label="Technology"
              checked={settingsData.technology}
              name="technology"
              onChange={handleChange}
            />
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => {
              onDismiss();
              setSettingsData(userData.settings);
            }}
          >
            Close
          </Button>
          <Button
            type="submit"
            variant="primary"
            onClick={async () => {
              if ((await checkSettings(settingsData)) === true) {
                setShowAlert(true);
              } else {
                saveSettings(settingsData);
                setShowAlert(false);
                onDismiss();
                settingsChanged(true);
              }
            }}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default SettingsModal;
