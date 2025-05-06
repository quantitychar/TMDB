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
      `${API_URL}/discover/movie?api_key=${API_KEY_3}&language=uk-UA&page=${page}`
    ).then((data) => {
      setData(data);
      setResults(data.results);
    });
  }, []);

  useEffect(() => {
    sendRequestAxios(
      `${API_URL}/discover/movie?api_key=${API_KEY_3}&language=uk-UA&page=${page}`
    ).then((data) => {
      setResults((prev) => [...prev, ...data.results]);
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
