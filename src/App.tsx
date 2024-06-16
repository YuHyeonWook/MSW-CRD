import { useEffect, useState } from "react";
import { fetchAddUser, fetchDeleteUser, fetchMock } from "./api/fetchMocking";

type MockData = {
  id: number;
  name: string;
  country: string;
  lang: string;
};
function App() {
  const [fetchData, setFetchData] = useState<MockData[]>([]);
  const [user, setUser] = useState({
    name: "",
    country: "",
    lang: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchMock();
      setFetchData(data);
    };
    fetchData();
  }, []);

  const handleAddUser = async (event) => {
    event.preventDefault();
    const response = await fetchAddUser(user);
    setFetchData([...fetchData, response]);
    setUser({ name: "", country: "", lang: "" });
  };

  const handleDeleteUser = async (id) => {
    await fetchDeleteUser(id);
    setFetchData(fetchData.filter((data) => data.id !== id));
  };

  return (
    <>
      <section className="flex flex-col items-center justify-center">
        <h1 className="text-5xl font-bold text-primary">유저 입력 창</h1>
        <form onSubmit={handleAddUser} className="flex flex-col w-4/6 gap-5">
          <label htmlFor="">
            <input
              className="border-2 border-gray-300 border-primary"
              type="text"
              placeholder="name"
              value={user.name}
              onChange={(event) =>
                setUser({ ...user, name: event.target.value })
              }
            />
          </label>
          <label htmlFor="">
            <input
              className="border-2 border-gray-300 border-primary"
              type="text"
              placeholder="country"
              value={user.country}
              onChange={(event) =>
                setUser({ ...user, country: event.target.value })
              }
            />
          </label>
          <label htmlFor="">
            <input
              className="border-2 border-gray-300 border-primary"
              type="text"
              placeholder="lang"
              value={user.lang}
              onChange={(event) =>
                setUser({ ...user, lang: event.target.value })
              }
            />
          </label>
          <button>제출</button>
        </form>
        <ul className="flex flex-row gap-2 ">
          {fetchData.map((data) => (
            <li key={data.id} className="text-3xl">
              <p>{data.name}</p>
              <p>{data.country}</p>
              <p>{data.lang}</p>
              <button>수정</button>
              <button onClick={() => handleDeleteUser(data.id)}>삭제</button>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

export default App;
