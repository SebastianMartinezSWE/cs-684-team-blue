import { Button, Card } from "react-bootstrap";
import { Article as ArticleModel } from "../../models/news";
import styles from "../../styles/Article.module.css";
import { formatDate } from "../../utils/formatDate";

interface ArticleProps {
  article: ArticleModel;
  className?: string;
}

const Article = ({ article, className }: ArticleProps) => {
  return (
    <Card className={`${styles.articleCard} ${className}`}>
      <Card.Header>{article.source.name}</Card.Header>
      <Card.Img className={styles.img} variant="top" src={article.urlToImage} />
      <Card.Body className={styles.cardBody}>
        <Card.Title className={styles.cardTitle}>{article.title}</Card.Title>
        <Card.Subtitle className={`mb-2 text-muted ${styles.cardTitle}`}>
          {"Published on: " + formatDate(article.publishedAt)}
        </Card.Subtitle>
        <Card.Text className={styles.cardText}>{article.description}</Card.Text>
      </Card.Body>
      <Button
        href={article.url}
        target="_blank"
        rel="noreferrer"
        variant="primary"
      >
        Read article
      </Button>
    </Card>
  );
};

export default Article;
