import "./error.css";
import { Link } from "react-router-dom";

export default function Error() {
  return (
    <div className="container-error">
      <img src="/not-found.png" alt="Paste your link to shorten" />
      <h1>Paste your link to shorten</h1>
      <Link to="/">
        home
      </Link>
    </div>
  )
}