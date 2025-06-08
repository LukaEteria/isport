import React from "react";
import { useParams } from "react-router-dom";
import mainArticles from "../data/cardsData.json";
import newsArticles from "../data/News.json";
import "./ArticlePage.css";
import "../App.css";


import Reclamscomponenet from "./Reclamscomponenet";
import Reclamtwo from "./Reclamtwo";
import Header from "./Header";

function getTimeAgo(dateString) {
  if (!dateString) return null;
  const now = new Date();
  const postedDate = new Date(dateString);
  const diffMs = now - postedDate;
  const diffMins = Math.floor(diffMs / (1000 * 60));
  const diffHours = Math.floor(diffMins / 60);

  if (diffMins < 1) return "ახლახანს";
  if (diffMins < 60) return `${diffMins} წუთს წინ`;
  if (diffHours < 24) return `${diffHours} საათს წინ`;

  const days = Math.floor(diffHours / 24);
  return `${days} დღს წინ`;
}

function ArticlePage() {
  const { id } = useParams();

  const allArticles = [...mainArticles, ...newsArticles];
  const article = allArticles.find((a) => String(a.id) === id);

  if (!article) return <div style={{ padding: 50 }}>სტატია ვერ მოიძებნა</div>;

  const timeAgo = getTimeAgo(article.date);

  return (
    <section>
      <Reclamscomponenet />
      <Header />
      <div className="article-page">
        <Reclamtwo />
        <div className="post_content">
          <div className="post">
            {/* ვიდეო ან ფოტო */}
            {article.video ? (
              <video
                controls
                style={{ width: "100%", maxHeight: "500px", margin: "20px 0", borderRadius: "12px" }}
              >
                <source src={article.video} type="video/mp4" />
                თქვენი ბრაუზერი არ უჭერს მხარს ვიდეოს.
              </video>
            ) : (
              article.image && (
                <img
                  src={article.image}
                  alt={article.title}
                  style={{ width: "100%", margin: "20px 0", borderRadius: "12px" }}
                />
              )
            )}

            {/* დრო საათის სიმბოლოთი */}
            {timeAgo && (
              <p style={{ margin: "10px 0", color: "#888", fontSize: "14px" }}>
                🕒 {timeAgo}
              </p>
            )}

            <h1 className="post_titles" >{article.title}</h1>
            <p className="Post-p" >{article.fullText}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ArticlePage;
