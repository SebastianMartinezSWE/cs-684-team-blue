import { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { News } from "../../models/news";
import Article from "../cards/Article";
import styles from "../../styles/NewsPage.module.css";
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
      <div role="feed" className={styles.background}>
        <Container className={styles.articlePage} fluid>
          <h1 className={styles.h1}>General News</h1>
          <Container className={styles.button}>
            <Button variant="primary">Refresh</Button>
          </Container>
          <Row
            role="article-grid"
            xs={1}
            md={2}
            xl={3}
            className={`g-5 ${styles.articleGrid}`}
          >
            {articles.map((article) => (
              <Col key={article.title}>
                <Article className={styles.article} article={article} />
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </>
  );
};

export default SignedOutView;
