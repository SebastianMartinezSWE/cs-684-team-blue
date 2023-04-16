import { useCallback, useEffect, useState } from "react";
import {
  Button,
  ButtonGroup,
  Col,
  Form,
  Row,
  Tab,
  Tabs,
} from "react-bootstrap";
import { ArrowClockwise, GearWideConnected } from "react-bootstrap-icons";
import { getCategory } from "../../api/category";
import { getNews } from "../../api/news";
import { News } from "../../models/news";
import { User } from "../../models/user";
import Article from "../card/Article";
import SettingsModal from "../modal/SettingsModal";
import { ArticlePagination } from "../pagination/ArticlePagination";

interface UserViewProps {
  user: User;
}

type ArticlesState = {
  [key: string]: News["articles"];
};

const UserView = ({ user }: UserViewProps) => {
  const [articles, setArticles] = useState<News["articles"]>([]);
  const [showSettingsModal, setShowSettingsModal] = useState(false);
  const [settingsChanged, setSettingsChanged] = useState(false);
  const [categoryArticles, setCategoryArticles] = useState<ArticlesState>({});
  const [currentPage, setCurrentPage] = useState(1);

  const categories = [
    "business",
    "entertainment",
    "general",
    "health",
    "science",
    "sports",
    "technology",
  ];

  async function loadCategoryArticles(category: string) {
    try {
      const news = await getCategory(category);
      setCategoryArticles((prevState) => ({
        ...prevState,
        [category]: news.articles,
      }));
    } catch (error) {
      console.error(error);
      alert(error);
    }
  }

  const handlePageChange = useCallback((page: number) => {
    setCurrentPage(page);
  }, []);

  const articlesPerPage = 20;

  const lastArticleIndex = currentPage * articlesPerPage;
  const firstArticleIndex = lastArticleIndex - articlesPerPage;

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
        <Col>
          <Form className="d-flex">
            <Form.Control
              type="search"
              name="searchQuery"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button type="submit" variant="outline-success">
              Search
            </Button>
          </Form>
        </Col>
      </Row>
      <Tabs
        defaultActiveKey="home"
        id="category-tabs"
        className="mb-3"
        justify
        onSelect={(key) => {
          setCurrentPage(1);
          if (key !== null) {
            loadCategoryArticles(key);
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
        {categories.map((category) => (
          <Tab
            key={category}
            eventKey={category}
            title={category[0].toUpperCase() + category.slice(1)}
          >
            <Row xs={1} sm={2} xl={3} className={`g-4`}>
              {categoryArticles[category]
                ?.slice(firstArticleIndex, lastArticleIndex)
                .map((article) => (
                  <Col key={article.url}>
                    <Article article={article} />
                  </Col>
                ))}
            </Row>
            <ArticlePagination
              totalArticles={categoryArticles[category]?.length ?? 0}
              articlesPerPage={articlesPerPage}
              currentPage={currentPage}
              onPageChange={handlePageChange}
            />
          </Tab>
        ))}
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

export default UserView;
