import { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { News } from "../../models/news";
import Article from "../cards/Article";
import styles from "../../styles/NewsPage.module.css";
import styleUtil from "../../styles/utils/util.module.css";
import { getNews } from "../../api/news";

const SignedOutView = () => {
  const [articles, setArticles] = useState<News["articles"]>([]);

  useEffect(() => {
    async function loadArticles() {
      try {
        const news = await getNews();
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
      <Container fluid>
        <h1
          className={`display-1 mt-4 mb-2 text-center text-white font-weight-bold`}
        >
          General News
        </h1>
        <Button className={`mb-4 ${styleUtil.centerItem}`} onClick={() => {}}>
          Refresh
        </Button>
        <Row xs={1} md={2} xl={3} className={`g-4`}>
          {articles.map((article) => (
            <Col key={article.title}>
              <Article className={styles.article} article={article} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default SignedOutView;
