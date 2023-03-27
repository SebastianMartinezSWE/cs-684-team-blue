import { Card } from "react-bootstrap";
import { Article as ArticleModel } from "../../models/news";
import styles from "../../styles/Article.module.css";
import { formatDate } from "../../utils/FormatDate";

interface ArticleProps {
  article: ArticleModel;
}

const Article = ({ article }: ArticleProps) => {
  return (
    <a href={article.url} target="_blank" rel="noreferrer">
      <Card className="h-100">
        <Card.Img
          className={styles.image}
          variant="top"
          src={
            article.urlToImage === null
              ? "https://artsmidnorthcoast.com/wp-content/uploads/2014/05/no-image-available-icon-6.png"
              : article.urlToImage
          }
        />
        <Card.Body>
          <Card.Title className="h1 text-center">{article.title}</Card.Title>
          <Card.Subtitle className={`text-muted text-center`}>
            {"Published on: " + formatDate(article.publishedAt)}
          </Card.Subtitle>
          <Card.Text>{article.description}</Card.Text>
        </Card.Body>
      </Card>
    </a>
  );
};

export default Article;
