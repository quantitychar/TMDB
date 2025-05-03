import { useState, useEffect } from "react";
import { sendRequest } from "../../helpers/sendRequest";
import { sendRequestAxios } from "../../helpers/sendRequestAxios";
import { API_URL, API_KEY_3 } from "../../configs/api";
import Movies from "../../composition/Movies/Movies";
import ModalMovies from "../../composition/Movies/components/ModalMovies/ModalMovies";

const Home = (props) => {
  const { favorite, onFavorite } = props;
  const [modalImg, setModalImg] = useState(false);
  const [modalText, setModalText] = useState(false);
  const [tv, setTv] = useState([]);
  const [movie, setMovie] = useState([]);
  const [currentFilm, setCurrentFilm] = useState({});
  const [modalMovie, setModalMovie] = useState(false);

  const handleModalImage = () => {
    setModalImg(!modalImg);
  };

  const handleModalText = () => {
    setModalText(!modalText);
  };

  const handleModalMovie = () => {
    /// функйція яка відкриває і закриває модальне вікно
    setModalMovie(!modalMovie);
  };

  const handleCurrentFilm = (item) => {
    /// item це обект який приходить з компонента MovieItem
    setModalMovie(!modalMovie); /// відкриваємо модальне вікно
    setCurrentFilm(item); /// записуємо в стейт currentFilm обект який приходить з компонента MovieItem (активний фільм який ми клікнули)
  };

  const handleFavorite = (item) => {
    console.log("CLICK ➡️ item:", item);
    onFavorite(item); /// викликаємо функцію яка прийшла з App.jsx і передаємо в неї активний фільм

    // localStorage.setItem("favorite", JSON.stringify([...favorite, item]))
    // console.log("favorite",favorite)
    // console.log("active item",item)

    setModalMovie(!modalMovie); /// закриваємо модальне вікно
  };

  // https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc
  //`${API_URL}/discover/tv?api_key=${API_KEY_3}&language=uk-UA`
  //`${API_URL}/discover/movie?api_key=${API_KEY_3}&language=uk-UA`

  const getData = async () => {
    // const dataTV = await sendRequest(`${API_URL}/discover/tv?api_key=${API_KEY_3}&language=uk-UA`)
    // const dataMovie = await sendRequest(`${API_URL}/discover/movie?api_key=${API_KEY_3}&language=uk-UA`)
    // const dataPublic = await sendRequest("data.json")
    const dataTV = await sendRequestAxios(
      `${API_URL}/discover/tv?api_key=${API_KEY_3}&language=uk-UA`
    );
    const dataMovie = await sendRequestAxios(
      `${API_URL}/discover/movie?api_key=${API_KEY_3}&language=uk-UA`
    );
    // const dataPublic = await sendRequestAxios("data.json")
    setTv(dataTV.results);
    setMovie(dataMovie.results);
    // console.log("dataPublic",dataPublic);
  };

  useEffect(() => {
    getData();
  }, []);
  // console.log("movie",movie)
  // console.log("tv",tv)
  console.log("favorite", favorite);

  const isDelete = favorite.some((el) => el.id === currentFilm.id);

  return (
    <>
      <Movies
        data={{
          dataTv: tv,
          dataMovie: movie,
        }}
        onCurrentFilm={handleCurrentFilm} // передаємо функцію яка буде відкривати модальне вікно з активним фільмом
      />
      <ModalMovies
        isOpen={modalMovie}
        isDelete={isDelete}
        onClick={() => handleFavorite(currentFilm)}
        onClose={handleModalMovie}
        data={currentFilm}
      />
    </>
  );
};

export default Home;
