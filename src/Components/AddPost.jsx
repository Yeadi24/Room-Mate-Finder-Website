import React, { use } from "react";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";
import { AuthContext } from "../Contexts/AuthContext";
import { Bounce } from "react-awesome-reveal";

const AddCoffe = () => {
  document.title = "Add Post";
  const { user } = use(AuthContext);
  const email = user.email;
  const name = user.displayName;
  const navigate = useNavigate();

  const handleAddCoffe = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const postData = Object.fromEntries(formData.entries());
    postData.avatar = user.photoURL;
    postData.like = 0;
    console.log(postData);
    fetch("http://localhost:3000/posts", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(postData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire("Post has been added !!!");
          form.reset();
          navigate("/myposts");
        }
      });
  };
  return (
    <Bounce triggerOnce>
      <div className="p-24">
        <div className="p-12 text-center">
          <h1 className="text-6xl font-bold mb-10">Add To Find Room Mate</h1>
          <p className="font-thin text-[20px]">
            Post your query with ease . Describe your space, preferences, and
            budget. Connect with compatible matches quickly and securely. Start
            your hassle-free roommate search now!
          </p>
        </div>
        <form onSubmit={handleAddCoffe}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <fieldset className="fieldset bg-pink-300 border-base-300 rounded-box  border p-4">
              <label className="label font-bold text-[16px]">Email</label>
              <input
                type="text"
                className="input w-full"
                placeholder="Email"
                name="email"
                defaultValue={email}
                readOnly
              />
            </fieldset>
            <fieldset className="fieldset bg-pink-300 border-base-300 rounded-box  border p-4">
              <label className="label font-bold text-[16px]">Name</label>
              <input
                type="text"
                className="input w-full"
                placeholder="Name"
                name="name"
                defaultValue={name}
                readOnly
              />
            </fieldset>
            <fieldset className="fieldset bg-pink-300 border-base-300 rounded-box  border p-4">
              <label className="label font-bold text-[16px]">Post Title</label>
              <input
                type="text"
                className="input w-full"
                placeholder="Post Title"
                name="title"
              />
            </fieldset>
            <fieldset className="fieldset bg-pink-300 border-base-300 rounded-box  border p-4">
              <label className="label font-bold text-[16px]">Location</label>
              <input
                type="text"
                className="input w-full"
                placeholder="Location"
                name="location"
              />
            </fieldset>
            <fieldset className="fieldset bg-pink-300 border-base-300 rounded-box  border p-4">
              <label className="label font-bold text-[16px]">Rent Amount</label>
              <input
                type="number"
                className="input w-full"
                placeholder="Rent Amount"
                name="rent"
              />
            </fieldset>
            <fieldset className="fieldset bg-pink-300 border-base-300 rounded-box  border p-4">
              <label className="label font-bold text-[16px]">Room Type</label>
              <input
                type="text"
                className="input w-full"
                placeholder="Room Type"
                name="type"
              />
            </fieldset>
            <fieldset className="fieldset bg-pink-300 border-base-300 rounded-box  border p-4">
              <label className="label font-bold text-[16px]">
                Lifestyle Preferences
              </label>
              <input
                type="text"
                className="input w-full"
                placeholder="LifeStyle Preferences"
                name="lifestyle"
              />
            </fieldset>
            <fieldset className="fieldset bg-pink-300 border-base-300 rounded-box  border p-4">
              <label className="label font-bold text-[16px]">Description</label>
              <input
                type="text"
                className="input w-full"
                placeholder="Description"
                name="description"
              />
            </fieldset>
            <fieldset className="fieldset bg-pink-300 border-base-300 rounded-box  border p-4">
              <label className="label font-bold text-[16px]">
                Contact Info
              </label>
              <input
                type="text"
                className="input w-full"
                placeholder="Contact Info"
                name="contact"
              />
            </fieldset>
            <fieldset className="fieldset bg-pink-300 border-base-300 rounded-box  border p-4">
              <label className="label font-bold text-[16px]">
                Availability
              </label>
              <input
                type="text"
                className="input w-full"
                placeholder="available / not available"
                name="availability"
              />
            </fieldset>
          </div>
          <fieldset className="mt-8 fieldset bg-pink-300 border-base-300 rounded-box  border p-4">
            <label className="label font-bold text-[16px]">Photo URL</label>
            <input
              type="text"
              className="input w-full"
              placeholder="Photo URL"
              name="url"
            />
          </fieldset>
          <input
            type="submit"
            className="btn btn-neutral btn-dash w-full mt-4"
            value="Add"
          />
        </form>
      </div>
    </Bounce>
  );
};

export default AddCoffe;
