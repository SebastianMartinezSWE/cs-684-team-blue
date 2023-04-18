import { FormEvent, useCallback, useEffect, useState } from "react";
import {
  Alert,
  Button,
  ButtonGroup,
  Col,
  Form,
  Row,
  Tab,
  Tabs,
} from "react-bootstrap";
import { ArrowClockwise, GearWideConnected } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";
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
  const [articles, setArticles] = useState<ArticlesState>({});
  const [showSettingsModal, setShowSettingsModal] = useState(false);
  const [settingsChanged, setSettingsChanged] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const categories = [
    "home",
    "business",
    "entertainment",
    "general",
    "health",
    "science",
    "sports",
    "technology",
  ];

  async function loadArticles(category: string) {
    try {
      const news =
        category === "home"
          ? await getNews(user.username)
          : await getCategory(category);
      setArticles((prevState) => ({
        ...prevState,
        [category]: news.articles,
      }));
      setSettingsChanged(false);
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

  const navigate = useNavigate();

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!searchQuery) {
      setShowAlert(true);
    } else {
      setShowAlert(false);
      navigate("/search", {
        state: { searchQuery },
      });
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchQuery(value);
  };

  useEffect(() => {
    loadArticles("home");
  }, [settingsChanged]);

  return (
    <>
      {showAlert && (
        <Alert variant="warning">Please enter a valid search query!</Alert>
      )}
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
          <Form className="d-flex" onSubmit={handleSubmit}>
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={handleChange}
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
            loadArticles(key);
          }
        }}
      >
        {categories.map((category) => (
          <Tab
            key={category}
            eventKey={category}
            title={category[0].toUpperCase() + category.slice(1)}
          >
            <Row xs={1} sm={2} xl={3} className={`g-4`}>
              {articles[category]
                ?.slice(firstArticleIndex, lastArticleIndex)
                .map((article, index) => (
                  <Col key={index}>
                    <Article article={article} />
                  </Col>
                ))}
            </Row>
            <ArticlePagination
              totalArticles={articles[category]?.length ?? 0}
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
