import { useEffect, useState } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { getNews } from '../../api/news';
import { News } from '../../models/news';
import { User } from '../../models/user';
import Article from '../cards/Article';
import SettingsModal from '../modals/SettingsModal';

interface SignedInViewProps {
    user: User;
}

const SignedInView = ({ user }: SignedInViewProps) => {
    const [articles, setArticles] = useState<News['articles']>([]);
    const [showSettingsModal, setShowSettingsModal] = useState(false);

    useEffect(() => {
        async function loadArticles() {
            try {
                const news = await getNews('default');
                setArticles(news.articles);
            } catch (error) {
                console.error(error);
                alert(error);
            }
        }
        loadArticles();
    }, []);

    return (
        <>
            <Row className="mb-2 justify-content-md-center">
                <h1
                    className={`display-1 text-center text-white font-weight-bold`}
                >
                    General News
                </h1>
            </Row>
            <Row className="justify-content-md-center">
                <Col xs="auto">
                    <Button
                        onClick={() => {
                            window.location.reload();
                        }}
                    >
                        Refresh
                    </Button>
                </Col>
                <Col xs="auto">
                    <Button
                        onClick={() => {
                            setShowSettingsModal(true);
                        }}
                        data-testid="Settings"
                    >
                        Settings
                    </Button>
                </Col>
            </Row>
            <Row xs={1} md={2} xl={3} className={`mt-4 g-4`}>
                {articles?.map((article) => (
                    <Col key={article.title}>
                        <Article article={article} />
                    </Col>
                ))}
            </Row>
            {
                <SettingsModal
                    onDismiss={() => setShowSettingsModal(false)}
                    userData={user}
                    showSettingsModal={showSettingsModal}
                />
            }
        </>
    );
};

export default SignedInView;
