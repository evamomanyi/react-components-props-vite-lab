import Article from "./Article";

/**
 * ArticleList Component
 * Renders all articles dynamically.
 *
 * Connected To:
 * - Parent: App
 * - Child: Article
 */

function ArticleList({ posts }) {
  const articleComponents = posts.map((post) => (

<Article
  key={post.id}
  title={post.title}
  date={post.date}
  preview={post.preview}
  minutes={post.minutes}
/>
  ));
  return <main>{articleComponents}</main>;
}

export default ArticleList;  