import { useCallback, useEffect, useState } from "react";
import { Button, ButtonGroup, Col, Row, Tab, Tabs } from "react-bootstrap";
import { ArrowClockwise } from "react-bootstrap-icons";
import { getCategory } from "../../api/category";
import { getDefaultNews } from "../../api/news";
import { News } from "../../models/news";
import Article from "../cards/Article";
import { ArticlePagination } from "../pagination/ArticlePagination";

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
    const [currentPage, setCurrentPage] = useState(1);

    const handlePageChange = useCallback((page: number) => {
        setCurrentPage(page);
    }, []);

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
            const news = await getCategory("entertainment");
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
            const news = await getCategory("health");
            setHealthArticles(news.articles);
        } catch (error) {
            console.error(error);
            alert(error);
        }
    }

    async function loadScienceArticles() {
        try {
            const news = await getCategory("science");
            setScienceArticles(news.articles);
        } catch (error) {
            console.error(error);
            alert(error);
        }
    }

    async function loadSportsArticles() {
        try {
            const news = await getCategory("sports");
            setSportsArticles(news.articles);
        } catch (error) {
            console.error(error);
            alert(error);
        }
    }

    async function loadTechnologyArticles() {
        try {
            const news = await getCategory("technology");
            setTechnologyArticles(news.articles);
        } catch (error) {
            console.error(error);
            alert(error);
        }
    }

    useEffect(() => {
        loadGeneralArticles();
        loadBusinessArticles();
        loadEntertainmentArticles();
        loadHealthArticles();
        loadScienceArticles();
        loadSportsArticles();
        loadTechnologyArticles();
    }, []);

    const articlesPerPage = 20;

    const lastArticleIndex = currentPage * articlesPerPage;
    const firstArticleIndex = lastArticleIndex - articlesPerPage;

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
                onSelect={() => {
                    setCurrentPage(1);
                }}
            >
                <Tab eventKey="home" title="Home">
                    <Row xs={1} sm={2} xl={3} className={`g-4`}>
                        {generalArticles
                            ?.slice(firstArticleIndex, lastArticleIndex)
                            .map((articles) => (
                                <Col key={articles.url}>
                                    <Article article={articles} />
                                </Col>
                            ))}
                    </Row>
                    <ArticlePagination
                        totalArticles={generalArticles.length}
                        articlesPerPage={20}
                        currentPage={currentPage}
                        onPageChange={handlePageChange}
                    />
                </Tab>
                <Tab eventKey="business" title="Business">
                    <Row xs={1} sm={2} xl={3} className={`g-4`}>
                        {businessArticles
                            ?.slice(firstArticleIndex, lastArticleIndex)
                            .map((article) => (
                                <Col key={article.url}>
                                    <Article article={article} />
                                </Col>
                            ))}
                    </Row>
                    <ArticlePagination
                        totalArticles={businessArticles.length}
                        articlesPerPage={20}
                        currentPage={currentPage}
                        onPageChange={handlePageChange}
                    />
                </Tab>
                <Tab eventKey="entertainment" title="Entertainment">
                    <Row xs={1} sm={2} xl={3} className={`g-4`}>
                        {entertainmentArticles
                            ?.slice(firstArticleIndex, lastArticleIndex)
                            .map((articles) => (
                                <Col key={articles.url}>
                                    <Article article={articles} />
                                </Col>
                            ))}
                    </Row>
                    <ArticlePagination
                        totalArticles={entertainmentArticles.length}
                        articlesPerPage={20}
                        currentPage={currentPage}
                        onPageChange={handlePageChange}
                    />
                </Tab>
                <Tab eventKey="general" title="General">
                    <Row xs={1} sm={2} xl={3} className={`g-4`}>
                        {generalArticles
                            ?.slice(firstArticleIndex, lastArticleIndex)
                            .map((articles) => (
                                <Col key={articles.url}>
                                    <Article article={articles} />
                                </Col>
                            ))}
                    </Row>
                    <ArticlePagination
                        totalArticles={generalArticles.length}
                        articlesPerPage={20}
                        currentPage={currentPage}
                        onPageChange={handlePageChange}
                    />
                </Tab>
                <Tab eventKey="health" title="Health">
                    <Row xs={1} sm={2} xl={3} className={`g-4`}>
                        {healthArticles
                            ?.slice(firstArticleIndex, lastArticleIndex)
                            .map((articles) => (
                                <Col key={articles.url}>
                                    <Article article={articles} />
                                </Col>
                            ))}
                    </Row>
                    <ArticlePagination
                        totalArticles={healthArticles.length}
                        articlesPerPage={20}
                        currentPage={currentPage}
                        onPageChange={handlePageChange}
                    />
                </Tab>
                <Tab eventKey="science" title="Science">
                    <Row xs={1} sm={2} xl={3} className={`g-4`}>
                        {scienceArticles
                            ?.slice(firstArticleIndex, lastArticleIndex)
                            .map((articles) => (
                                <Col key={articles.url}>
                                    <Article article={articles} />
                                </Col>
                            ))}
                    </Row>
                    <ArticlePagination
                        totalArticles={scienceArticles.length}
                        articlesPerPage={20}
                        currentPage={currentPage}
                        onPageChange={handlePageChange}
                    />
                </Tab>
                <Tab eventKey="sports" title="Sports">
                    <Row xs={1} sm={2} xl={3} className={`g-4`}>
                        {sportsArticles
                            ?.slice(firstArticleIndex, lastArticleIndex)
                            .map((articles) => (
                                <Col key={articles.url}>
                                    <Article article={articles} />
                                </Col>
                            ))}
                    </Row>
                    <ArticlePagination
                        totalArticles={sportsArticles.length}
                        articlesPerPage={20}
                        currentPage={currentPage}
                        onPageChange={handlePageChange}
                    />
                </Tab>
                <Tab eventKey="technology" title="Technology">
                    <Row xs={1} sm={2} xl={3} className={`g-4`}>
                        {technologyArticles
                            ?.slice(firstArticleIndex, lastArticleIndex)
                            .map((articles) => (
                                <Col key={articles.url}>
                                    <Article article={articles} />
                                </Col>
                            ))}
                    </Row>
                    <ArticlePagination
                        totalArticles={technologyArticles.length}
                        articlesPerPage={20}
                        currentPage={currentPage}
                        onPageChange={handlePageChange}
                    />
                </Tab>
            </Tabs>
        </>
    );
};

export default SignedOutView;
