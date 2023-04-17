import { useCallback, useEffect, useState } from "react";
import { Button, ButtonGroup, Col, Container, Row } from "react-bootstrap";
import { ArrowLeft } from "react-bootstrap-icons";
import { useLocation, useNavigate } from "react-router-dom";
import { getArticlesSearched } from "../api/search";
import Article from "../components/card/Article";
import { ArticlePagination } from "../components/pagination/ArticlePagination";
import { News } from "../models/news";
import { User } from "../models/user";

interface HomePageProps {
  signedInUser: User | null;
}

const SearchResultsPage = () => {
  const [articles, setArticles] = useState<News["articles"]>([]);
  const [totalResults, setTotalResults] = useState<News["totalResults"]>();
  const [currentPage, setCurrentPage] = useState(1);

  const { state } = useLocation();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  const handlePageChange = useCallback((page: number) => {
    setCurrentPage(page);
  }, []);

  const articlesPerPage = 20;

  const lastArticleIndex = currentPage * articlesPerPage;
  const firstArticleIndex = lastArticleIndex - articlesPerPage;

  useEffect(() => {
    async function loadArticles() {
      try {
        const news = await getArticlesSearched(state.searchQuery);
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
      <Container>
        <h1>Showing Results for "{state.searchQuery}"</h1>
        <Row className="d-flex justify-content-between bd-highlight mb-3">
          <Col xs="auto">
            <ButtonGroup aria-label="Refresh-Settings">
              <Button variant="outline-primary" onClick={handleClick}>
                <ArrowLeft /> Back
              </Button>
            </ButtonGroup>
          </Col>
          <Col xs="auto">
            <h5>Total Results: {totalResults}</h5>
          </Col>
        </Row>
        <Row xs={1} sm={2} xl={3} className={`g-4`}>
          {articles
            ?.slice(firstArticleIndex, lastArticleIndex)
            .map((article) => (
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
      </Container>
    </>
  );
};

export default SearchResultsPage;
