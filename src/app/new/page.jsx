"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useState } from "react";

function NewPage({ params }) {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (params.id) {
      fetch(`/api/tasks/${params.id}`)
        .then((res) => res.json())
        .then((data) => {
          setTitle(data.title);
          setDescription(data.description);
        });
    }
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    if (params.id) {
      const res = await fetch(`/api/tasks/${params.id}`, {
        method: "PUT",
        body: JSON.stringify({ title, description }),
        headers: {
          "content-type": "application/json",
        },
      });
      const data = await res.json();
      // console.log(data);
    } else {
      const res = await fetch("/api/tasks", {
        method: "POST",
        body: JSON.stringify({ title, description }),
        headers: {
          "content-type": "application/json",
        },
      });
      const data = await res.json();
    }
    router.push("/");
    router.refresh();
  };

  return (
    <div className=" flex justify-center items-center h-[calc(100vh-7rem)]">
      <form className="bg-slate-800 p-10 w-2/4" onSubmit={onSubmit}>
        <label htmlFor="title" className="font-bold text-sm">
          Título de la tarea
        </label>
        <input
          type="text"
          id="title"
          className="border border-gray-400 p-2 mb-4 w-full text-black"
          placeholder="Título"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <label htmlFor="title" className="font-bold text-sm">
          Descripción de la tarea
        </label>
        <textarea
          rows="4"
          id="description"
          className="border border-gray-400 p-2 mb-4 w-full text-black"
          placeholder="Escribete tu tarea..."
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        ></textarea>
        <div className="flex justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            type="submit"
          >
            {params.id ? "Editar" : "Crear"}
          </button>
          {params.id && (
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              type="button"
              onClick={async () => {
                const res = await fetch(`/api/tasks/${params.id}`, {
                  method: "DELETE",
                });
                const data = await res.json();
                router.push("/");
                router.refresh();
              }}
            >
              Delete
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default NewPage;
