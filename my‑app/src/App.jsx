import { useState } from "react";
import RootRouter from "./assets/routers/index";
import Footer from "./assets/composition/Footer/Footer";
import Header from "./assets/composition/Header/Header";
import Container from "./assets/layout/Container/Container";

import "./assets/styles/style.scss";

function App() {
  const [favorite, setFavorite] = useState([]);

  const handleFavorite = (item) => {
    setFavorite((prev) => {
      if (prev.some((el) => el.id === item.id)) {
        /// перевіряємо чи в масиві favorite є обект з id який приходить з компонента MovieItem
        return prev.filter((el) => el.id !== item.id); /// якщо є то видаляємо його з масиву
      }
      return [...prev, item]; /// якщо немає то додаємо його в масив
    });
  };

  return (
    <div className="g-app">
      <Header count={favorite.length} />
      <main className="g-content">
        <Container>
          <RootRouter favorite={favorite} onFavorite={handleFavorite} />
          {/* <Routes>
                <Route path="/" element={<HomePage favorite={favorite} onFavorite={onFavorite} />} />
                <Route path="*" element={<NotPage />} />
            </Routes> */}
        </Container>
      </main>
      <Footer />
    </div>
  );
}

export default App;
