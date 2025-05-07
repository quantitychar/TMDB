import { useEffect, useState } from "react";
import Button from "../../components/Button/Button";
// import ModalMovies from '@/composition/ModalMovies/ModalMovies';
import PosterCard from "../../components/PosterCard/PosterCard";
import { API_URL, IMG_URL, API_KEY_3 } from "./../../configs/api";
import { sendRequestAxios } from "../../helpers/sendRequestAxios";
import Container from "../../layout/Container/Container";

import "./AllCinemaPage.scss";

const AllCinemaPage = () => {
  const [data, setData] = useState({});
  const [results, setResults] = useState([]);
  const [page, setPage] = useState(1);

  const handlePages = () => {
    setPage(page + 1);
  };
  console.log(page);

  useEffect(() => {
    sendRequestAxios(
      `${API_URL}/discover/movie?api_key=${API_KEY_3}&language=uk-UA&page=1`
    ).then((data) => {
      setData(data); // метадані
      setResults(data.results);
    });
  }, []);

  useEffect(() => {
    if (page === 1) return;

    sendRequestAxios(
      `${API_URL}/discover/movie?api_key=${API_KEY_3}&language=uk-UA&page=${page}`
    ).then((data) => {
      setResults((prev) => {
        const prevIds = new Set(prev.map((m) => m.id));
        const uniques = data.results.filter((m) => !prevIds.has(m.id));
        return [...prev, ...uniques];
      });
      setData(data);
    });
  }, [page]);

  console.log("results", results);

  return (
    <Container>
      <div className="g-page">
        <div className="posters-wrapper">
          {results.map((item) => (
            <PosterCard poster={item} key={item.id} />
          ))}
        </div>
        <div className="pagination">
          <p className="pagination-page">
            {results.length} із {data?.total_results || 0}
          </p>
          <Button onClick={handlePages}>Показати ще</Button>
        </div>
        {/* <ModalMovies /> */}
      </div>
    </Container>
  );
};
export default AllCinemaPage;
