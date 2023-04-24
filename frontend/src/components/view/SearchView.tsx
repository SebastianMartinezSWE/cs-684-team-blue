import { FormEvent, useCallback, useEffect, useState } from "react";
import { Alert, Button, ButtonGroup, Col, Form, Row } from "react-bootstrap";
import { ArrowLeft } from "react-bootstrap-icons";
import { useLocation, useNavigate } from "react-router-dom";
import { getArticlesSearched } from "../../api/search";
import { News } from "../../models/news";
import Article from "../card/Article";
import { ArticlePagination } from "../pagination/ArticlePagination";

const SearchView = () => {
  const [articles, setArticles] = useState<News["articles"]>([]);
  const [totalResults, setTotalResults] = useState<News["totalResults"]>();
  const [currentPage, setCurrentPage] = useState(1);
  const [query, setQuery] = useState("");
  const [newQuery, setNewQuery] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const { state } = useLocation();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
    setQuery("");
  };

  const handlePageChange = useCallback((page: number) => {
    setCurrentPage(page);
  }, []);

  const articlesPerPage = 20;

  const lastArticleIndex = currentPage * articlesPerPage;
  const firstArticleIndex = lastArticleIndex - articlesPerPage;

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!newQuery) {
      setShowAlert(true);
    } else {
      setShowAlert(false);
      try {
        const news = await getArticlesSearched(newQuery);
        setQuery(newQuery);
        setArticles(news.articles);
        setTotalResults(news.totalResults);
      } catch (error) {
        console.error(error);
        alert(error);
      }
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setNewQuery(value);
  };

  useEffect(() => {
    async function loadArticles() {
      try {
        const news = await getArticlesSearched(state.searchQuery);
        setQuery(state.searchQuery);
        setArticles(news.articles);
        setTotalResults(news.totalResults);
      } catch (error) {
        console.error(error);
        alert(error);
      }
    }
    loadArticles();
  }, []);

  return (
    <>
      <h1>Showing Results for "{query}"</h1>
      {showAlert && (
        <Alert variant="warning">Please enter a valid search query!</Alert>
      )}
      <Row className="d-flex justify-content-between bd-highlight mb-3">
        <Col xs="auto">
          <ButtonGroup aria-label="Refresh-Settings">
            <Button variant="outline-primary" onClick={handleClick}>
              <ArrowLeft /> Back
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
        <Col xs="auto">
          <h5>Total Results: {totalResults}</h5>
        </Col>
      </Row>
      <Row xs={1} sm={2} xl={3} className={`g-4`}>
        {articles?.slice(firstArticleIndex, lastArticleIndex).map((article) => (
          <Col key={article.url}>
            <Article article={article} />
          </Col>
        ))}
      </Row>
      <ArticlePagination
        totalArticles={articles.length}
        articlesPerPage={articlesPerPage}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </>
  );
};

export default SearchView;
