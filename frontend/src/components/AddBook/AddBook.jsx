// import React, { useState } from "react";
// import axios from "axios";

// const AddBook = () => {
//   const [formData, setFormData] = useState({
//     title: "",
//     author: "",
//     description: "",
//     price: "",
//     image: "",
//     lang: ""
//   });

//   const [successMsg, setSuccessMsg] = useState("");
//   const [errorMsg, setErrorMsg] = useState("");

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setErrorMsg("");
//     setSuccessMsg("");

//     const headers = {
//       id: localStorage.getItem("id"),
//       authorization: `Bearer ${localStorage.getItem("token")}`
//     };

//     const payload = {
//       url: formData.image,
//       title: formData.title,
//       author: formData.author,
//       price: formData.price,
//       desc: formData.description,
//       lang: formData.lang
//     };

//     try {
//       const res = await axios.post(
//         "http://localhost:5000/api/v1/books/add-book",
//         payload,
//         { headers }
//       );
//       setSuccessMsg("✅ Book added successfully!");
//       setFormData({
//         title: "",
//         author: "",
//         description: "",
//         price: "",
//         image: "",
//         lang: ""
//       });
//       console.log("📚 Book added:", res.data);
//     } catch (error) {
//       console.error("❌ Error adding book:", error);
//       setErrorMsg(
//         error?.response?.data?.message || "Failed to add book. Try again."
//       );
//     }
//   };

//   return (
//     <div className="max-w-md mx-auto mt-8 p-4 border rounded shadow">
//       <h2 className="text-2xl font-bold mb-4">➕ Add New Book</h2>

//       {successMsg && <p className="text-green-600 mb-2">{successMsg}</p>}
//       {errorMsg && <p className="text-red-600 mb-2">{errorMsg}</p>}

//       <form onSubmit={handleSubmit} className="space-y-3">
//         <input
//           type="text"
//           name="title"
//           placeholder="Book Title"
//           value={formData.title}
//           onChange={handleChange}
//           className="w-full p-2 border rounded"
//           required
//         />
//         <input
//           type="text"
//           name="author"
//           placeholder="Author Name"
//           value={formData.author}
//           onChange={handleChange}
//           className="w-full p-2 border rounded"
//           required
//         />
//         <textarea
//           name="description"
//           placeholder="Description"
//           value={formData.description}
//           onChange={handleChange}
//           className="w-full p-2 border rounded"
//           required
//         ></textarea>
//         <input
//           type="number"
//           name="price"
//           placeholder="Price"
//           value={formData.price}
//           onChange={handleChange}
//           className="w-full p-2 border rounded"
//           required
//         />
//         <input
//           type="text"
//           name="image"
//           placeholder="Image URL"
//           value={formData.image}
//           onChange={handleChange}
//           className="w-full p-2 border rounded"
//         />
//         <input
//           type="text"
//           name="lang"
//           placeholder="Language"
//           value={formData.lang}
//           onChange={handleChange}
//           className="w-full p-2 border rounded"
//           required
//         />
//         <button
//           type="submit"
//           className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
//         >
//           Add Book
//         </button>
//       </form>
//     </div>
//   );
// };

// export default AddBook;

import React, { useState } from "react";
import axios from "axios";

const API_BASE_URL = "http://localhost:5000";

const AddBook = () => {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    description: "",
    price: "",
    image: "",
    lang: ""
  });

  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg("");
    setSuccessMsg("");

    const headers = {
      id: localStorage.getItem("id"),
      authorization: `Bearer ${localStorage.getItem("token")}`
    };

    const payload = {
      url: formData.image,
      title: formData.title,
      author: formData.author,
      price: formData.price,
      desc: formData.description,
      lang: formData.lang
    };

    try {
      const res = await axios.post(
        `${API_BASE_URL}/api/v1/books/add-book`,
        payload,
        { headers }
      );
      setSuccessMsg("✅ Book added successfully!");
      setFormData({
        title: "",
        author: "",
        description: "",
        price: "",
        image: "",
        lang: ""
      });
      console.log("📚 Book added:", res.data);
    } catch (error) {
      console.error("❌ Error adding book:", error);
      setErrorMsg(
        error?.response?.data?.message || "Failed to add book. Try again."
      );
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-4 border rounded shadow">
      <h2 className="text-2xl font-bold mb-4">➕ Add New Book</h2>

      {successMsg && <p className="text-green-600 mb-2">{successMsg}</p>}
      {errorMsg && <p className="text-red-600 mb-2">{errorMsg}</p>}

      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          type="text"
          name="title"
          placeholder="Book Title"
          value={formData.title}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="text"
          name="author"
          placeholder="Author Name"
          value={formData.author}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        ></textarea>
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={formData.price}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={formData.image}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          name="lang"
          placeholder="Language"
          value={formData.lang}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Add Book
        </button>
      </form>
    </div>
  );
};

export default AddBook;
