import { useState } from "react";
import "../assets/scss/Pagination.scss"
import first from "../assets/img/first.png";
import firstHover from "../assets/img/first_hover.png";
import last from "../assets/img/last.png";
import lastHover from "../assets/img/last_hover.png";
import next from "../assets/img/next.png";
import nextHover from "../assets/img/next_hover.png";
import previous from "../assets/img/previous.png";
import previousHover from "../assets/img/previous_hover.png";

const Pagination = ({heroes, heroesPerPage, currentPage, setCurrentPage}) => {
  

  const [firstBtn, setFirstBtn] = useState(first);
  const [lastBtn, setLastBtn] = useState(last);
  const [previousBtn, setPreviousBtn] = useState(previous);
  const [nextBtn, setNextBtn] = useState(next);

  

  const prevPage = currentPage > 1 && currentPage - 1;
  const lastPage = Math.ceil(heroes.length / heroesPerPage);
  const nextPage = lastPage === currentPage ? currentPage : currentPage + 1;

  const pageNumbers = [];
  for (let i = 1; i <= lastPage; i++) {
    pageNumbers.push(i);
  }

  const handleClickFirst = (e) => {
    e.preventDefault();
    setCurrentPage(1);
    setFirstBtn(first);
  };
  const handleClickPrev = (e) => {
    e.preventDefault();
    setCurrentPage(prevPage);
    currentPage === 1 && setPreviousBtn(previous);
  };
  const handleClickNext = (e) => {
    e.preventDefault();
    setCurrentPage(nextPage);
  };
  const handleClickLast = (e) => {
    e.preventDefault();
    setCurrentPage(lastPage);
    setLastBtn(last);
  };

  return (
    <div className="pages">
      <button
        onClick={handleClickFirst}
        className="first-page btn"
        onMouseEnter={() => setFirstBtn(firstHover)}
        onMouseLeave={() => setFirstBtn(first)}
        disabled={currentPage === 1 && true}
      >
        <img src={firstBtn} alt="go_to_first_page" />
      </button>
      <button
        onClick={handleClickPrev}
        className="prev-page btn"
        onMouseEnter={() => setPreviousBtn(previousHover)}
        onMouseLeave={() => setPreviousBtn(previous)}
        disabled={currentPage === 1 && true}
      >
        <img src={previousBtn} alt="go_to_previous_page" />
      </button>
      <div className="current-page">- Page {currentPage} -</div>
      <button
        onClick={handleClickNext}
        className="next-page btn"
        onMouseEnter={() => setNextBtn(nextHover)}
        onMouseLeave={() => setNextBtn(next)}
        disabled={currentPage === lastPage && true}
      >
        <img src={nextBtn} alt="go_to_next_page" />
      </button>
      <button
        onClick={handleClickLast}
        className="last-page btn"
        onMouseEnter={() => setLastBtn(lastHover)}
        onMouseLeave={() => setLastBtn(last)}
        disabled={currentPage === lastPage && true}
      >
        <img src={lastBtn} alt="go_to_last_page" />
      </button>
    </div>
  );
};

export default Pagination;
