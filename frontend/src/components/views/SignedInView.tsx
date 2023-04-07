import { useCallback, useEffect, useState } from "react";
import { Button, ButtonGroup, Col, Row, Tab, Tabs } from "react-bootstrap";
import { ArrowClockwise, GearWideConnected } from "react-bootstrap-icons";
import { getCategory } from "../../api/category";
import { getDefaultNews, getNews } from "../../api/news";
import { News } from "../../models/news";
import { User } from "../../models/user";
import Article from "../cards/Article";
import SettingsModal from "../modals/SettingsModal";
import { ArticlePagination } from "../pagination/ArticlePagination";

interface SignedInViewProps {
    user: User;
}

const SignedInView = ({ user }: SignedInViewProps) => {
    const [articles, setArticles] = useState<News["articles"]>([]);
    const [showSettingsModal, setShowSettingsModal] = useState(false);
    const [settingsChanged, setSettingsChanged] = useState(false);
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
                                setCurrentPage(1);
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
            <Tabs
                defaultActiveKey="home"
                id="category-tabs"
                className="mb-3"
                justify
                onSelect={(key) => {
                    setCurrentPage(1);
                    if (key === "business") {
                        loadBusinessArticles();
                    }
                    if (key === "entertainment") {
                        loadEntertainmentArticles();
                    }
                    if (key === "general") {
                        loadGeneralArticles();
                    }
                    if (key === "health") {
                        loadHealthArticles();
                    }
                    if (key === "science") {
                        loadScienceArticles();
                    }
                    if (key === "sports") {
                        loadSportsArticles();
                    }
                    if (key === "technology") {
                        loadTechnologyArticles();
                    }
                }}
            >
                <Tab eventKey="home" title="Home">
                    <Row xs={1} md={2} xl={3} className={`g-4`}>
                        {articles
                            ?.slice(firstArticleIndex, lastArticleIndex)
                            .map((article, index) => (
                                <Col key={index}>
                                    <Article article={article} />
                                </Col>
                            ))}
                    </Row>
                    <ArticlePagination
                        totalArticles={articles.length}
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
