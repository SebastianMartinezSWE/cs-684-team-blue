import { useEffect, useState } from "react";
import { Button, ButtonGroup, Col, Row, Tab, Tabs } from "react-bootstrap";
import { ArrowClockwise, GearWideConnected } from "react-bootstrap-icons";
import { getNews } from "../../api/news";
import { News } from "../../models/news";
import { User } from "../../models/user";
import Article from "../cards/Article";
import SettingsModal from "../modals/SettingsModal";

interface SignedInViewProps {
    user: User;
}

const SignedInView = ({ user }: SignedInViewProps) => {
    const [articles, setArticles] = useState<News["articles"]>([]);
    const [showSettingsModal, setShowSettingsModal] = useState(false);
    const [settingsChanged, setSettingsChanged] = useState(false);

    useEffect(() => {
        async function loadArticles() {
            try {
                const news = await getNews(user.username);
                setArticles(news);
                setSettingsChanged(false);
            } catch (error) {
                console.error(error);
                alert(error);
            }
        }
        loadArticles();
    }, [settingsChanged]);

    return (
        <>
            <Tabs
                defaultActiveKey="home"
                id="category-tabs"
                fill
                className="mb-3"
            >
                <Tab eventKey="home" title="Home"></Tab>
                <Tab eventKey="business" title="Business"></Tab>
                <Tab eventKey="entertainment" title="Entertainment"></Tab>
                <Tab eventKey="general" title="General"></Tab>
                <Tab eventKey="health" title="Health"></Tab>
                <Tab eventKey="science" title="Science"></Tab>
                <Tab eventKey="sports" title="Sports"></Tab>
                <Tab eventKey="technology" title="Technology"></Tab>
            </Tabs>

            <Row className="d-flex flex-row-reverse bd-highlight mt-1 mb-2">
                <Col xs="auto">
                    <ButtonGroup aria-label="Refresh-Settings">
                        <Button
                            variant="outline-secondary"
                            onClick={() => {
                                window.location.reload();
                            }}
                        >
                            <ArrowClockwise /> Refresh
                        </Button>
                        <Button
                            variant="outline-primary"
                            onClick={() => {
                                setShowSettingsModal(true);
                            }}
                        >
                            <GearWideConnected /> Settings
                        </Button>
                    </ButtonGroup>
                </Col>
            </Row>

            <Row xs={1} md={2} xl={3} className={`g-4`}>
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
                    settingsChanged={setSettingsChanged}
                />
            }
        </>
    );
};

export default SignedInView;
