import Navbar from "./components/Navbar";
import User from "./components/User";

function App() {
  const data = [
    {
      nama: "Daffa Maulana Wisesa ",
      nim: "21120120140057",
      email: "daffamaulana@students.undip.ac.id",
    },
    {
      nama: "Dhea Rahma Putri",
      nim: "21120120140164",
      email: "dhearahma@gmail.com",
    },
    {
      nama: "Fadel Rizky Nurfitanto",
      nim: "21120120140098",
      email: "fadelrizkynurfitanto@gmail.com",
    },
    {
      nama: "Muhammad Raihan Maulana ",
      nim: "21120120120027",
      email: "muhammadraihan@gmail.com",
    },
  ];

  return (
    <>
      <Navbar />
      <div
        className="user-wrapper"
        style={{ display: "flex", gap: "4rem", justifyContent: "center" }}
      >
        {data.map(d => (
          <User key={d.nim} nama={d.nama} nim={d.nim} email={d.email} />
        ))}
      </div>
    </>
  );
}

export default App;
