import { useEffect, useState } from "react";
import Button from "../../components/Button/Button";
import ModalMovies from "../../composition/Movies/components/ModalMovies/ModalMovies";
import PosterCard from "../../components/PosterCard/PosterCard";
import { API_URL, IMG_URL, API_KEY_3 } from "./../../configs/api";
import { sendRequestAxios } from "../../helpers/sendRequestAxios";
import Container from "../../layout/Container/Container";

import "./AllTvPage.scss";

const AllTvPage = ({ onFavorite, favorite }) => {
  const [data, setData] = useState({});
  const [results, setResults] = useState([]);
  const [page, setPage] = useState(1);
  const [currentPost, setCurrentPost] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  const isDeleteFavorite = favorite.some((post) => post.id === currentPost.id);

  const handlePages = () => {
    setPage(page + 1);
  };

  const handleModal = () => {
    setIsOpen(!isOpen);
  };

  const handleCurrentPost = (post) => {
    setCurrentPost(post);
    handleModal();
  };

  const handleSetFavorite = () => {
    onFavorite(currentPost);
    handleModal();
  };

  useEffect(() => {
    sendRequestAxios(
      `${API_URL}/discover/tv?api_key=${API_KEY_3}&language=uk-UA&page=${page}`
    ).then((data) => {
      setData(data);
      setResults(data.results);
    });
  }, []);

  useEffect(() => {
    if (page === 1) return;

    sendRequestAxios(
      `${API_URL}/discover/tv?api_key=${API_KEY_3}&language=uk-UA&page=${page}`
    ).then((data) => {
      setResults((prev) => {
        const prevIds = new Set(prev.map((m) => m.id));
        const uniques = data.results.filter((m) => !prevIds.has(m.id));
        return [...prev, ...uniques];
      });
      setData(data);
    });
  }, [page]);

  //   console.log("results", results);

  return (
    <Container>
      <div className="g-page">
        <div className="posters-wrapper">
          {results.map((item) => (
            <PosterCard
              poster={item}
              key={item.id}
              onClick={() => handleCurrentPost(item)}
            />
          ))}
        </div>
        <div className="pagination">
          <p className="pagination-page">
            {results.length} із {data?.total_results || 0}
          </p>
          <Button onClick={handlePages}>Показати ще</Button>
        </div>
        <ModalMovies
          isOpen={isOpen}
          onClose={handleModal}
          data={currentPost}
          onClick={handleSetFavorite}
          isDelete={isDeleteFavorite}
        />
      </div>
    </Container>
  );
};
export default AllTvPage;
