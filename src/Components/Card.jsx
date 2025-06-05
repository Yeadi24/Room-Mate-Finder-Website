import React from "react";
import { Link } from "react-router";
import Swal from "sweetalert2";

const Card = ({ post, posts, setPosts }) => {
  //delete coffe
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      console.log(result.isConfirmed);

      if (result.isConfirmed) {
        fetch(`http://localhost:3000/coffees/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              console.log(posts, id);

              const remaining = posts.filter((item) => item._id !== id);
              setPosts(remaining);
            }
          });
      }
    });
  };
  return (
    <div>
      <div className="card card-side bg-base-100 shadow-sm border-2">
        <figure>
          <img src={post.url} alt="Movie" className="w-[200px] h-[300px]" />
        </figure>
        <div className="flex flex-col justify-center items-center gap-4">
          <h2 className="font-bold text-xl">Name: {post.coffe}</h2>
          <p className="font-semibold">Category:{post.category}</p>
          <p className="font-semibold">Price: {post.price}</p>
          <p className="font-semibold">Quantity: {post.quantity}</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-3 ml-4">
          <Link to={`/postDetails/${post._id}`}>
            <button className="btn btn-dash btn-success">View</button>
          </Link>
          <Link to={`/updatePost/${post._id}`}>
            <button className="btn btn-dash btn-success">Edit</button>
          </Link>

          <button
            onClick={() => {
              handleDelete(post._id);
            }}
            className="btn btn-dash btn-error"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
