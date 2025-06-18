import React from "react";

const Card = ({ user, handleRemove, id }) => {
  return (
    <div className="w-52 h-[40vh] bg-zinc-100 rounded-lg padding flex flex-col items-center gap-2 shadow-md">
      <div className="w-[4vw] h-[3vw] rounded-sm bg-zinc-200 overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src={user.image}
          alt={user.name}
        />
      </div>
      <h1 className="mt-1 text-xl font-semibold">{user.name}</h1>
      <h4 className="opacity-60 text-xs font-semibold ">{user.email}</h4>
      <p className="mt-1 text-center text-xs font-semibold leading-3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores,
        error.
      </p>
      <button
        onClick={() => handleRemove(id)}
        className="padding-button bg-red-500 text-xs rounded-sm font-semibold text-white mt-4"
      >
        Remove it
      </button>
    </div>
  );
};

export default Card;
