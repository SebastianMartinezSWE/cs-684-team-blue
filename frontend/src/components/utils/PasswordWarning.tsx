const PasswordWarning = () => {
    return (
        <ul>
            <li>Password must be at least 8 characters long</li>
            <li>
                Must include at least 1 uppercase letter and at least 1
                lowercase letter
            </li>
            <li>Must include at least 1 special character (!@#$%)</li>
        </ul>
    );
};

export default PasswordWarning;
