import ArrayPractice from "./components/arrays/ArrayPractice";

function App() {

  
  const arr = {
    alldata: {
      name: "ruchita",
      address: {
        code: 45,
        city: "adm",
        place: ["Mh"],
        state: {
          state: "MH",
        },
      },
      qualification: "BE",
    },
    projects: [
      {
        id: 1,
        name: "ecommerce",
        data: [{ rating: 4, review: "good" }],
      },
      {
        id: 2,
        name: "hotelBooking",
        data: [{ rating: 4 }],
      },
      {
        id: 3,
        name: "transport",
        data: [{ rating: 2, review: "average" }],
      },
    ],
  };

  return (
    <div>
      <ArrayPractice arr={arr} />
    </div>
  );
}

export default App;
