import { useEffect, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { getNews } from "../../api/news";
import { News } from "../../models/news";
// import styleUtil from "../../styles/utils/util.module.css";
import Article from "../cards/Article";
// import styleUtil from "../../styles/utils/util.module.css";
import styles from "../../styles/NewsPage.module.css";

const SignedInView = () => {
  const [articles, setArticles] = useState<News["articles"]>([]);

  useEffect(() => {
    async function loadArticles() {
      try {
        const news = await getNews("default");
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
      <h1
        className={`display-1 mt-4 mb-2 text-center text-white font-weight-bold`}
      >
        General News
      </h1>
      <Row className="mb-4 justify-content-md-center">
        <Col xs="auto">
          <Button onClick={() => {}}>Refresh</Button>
        </Col>
        <Col xs="auto">
          <Button onClick={() => {}}>Settings</Button>
        </Col>
      </Row>
      <Row xs={1} md={2} xl={3} className={`g-4`}>
        {articles?.map((article) => (
          <Col key={article.title}>
            <Article className={styles.article} article={article} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default SignedInView;
