import Input from "../../components/Input";
import "./Price.css";

const Price = ({ handleChange }) => {
  return (
    <>
      <div className="ml">
        <h2 className="sidebar-title price-title">Price</h2>

        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test2" />
          <span className="checkmark"></span>All
        </label>

        <Input
          handleChange={handleChange}
          value={50}
          title="UGX 0 - 650,000"
          name="test2"
        />

        <Input
          handleChange={handleChange}
          value={900000}
          title="UGX 660K - 900K"
          name="test2"
        />

        <Input
          handleChange={handleChange}
          value={1000000}
          title="UGX 900K - 1.2M"
          name="test2"
        />

        <Input
          handleChange={handleChange}
          value={1300000}
          title="Over UGX 1.2M"
          name="test2"
        />
      </div>
    </>
  );
};

export default Price;
