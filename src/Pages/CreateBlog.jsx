import { React, useState, useContext } from "react";
import { imageDb, db } from "../firebase/config";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import userContext from "../Context/userContext/userContext";
import { collection, addDoc } from "firebase/firestore";

export default function CreateBlog() {
  const [value, setValue] = useState("");
  const [Img, setImg] = useState("");
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const userid = useContext(userContext);
  const imgFloder = "MH_blog_img";
  const posthandle = async (e) => {
    e.preventDefault();
    setIsButtonDisabled(true);

    if (userid.User == "") {
      alert("It looks like you are not logged in");
      setIsButtonDisabled(false);
      return;
    }

    if (value == "" || title == "" || Img == "" || category == "") {
      alert("Please fill in all the required data");
      setIsButtonDisabled(false);
      return;
    }

    const timestamp = new Date().getTime();
    const imgRef = ref(imageDb, `${imgFloder}/${timestamp}`);

    try {
      await uploadBytes(imgRef, Img);
      const imgURL = await getDownloadURL(imgRef);
      const currentDate = new Date();
      const formattedDate = currentDate.toLocaleDateString("en-US", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      });
      const docRef = await addDoc(collection(db, "BLOG_DATA"), {
        username: userid.User,
        Title: title,
        content: value,
        Category: category,
        url: imgURL,
        date: formattedDate,
      });
      alert("Post uploaded successfully.");
      setTitle("");
      setImg("");
      setValue("");
      setCategory("");
    } catch (e) {
      alert("An unexpected error occurred. Please try again later.");
    } finally {
      setIsButtonDisabled(false);
    }
  };

  return (
    <>
      <div className=" pt-5 pb-8 w-[95%] m-auto flex flex-col justify-center items-center">
        <div className="text-center text-[2rem] font-Satisfy text-blue-500 ">
          Create Your New Blog
        </div>
        <div className="flex flex-col items-center gap-2 my-2 w-[92%]">
          <div className="text-[1.5rem] font-Montserrat ">
            Enter the title here
          </div>
          <div className="border-2 border-blue-400 w-[95%]">
            <input
              type="text"
              name="Title"
              value={title}
              id=""
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter the title"
              required
              className="text-[1.3rem] outline-none w-[90%] mx-2 h-[3rem]"
            />
          </div>
        </div>

        <div className="h-[600px] border-2 border-blue-500 md:py-0 w-[92%]">
          <textarea
            className="w-[100%] h-full p-0 border-none resize-none outline-none text-[20px] px-2 py-2"
            name="content"
            id="content"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            rows="10"
            placeholder="Enter your content here"
            required
          ></textarea>
        </div>

        <div className="flex flex-col gap-5 px-0 md:px-3 my-5">
          <div className="flex gap-3 justify-start items-center mt-4">
            <div className="text-[1.3rem] font-Satisfy text-gray-500 ">
              Select the category
            </div>
            <div className="">
              <select
                name="Category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                id=""
                className="border-2 border-blue-400 text-[1.1rem] outline-none font-Montserrat"
              >
                <option value="Fashion" defaultChecked>
                  Fashion
                </option>
                <option value="Sports">Sports</option>
                <option value="Technology">Technology</option>
                <option value="Food">Food</option>
                <option value="Travel">Travel</option>
                <option value="literature">literature</option>
              </select>
            </div>
          </div>
          <div className="flex gap-4 justify-start items-center">
            <label
              htmlFor="file"
              className="text-[1.3rem] font-Satisfy text-gray-500"
            >
              Image
            </label>
            <input
              type="file"
              name="file"
              id="file"
              onChange={(e) => {
                setImg(e.target.files[0]);
              }}
            />
          </div>
        </div>
        <div className="flex items-start mt-9 ml-4">
          <button
            disabled={isButtonDisabled}
            className="border-2 border-blue-500 rounded-[10px] w-[130px]  text-[1.7rem] font-Satisfy bg-blue-500 text-white hover:border-white cursor-pointer"
            onClick={(e) => posthandle(e)}
          >
            Post
          </button>
        </div>
      </div>
    </>
  );
}
