import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import Container from "../../layout/Container/Container";
import { API_URL, IMG_URL, API_KEY_3 } from "../../configs/api";
import { sendRequestAxios } from "../../helpers/sendRequestAxios";
import defaultImage from "./icons/image.svg";
import ArrowIcon from "./icons/left-arrow.svg";
import "./TvPage.scss";

const TvPage = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  const navigate = useNavigate();

  const handleBack = () => navigate(-1);

  useEffect(() => {
    sendRequestAxios(
      `${API_URL}/tv/${id}?api_key=${API_KEY_3}&language=uk-UA`
    ).then((data) => {
      setData(data);
    });
  }, []);

  const {
    backdrop_path,
    poster_path,
    name,
    original_name,
    runtime,
    first_air_date,
    genres = [], // => {name}
    episode_run_time,
    overview,
    created_by = [],
    seasons = [], // => {air_date,episode_count,name,poster_path}
    last_episode_to_air,
    next_episode_to_air,
  } = data;

  return (
    <>
      <header className="page-tv-header">
        <div
          className="header-bg"
          style={{ backgroundImage: `url(${IMG_URL}${backdrop_path})` }}
        />
        <Container>
          <div className="header-wrapper">
            <span className="btn-back" onClick={handleBack}>
              <img src={ArrowIcon} />
            </span>
            <div className="header-poster">
              <img
                className="image"
                src={`${IMG_URL}${poster_path}`}
                alt={name}
              />
            </div>
            <div className="header-content">
              <p className="movie movie-name">{name}</p>
              <p className="movie movie-subname">
                <i>{original_name}</i>
              </p>
              <p className="movie movie-info">
                <span className="genres">
                  {genres.map(({ name }, index) => (
                    <span key={index}>{name},</span>
                  ))}
                </span>
                <span className="runtime">
                  {next_episode_to_air?.runtime && (
                    <>{next_episode_to_air?.runtime}хв.</>
                  )}
                </span>
              </p>
              <p className="movie movie-overview">{overview}</p>
              <p className="movie movie-created">
                Release date: {first_air_date}
              </p>
            </div>
          </div>
        </Container>
      </header>
      <div className="page-movie-content">
        <Container>
          <p className="content-title">Seasons</p>
          <div className="cards-seasons">
            {/* { seasons {air_date,episode_count,name,poster_path} } */}
            {seasons.map((season, index) => (
              <div className="card" key={index}>
                <div className="card-post">
                  <img
                    src={
                      season.poster_path
                        ? `${IMG_URL}${season.poster_path}`
                        : defaultImage
                    }
                    alt={season.name}
                  />
                </div>
                <div className="card-content">
                  <p className="card-name">{season.name}</p>
                  <p className="card-info">
                    <span>{season.air_date}</span> |{" "}
                    <span>{season.episode_count} episodes</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
          <p className="content-title">Episodes</p>
          <div className="cards-episodes">
            <div className="episode-item episodes-last">
              <div className="episode-wrapper">
                <div className="episode-post">
                  <img
                    src={
                      last_episode_to_air?.still_path
                        ? `${IMG_URL}${last_episode_to_air?.still_path}`
                        : defaultImage
                    }
                    alt={last_episode_to_air?.name}
                  />
                </div>
                <div className="episode-content">
                  <p className="episode-name">
                    Episodes name: {last_episode_to_air?.name}
                  </p>
                  <p className="episode-date">
                    <i>Episodes date: {last_episode_to_air?.air_date}</i>
                  </p>
                  <p className="episode-info">
                    Season: {last_episode_to_air?.season_number} Episode:
                    {last_episode_to_air?.episode_number}{" "}
                    {last_episode_to_air?.runtime && (
                      <>Runtime: {last_episode_to_air?.runtime}</>
                    )}
                  </p>
                  <p className="episode-overview">
                    {last_episode_to_air?.overview}
                  </p>
                </div>
              </div>
            </div>
            <div className="episode-item episodes-next">
              <div className="episode-wrapper">
                <div className="episode-post">
                  <img
                    src={
                      next_episode_to_air?.still_path
                        ? `${IMG_URL}${next_episode_to_air?.still_path}`
                        : defaultImage
                    }
                    alt={next_episode_to_air?.name}
                  />
                </div>
                <div className="episode-content">
                  <p className="episode-name">
                    Episodes name: {next_episode_to_air?.name}
                  </p>
                  <p className="episode-date">
                    <i>Episodes date: {next_episode_to_air?.air_date}</i>
                  </p>
                  <p className="episode-info">
                    Season: {next_episode_to_air?.season_number} Episode:
                    {next_episode_to_air?.episode_number}{" "}
                    {next_episode_to_air?.runtime && (
                      <>Runtime: {next_episode_to_air?.runtime}</>
                    )}
                  </p>
                  <p className="episode-overview">
                    {next_episode_to_air?.overview}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default TvPage;
