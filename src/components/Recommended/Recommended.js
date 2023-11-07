import Button from "../components/Button";
import { useState } from "react";
import "./Recommended.css";

const Recommended = ({ handleClick }) => {
  const [isClicked, setIsClicked] = useState(false);
  const handleButtonClick = () => {
    setIsClicked(true);
  };
  return (
    <>
      <div>
        <h2 className="recommended-title">Recommended</h2>
        <div className="recommended-flex">
          <Button
            className={isClicked ? "clickedButton" : "normalButton"}
            onClick={handleButtonClick}
            onClickHandler={handleClick}
            value=""
            title="All Hostels"
          />
          <Button
            className={isClicked ? "clickedButton" : "normalButton"}
            onClick={handleButtonClick}
            onClickHandler={handleClick}
            value="Kikoni"
            title="Kikoni"
          />
          <Button
            className={isClicked ? "clickedButton" : "normalButton"}
            onClick={handleButtonClick}
            onClickHandler={handleClick}
            value="Wandegeya"
            title="Kikumi Kikumi"
          />
          <Button
            className={isClicked ? "clickedButton" : "normalButton"}
            onClick={handleButtonClick}
            onClickHandler={handleClick}
            value="Kikumi kikumi"
            title="Wandegeya"
          />
          <Button
            className={isClicked ? "clickedButton" : "normalButton"}
            onClick={handleButtonClick}
            onClickHandler={handleClick}
            value="Kavuule"
            title="Kavuule"
          />
        </div>
      </div>
    </>
  );
};
export default Recommended;
