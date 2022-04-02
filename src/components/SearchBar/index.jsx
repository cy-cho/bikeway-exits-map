import { forwardRef, useRef, useState } from "react";
import { Container, Search, InputBox, Delete, Divider } from "./style";

import searchIcon from "../../assets/search.svg";
import deleteIcon from "../../assets/searchbar/delete.svg";

const SearchBar = forwardRef((props, ref) => {
  const inputRef = useRef();
  const [keyword, setKeyword] = useState("");
  return (
    <Container ref={ref}>
      <Search alt="search" src={searchIcon} />
      <Divider />
      <InputBox
        ref={inputRef}
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        placeholder="請輸入關鍵字"
      />
      {keyword && (
        <Delete alt="clear" src={deleteIcon} onClick={() => setKeyword("")} />
      )}
    </Container>
  );
});

export default SearchBar;
