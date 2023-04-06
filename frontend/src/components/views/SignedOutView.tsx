import { useEffect, useState } from "react";
import { Button, ButtonGroup, Col, Row, Tab, Tabs } from "react-bootstrap";
import { ArrowClockwise } from "react-bootstrap-icons";
import { getCategory } from "../../api/category";
import { getDefaultNews } from "../../api/news";
import { News } from "../../models/news";
import Article from "../cards/Article";

const SignedOutView = () => {
    const [generalArticles, setGeneralArticles] = useState<News["articles"]>(
        []
    );
    const [businessArticles, setBusinessArticles] = useState<News["articles"]>(
        []
    );
    const [entertainmentArticles, setEntertainmentArticles] = useState<
        News["articles"]
    >([]);

    const [healthArticles, setHealthArticles] = useState<News["articles"]>([]);
    const [scienceArticles, setScienceArticles] = useState<News["articles"]>(
        []
    );
    const [sportsArticles, setSportsArticles] = useState<News["articles"]>([]);
    const [technologyArticles, setTechnologyArticles] = useState<
        News["articles"]
    >([]);

    async function loadBusinessArticles() {
        try {
            const news = await getCategory("business");
            setBusinessArticles(news.articles);
        } catch (error) {
            console.error(error);
            alert(error);
        }
    }

    async function loadEntertainmentArticles() {
        try {
            const news = await getCategory("business");
            setEntertainmentArticles(news.articles);
        } catch (error) {
            console.error(error);
            alert(error);
        }
    }

    async function loadGeneralArticles() {
        try {
            const news = await getDefaultNews();
            setGeneralArticles(news.articles);
        } catch (error) {
            console.error(error);
            alert(error);
        }
    }

    async function loadHealthArticles() {
        try {
            const news = await getCategory("business");
            setHealthArticles(news.articles);
        } catch (error) {
            console.error(error);
            alert(error);
        }
    }
    async function loadScienceArticles() {
        try {
            const news = await getCategory("business");
            setScienceArticles(news.articles);
        } catch (error) {
            console.error(error);
            alert(error);
        }
    }
    async function loadSportsArticles() {
        try {
            const news = await getCategory("business");
            setSportsArticles(news.articles);
        } catch (error) {
            console.error(error);
            alert(error);
        }
    }
    async function loadTechnologyArticles() {
        try {
            const news = await getCategory("business");
            setTechnologyArticles(news.articles);
        } catch (error) {
            console.error(error);
            alert(error);
        }
    }

    useEffect(() => {
        loadGeneralArticles();
    }, []);

    return (
        <>
            <Row className="d-flex flex-row-reverse bd-highlight mb-3">
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
            <Tabs
                defaultActiveKey="home"
                id="category-tabs"
                className="mb-3"
                justify
            >
                <Tab eventKey="home" title="Home">
                    <Row xs={1} sm={2} xl={3} className={`g-4`}>
                        {generalArticles?.map((articles) => (
                            <Col key={articles.url}>
                                <Article article={articles} />
                            </Col>
                        ))}
                    </Row>
                </Tab>
                <Tab eventKey="business" title="Business">
                    <Row xs={1} sm={2} xl={3} className={`g-4`}>
                        {businessArticles?.map((article) => (
                            <Col key={article.url}>
                                <Article article={article} />
                            </Col>
                        ))}
                    </Row>
                </Tab>
                <Tab eventKey="entertainment" title="Entertainment">
                    <Row xs={1} sm={2} xl={3} className={`g-4`}>
                        {entertainmentArticles?.map((articles) => (
                            <Col key={articles.url}>
                                <Article article={articles} />
                            </Col>
                        ))}
                    </Row>
                </Tab>
                <Tab eventKey="general" title="General">
                    <Row xs={1} sm={2} xl={3} className={`g-4`}>
                        {generalArticles?.map((articles) => (
                            <Col key={articles.url}>
                                <Article article={articles} />
                            </Col>
                        ))}
                    </Row>
                </Tab>
                <Tab eventKey="health" title="Health">
                    <Row xs={1} sm={2} xl={3} className={`g-4`}>
                        {healthArticles?.map((articles) => (
                            <Col key={articles.url}>
                                <Article article={articles} />
                            </Col>
                        ))}
                    </Row>
                </Tab>
                <Tab eventKey="science" title="Science">
                    <Row xs={1} sm={2} xl={3} className={`g-4`}>
                        {scienceArticles?.map((articles) => (
                            <Col key={articles.url}>
                                <Article article={articles} />
                            </Col>
                        ))}
                    </Row>
                </Tab>
                <Tab eventKey="sports" title="Sports">
                    <Row xs={1} sm={2} xl={3} className={`g-4`}>
                        {sportsArticles?.map((articles) => (
                            <Col key={articles.url}>
                                <Article article={articles} />
                            </Col>
                        ))}
                    </Row>
                </Tab>
                <Tab eventKey="technology" title="Technology">
                    <Row xs={1} sm={2} xl={3} className={`g-4`}>
                        {technologyArticles?.map((articles) => (
                            <Col key={articles.url}>
                                <Article article={articles} />
                            </Col>
                        ))}
                    </Row>
                </Tab>
            </Tabs>
        </>
    );
};

export default SignedOutView;
