import { useState } from "react";
import { Alert, Button, Form, Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";
import * as UserApi from "../../api/user";
import { UserCredentials } from "../../api/user";
import { User } from "../../models/user";
import styleUtils from "../../styles/utils/util.module.css";
import { ConflictError } from "../../utils/HttpErrors";
import PasswordWarning from "../utils/PasswordWarning";
import TextInputField from "../utils/TextInputField";
import UserNameWarning from "../utils/UserNameWarning";

interface SignUpModalProps {
  onDismiss: () => void;
  onSignUpSuccessful: (user: User) => void;
}

const SignUpModal = ({ onDismiss, onSignUpSuccessful }: SignUpModalProps) => {
  const [errorText, setErrorText] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<UserCredentials>();

  async function onSubmit(credentials: UserCredentials) {
    try {
      const newUser = await UserApi.signUp(credentials);
      onSignUpSuccessful(newUser);
    } catch (error) {
      if (error instanceof ConflictError) {
        setErrorText(error.message);
      } else {
        alert(error);
      }
      console.error(error);
    }
  }

  return (
    <Modal show onHide={onDismiss}>
      <Modal.Header closeButton>
        <Modal.Title>Sign Up</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {errorText && <Alert variant="danger">{errorText}</Alert>}
        <Form onSubmit={handleSubmit(onSubmit)}>
          <TextInputField
            name="username"
            label="Username *"
            type="text"
            placeholder="Username"
            register={register}
            registerOptions={{ required: "Required", min: 8 }}
            error={errors.username}
          />
          <UserNameWarning />
          <TextInputField
            name="password"
            label="Password *"
            type="password"
            placeholder="Password"
            register={register}
            registerOptions={{
              required: "Required",
              min: 8,
              pattern:
                /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/i,
            }}
            error={errors.password}
          />
          <PasswordWarning />
          <Button
            type="submit"
            disabled={isSubmitting}
            className={styleUtils.width100}
          >
            Sign Up
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default SignUpModal;
