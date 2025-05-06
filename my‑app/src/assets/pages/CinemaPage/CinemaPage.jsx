import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import Container from "../../layout/Container/Container";
// import { ArrowIcon } from "./icons/left-arrow.svg";
import { API_URL, IMG_URL, API_KEY_3 } from "./../../configs/api";
import { sendRequestAxios } from "../../helpers/sendRequestAxios";
import "./CinemaPage.scss";

const CinemaPage = () => {
  const [data, setData] = useState({});
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    sendRequestAxios(
      `${API_URL}/movie/${id}?api_key=${API_KEY_3}&language=uk-UA`
    ).then((data) => {
      setData(data);
    });
  }, []);

  const {
    backdrop_path,
    poster_path,
    original_title,
    title,
    genres = [],
    runtime,
    overview,
    release_date,
  } = data;

  const handleGoBack = () => {
    navigate(-1);
    // navigate("/")
  };

  return (
    <header className="page-movie-header">
      <div
        className="header-bg"
        style={{ backgroundImage: `url(${IMG_URL}${backdrop_path})` }}
      />
      <Container>
        <div className="header-wrapper">
          <span className="btn-back" onClick={handleGoBack}>
            <ArrowIcon />
          </span>
          <div className="header-poster">
            <img
              className="image"
              src={`${IMG_URL}${poster_path}`}
              alt={title}
            />
          </div>
          <div className="header-content">
            <p className="movie-name">{title}</p>
            <p className="movie-subname">
              <i>{original_title}</i>
            </p>
            <p className="movie-info">
              <span className="genres">
                <span>{name},</span>
              </span>
              <span className="runtime">{runtime}</span>
            </p>
            <p className="movie-overview">{overview}</p>
            <p className="movie-created">Release date: {release_date}</p>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default CinemaPage;
