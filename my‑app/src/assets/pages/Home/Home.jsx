import { useState, useEffect } from "react";
import { sendRequest } from "../../helpers/sendRequest";
import { sendRequestAxios } from "../../helpers/sendRequestAxios";
import ModalImage from "../../components/ModalImage/ModalImage";
import ModalText from "../../components/ModalText/ModalText";
import Footer from "../../composition/Footer/Footer";
import Header from "../../composition/Header/Header";
import Container from "../../layout/Container/Container";
import { API_URL, API_KEY_3 } from "../../configs/api";

const Home = (props) => {
  const [modalImg, setModalImg] = useState(false);
  const [modalText, setModalText] = useState(false);
  const [tv, setTv] = useState([]);
  const [movie, setMovie] = useState([]);
  const [favorite, setFavorite] = useState(0);

  const handleModalImage = () => {
    setModalImg(!modalImg);
  };

  const handleModalText = () => {
    setModalText(!modalText);
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
  console.log("movie", movie);
  console.log("tv", tv);

  return (
    <div className="g-app">
      <Header count={favorite} />
      <main className="g-content">
        <Container>
          <button type="button" onClick={handleModalImage}>
            ModalImage
          </button>
          <button type="button" onClick={handleModalText}>
            ModalText
          </button>

          <ModalImage isOpen={modalImg} onClick={handleModalImage} />
          <ModalText isOpen={modalText} onClick={handleModalText} />
        </Container>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
