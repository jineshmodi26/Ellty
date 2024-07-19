import { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import CheckBox from "./components/CheckBox";

function App() {
  const [pages, setPages] = useState([
    { name: "Page 1", checked: false },
    { name: "Page 2", checked: false },
    { name: "Page 3", checked: false },
    { name: "Page 4", checked: false },
    { name: "Page 5", checked: false },
    { name: "Page 6", checked: false }
  ]);

  const [allChecked, setAllChecked] = useState(false);

  const handleAllPagesChange = (e) => {
    const isChecked = e.target.checked;
    setAllChecked(isChecked);
    setPages(pages.map(page => ({ ...page, checked: isChecked })));
  };

  const handlePageChange = (index) => (e) => {
    setAllChecked(false);
    const isChecked = e.target.checked;
    setPages(pages.map((page, i) =>
      i === index ? { ...page, checked: isChecked } : page
    ));
  };

  return (
    <div className="wrapper">
      <CheckBox pageName="All pages" checked={allChecked} onChange={handleAllPagesChange} />
      <div className="divider"></div>
      <div className="scollable">
        {pages.map((page, index) => (
          <CheckBox pageName={page.name} checked={page.checked} onChange={handlePageChange(index)} />
        ))}
      </div>
      <div className="divider"></div>
      <Button />
    </div>
  );
}

export default App;
