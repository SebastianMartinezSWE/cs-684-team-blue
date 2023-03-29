import { useState } from 'react';
import { Alert, Button, Form, Modal } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import * as UserApi from '../../api/user';
import { UserCredentials } from '../../api/user';
import { User } from '../../models/user';
import styleUtils from '../../styles/utils/util.module.css';
import { UnauthorizedError } from '../../utils/HttpErrors';
import TextInputField from '../utils/TextInputField';

interface SignInModalProps {
    onDismiss: () => void;
    onSigninSuccessful: (user: User) => void;
}

const SignInModal = ({ onDismiss, onSigninSuccessful }: SignInModalProps) => {
    const [errorText, setErrorText] = useState<string | null>(null);

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<UserCredentials>();

    async function onSubmit(credentials: UserCredentials) {
        try {
            const user = await UserApi.signIn(credentials);
            onSigninSuccessful(user);
        } catch (error) {
            if (error instanceof UnauthorizedError) {
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
                <Modal.Title>Sign In</Modal.Title>
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
                        registerOptions={{ required: 'Required' }}
                        error={errors.username}
                    />
                    <TextInputField
                        name="password"
                        label="Password *"
                        type="password"
                        placeholder="Password"
                        register={register}
                        registerOptions={{
                            required: 'Required',
                        }}
                        error={errors.password}
                    />
                    <Button
                        type="submit"
                        disabled={isSubmitting}
                        className={styleUtils.width100}
                        data-testid="Sign-In"
                    >
                        Sign In
                    </Button>
                </Form>
            </Modal.Body>
        </Modal>
    );
};

export default SignInModal;
