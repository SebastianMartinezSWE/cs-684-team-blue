import { Container } from 'react-bootstrap';
import SignedInView from '../components/views/SignedInView';
import SignedOutView from '../components/views/SignedOutView';
import { User } from '../models/user';
import styles from '../styles/NewsPage.module.css';

interface HomePageProps {
    signedInUser: User | null;
}

const HomePage = ({ signedInUser }: HomePageProps) => {
    return (
        <>
            <Container fluid className={styles.pageContainer}>
                {signedInUser ? (
                    <SignedInView user={signedInUser} />
                ) : (
                    <SignedOutView />
                )}
            </Container>
        </>
    );
};

export default HomePage;
