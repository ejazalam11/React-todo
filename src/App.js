import "./App.css";
import { useState } from "react";
import Todo from "./components/Todo";
import { act } from "react-dom/test-utils";
import Check from "./components/Check";

function App() {
  const [activity, setactivity] = useState("");
  const [listData, setlistData] = useState([]);

  function addActivity() {
    // setlistData(...listData, activity)
    // console.log(listData);
    setlistData((listData) => {
      const updatedList = [...listData, activity];
      // console.log(updatedList);
      setactivity("");

      return updatedList;
    });
  }
  function removeactivity(i) {
    const updatedlistData = listData.filter((elem, id) => {
      return i != id;
    });
    setlistData(updatedlistData);
  }

  function removeAll() {
    setlistData([]);
  }
  return (
    <>
    <Check/>
      <div className="container">
        <div className="header">TODO LIST</div>

        <input
          type="text"
          placeholder="Add activity"
          value={activity}
          onChange={(e) => setactivity(e.target.value)}
        />
        <button onClick={addActivity} className="p-3">
          Add
        </button>
        {/* <p className="List-heading">Here is your List </p> */}
        {listData != [] &&
          listData.map((data, i) => {
            return (
              <>
                <p key={i}>
                  <div className="listData">{data}</div>
                  <div className="btn-position">
                    <button onClick={() => removeactivity(i)} className="p-3">
                      remove(-)
                    </button>
                  </div>
                </p>
              </>
            );
          })}
        {listData.length >= 1 && (
          <button onClick={removeAll} className="p-2">
            Remove All
          </button>
        )}
      </div>
    </>
  );
}

export default App;
