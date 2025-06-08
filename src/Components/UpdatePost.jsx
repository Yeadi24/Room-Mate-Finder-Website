import React, { useEffect, useState, use } from "react";
import { useParams, useNavigate } from "react-router";
import Swal from "sweetalert2";
import { AuthContext } from "../Contexts/AuthContext";

const UpdatePost = () => {
  const { user } = use(AuthContext);
  const email = user.email;
  const name = user.displayName;
  const { id } = useParams();
  const navigate = useNavigate();

  const [postData, setPostData] = useState(null);

  useEffect(() => {
    fetch(`https://coffe-server-bay.vercel.app/posts/${id}`)
      .then((res) => res.json())
      .then((data) => setPostData(data));
  }, [id]);

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const updatedData = Object.fromEntries(formData.entries());

    fetch(`https://coffe-server-bay.vercel.app/posts/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire("Post has been updated!");
          navigate("/myposts");
        }
      });
  };

  if (!postData) {
    return <div className="text-center p-20 text-3xl">Loading...</div>;
  }

  return (
    <div className="p-24">
      <div className="p-12 text-center">
        <h1 className="text-6xl font-bold mb-10">Update Your Post</h1>
        <p className="font-thin text-[20px]">
          Edit your post details here and save the changes to update your
          listing.
        </p>
      </div>

      <form onSubmit={handleUpdate}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <fieldset className="bg-pink-300 border-base-300 rounded-box border p-4">
            <label className="label font-bold text-[16px]">Email</label>
            <input
              type="text"
              className="input w-full"
              name="email"
              defaultValue={email}
              readOnly
            />
          </fieldset>

          <fieldset className="bg-pink-300 border-base-300 rounded-box border p-4">
            <label className="label font-bold text-[16px]">Name</label>
            <input
              type="text"
              className="input w-full"
              name="name"
              defaultValue={name}
              readOnly
            />
          </fieldset>

          <fieldset className="bg-pink-300 border-base-300 rounded-box border p-4">
            <label className="label font-bold text-[16px]">Post Title</label>
            <input
              type="text"
              className="input w-full"
              name="title"
              defaultValue={postData.title}
            />
          </fieldset>

          <fieldset className="bg-pink-300 border-base-300 rounded-box border p-4">
            <label className="label font-bold text-[16px]">Location</label>
            <input
              type="text"
              className="input w-full"
              name="location"
              defaultValue={postData.location}
            />
          </fieldset>

          <fieldset className="bg-pink-300 border-base-300 rounded-box border p-4">
            <label className="label font-bold text-[16px]">Rent Amount</label>
            <input
              type="number"
              className="input w-full"
              name="rent"
              defaultValue={postData.rent}
            />
          </fieldset>

          <fieldset className="bg-pink-300 border-base-300 rounded-box border p-4">
            <label className="label font-bold text-[16px]">Room Type</label>
            <input
              type="text"
              className="input w-full"
              name="type"
              defaultValue={postData.type}
            />
          </fieldset>

          <fieldset className="bg-pink-300 border-base-300 rounded-box border p-4">
            <label className="label font-bold text-[16px]">
              Lifestyle Preferences
            </label>
            <input
              type="text"
              className="input w-full"
              name="lifestyle"
              defaultValue={postData.lifestyle}
            />
          </fieldset>

          <fieldset className="bg-pink-300 border-base-300 rounded-box border p-4">
            <label className="label font-bold text-[16px]">Description</label>
            <input
              type="text"
              className="input w-full"
              name="description"
              defaultValue={postData.description}
            />
          </fieldset>

          <fieldset className="bg-pink-300 border-base-300 rounded-box border p-4">
            <label className="label font-bold text-[16px]">Contact Info</label>
            <input
              type="text"
              className="input w-full"
              name="contact"
              defaultValue={postData.contact}
            />
          </fieldset>

          <fieldset className="bg-pink-300 border-base-300 rounded-box border p-4">
            <label className="label font-bold text-[16px]">Availability</label>
            <input
              type="text"
              className="input w-full"
              name="availability"
              defaultValue={postData.availability}
            />
          </fieldset>
        </div>

        <fieldset className="mt-8 bg-pink-300 border-base-300 rounded-box border p-4">
          <label className="label font-bold text-[16px]">Photo URL</label>
          <input
            type="text"
            className="input w-full"
            name="url"
            defaultValue={postData.url}
          />
        </fieldset>

        <input
          type="submit"
          className="btn btn-success w-full mt-4"
          value="Update Post"
        />
      </form>
    </div>
  );
};

export default UpdatePost;
