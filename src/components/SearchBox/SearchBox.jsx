import { setFilter } from "../../redux/filters/slice";
import s from "./SearchBox.module.css";
import { useDispatch } from "react-redux";

const SearchBox = () => {
  const dispatch = useDispatch();

  const handelChange = (e) => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <div className={s.filterWrap}>
      <p className={s.label}>Find contacts by name</p>
      <input
        className="rounded-md"
        type="text"
        onChange={handelChange}
        placeholder="Enter the name"
      />
    </div>
  );
};

export default SearchBox;
