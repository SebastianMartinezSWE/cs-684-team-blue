import { Button, Card } from "react-bootstrap";
import LinesEllipsis from "react-lines-ellipsis";
import { Article as ArticleModel } from "../../models/news";
import styles from "../../styles/Article.module.css";
import { formatDate } from "../../utils/formatDate";

interface ArticleProps {
  article: ArticleModel;
  className?: string;
}

const Article = ({ article, className }: ArticleProps) => {
  return (
    <Card border="dark" className={`${className}`}>
      <Card.Header>{article.source.name}</Card.Header>
      <Card.Img
        className={styles.cardImage}
        variant="top"
        src={
          article.urlToImage === null
            ? "https://artsmidnorthcoast.com/wp-content/uploads/2014/05/no-image-available-icon-6.png"
            : article.urlToImage
        }
      />
      <Card.Body className={styles.cardBody}>
        <Card.Title className={`h1 ${styles.cardTitle}`}>
          {article.title}
        </Card.Title>
        <Card.Subtitle className={`mb-2 text-muted ${styles.cardTitle}`}>
          {"Published on: " + formatDate(article.publishedAt)}
        </Card.Subtitle>
        <LinesEllipsis
          className={`lead ${styles.cardText}`}
          maxLine="3"
          ellipsis="..."
          trimRight
          basedOn="letters"
          text={
            article.description === null
              ? "Article did not provide a description"
              : article.description
          }
        />
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
