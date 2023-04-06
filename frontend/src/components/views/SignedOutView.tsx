import { useEffect, useState } from "react";
import { Button, ButtonGroup, Col, Row, Tab, Tabs } from "react-bootstrap";
import { ArrowClockwise } from "react-bootstrap-icons";
import { getDefaultNews } from "../../api/news";
import { News } from "../../models/news";
import Article from "../cards/Article";

const SignedOutView = () => {
    const [articles, setArticles] = useState<News["articles"]>([]);

    useEffect(() => {
        async function loadArticles() {
            try {
                const news = await getDefaultNews();
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
                    </ButtonGroup>
                </Col>
            </Row>

            <Row xs={1} sm={2} xl={3} className={`g-4`}>
                {articles.map((article) => (
                    <Col key={article.url}>
                        <Article article={article} />
                    </Col>
                ))}
            </Row>
        </>
    );
};

export default SignedOutView;
