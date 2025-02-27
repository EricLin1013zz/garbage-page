import React, { useState } from "react";

const GarbageReservation = () => {
  const [location, setLocation] = useState("");
  const [time, setTime] = useState("");
  const [reservations, setReservations] = useState([]);

  const handleReserve = () => {
    if (location && time) {
      setReservations([...reservations, { location, time }]);
      setLocation("");
      setTime("");
      alert("預約成功！");
    } else {
      alert("請選擇地點與時間");
    }
  };

  return (
    <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">垃圾投遞預約系統</h1>

      <div className="bg-white p-6 rounded-lg shadow-md w-96">
        <label className="block mb-2">選擇垃圾投遞點：</label>
        <select
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full p-2 border rounded mb-4"
        >
          <option value="">請選擇</option>
          <option value="合作餐廳A">合作餐廳A</option>
          <option value="合作餐廳B">合作餐廳B</option>
          <option value="合作餐廳C">合作餐廳C</option>
        </select>

        <label className="block mb-2">選擇時間：</label>
        <input
          type="datetime-local"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          className="w-full p-2 border rounded mb-4"
        />

        <button
          onClick={handleReserve}
          className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600"
        >
          確認預約
        </button>
      </div>

      <div className="mt-6 w-96">
        <h2 className="text-xl font-semibold mb-2">預約紀錄</h2>
        <ul className="bg-white p-4 rounded-lg shadow-md">
          {reservations.length === 0 ? (
            <p className="text-gray-500">尚無預約</p>
          ) : (
            reservations.map((res, index) => (
              <li key={index} className="border-b p-2 last:border-none">
                📍 {res.location} - 🕒 {res.time}
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
};

export default GarbageReservation;
