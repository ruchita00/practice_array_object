import React from "react";

const ArrayPractice = ({ arr }) => {
  // console.log(arr);
  return (
    <div className="App">
      <div
        style={{
          border: "1px solid black",
          width: "422px",
          height: "455px",
        }}
      >
        <div>Name: {arr.alldata.name}</div>
        <div>Qualification:{arr.alldata.qualification}</div>
        <div>
          Address:{" "}
          {`${arr.alldata.address.city}
          ${arr.alldata.address.place?.[0]} ${arr.alldata.address.state.state}`}
        </div>
        Project:
        {arr.projects.map((data, index) => {
          return (
            <>
              {" "}
              <div key={index}>name of projects:{data.name}</div>
              <div>
                {data.data.map((items, index) => {
                  return (
                    <ul>
                      <li key={index}>project review: {items.review}</li>
                      <li key={index}>project rating: {items.rating}</li>
                    </ul>
                  );
                })}
              </div>
            </>
          );
        })}
        <div>
          {/* 1.
          {`${arr.projects?.[0]?.name} ${arr.projects?.[0]?.data?.[0]?.review} ${arr.projects?.[0]?.data?.[0]?.rating} `}
          <div>
            2.{" "}
            {`${arr.projects?.[1]?.name} ${arr.projects?.[1]?.data?.[0]?.review} ${arr.projects?.[1]?.data?.[0]?.rating} `}
          </div>
          <div>
            2.{" "}
            {`${arr.projects?.[2]?.name} ${arr.projects?.[2]?.data?.[0]?.review} ${arr.projects?.[2]?.data?.[0]?.rating} `}
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default ArrayPractice;
