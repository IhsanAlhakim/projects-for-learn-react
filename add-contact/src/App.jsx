import { useState, useReducer } from "react";
import reducer from "./reducer";

function AddContact() {
  const data = [
    {
      id: "1",
      name: "Ihsan",
      phoneNumber: "1234567890",
    },
    {
      id: "2",
      name: "Alhakim",
      phoneNumber: "987654321",
    },
  ];

  const initialState = {
    people: data,
    isError: false,
  };
  const defaultPersonInfo = { name: "", phoneNumber: "" };

  const [personInfo, setPersonInfo] = useState(defaultPersonInfo);
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (personInfo.name && personInfo.phoneNumber) {
      const newContact = {
        id: new Date().getTime().toString(),
        name: personInfo.name,
        phoneNumber: personInfo.phoneNumber,
      };
      dispatch({ type: "ADD_PERSON", payload: newContact });
      setPersonInfo(defaultPersonInfo);
    } else {
      dispatch({ type: "NO_INPUT" });
    }
  };

  const handleChange = (e) => {
    const prop = e.target.name;
    const value = e.target.value;
    setPersonInfo({ ...personInfo, [prop]: value });
  };

  return (
    <main className="mt-10">
      <form
        onSubmit={handleSubmit}
        className="rounded w-[500px] m-auto border p-10 flex flex-col bg-[#C5FFF8]"
      >
        <h1 className="text-center text-xl">Add Contact</h1>
        <section className="m-2">
          <label htmlFor="name">Nama :</label>
          <input
            className="border w-[100%]"
            type="text"
            name="name"
            id="name"
            value={personInfo.name}
            onChange={handleChange}
          />
        </section>
        <section className="m-2">
          <label htmlFor="phoneNumber">Nomor Telepon :</label>
          <input
            className="border w-[100%]"
            type="number"
            name="phoneNumber"
            id="phoneNumber"
            value={personInfo.phoneNumber}
            onChange={handleChange}
          />
        </section>
        <button type="submit" className="rounded p-2 bg-purple-300 mt-2">
          Add
        </button>
        {state.isError && <h1>Tidak ada input yang masuk</h1>}
      </form>
      <div className="w-[500px] m-auto flex flex-col border rounded mt-5 p-10 gap-5 bg-[#C5FFF8]">
        {state.people.map((person) => {
          return (
            <div key={person.id} className="border p-3 rounded flex bg-white">
              <div>
                <h4 className="text-2xl">{person.name}</h4>
                <h4 className="text-sm">{person.phoneNumber}</h4>
              </div>
              <button
                type="button"
                onClick={() => {
                  dispatch({ type: "REMOVE_CONTACT", payload: person.id });
                }}
                className="ml-auto border rounded w-[70px] bg-purple-300"
              >
                Hapus
              </button>
            </div>
          );
        })}
      </div>
    </main>
  );
}

export default AddContact;
