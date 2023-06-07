import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const defaultWork = {
  name: "",
  description: "",
  image: "",
  views: 0,
};

export function Work() {
  const [work, setWork] = useState(defaultWork);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  useEffect(() => {
    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    fetch(`${backendUrl}/3d-data/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setWork(data);
        setLoading(false);
      });
    fetch(`${backendUrl}/3d-data/${id}/views`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
    });
  }, [id]);

  return (
    <div className="w-3/4 mx-auto">
      <h1 className="text-4xl font-bold text-blue-400 my-8">Work</h1>
      {loading ? (
        <div className="animate-pulse flex space-x-4">
          <div className="rounded-full bg-slate-700 h-10 w-10"></div>
          <div className="flex-1 space-y-6 py-1">
            <div className="h-2 bg-slate-700 rounded"></div>
            <div className="space-y-3">
              <div className="grid grid-cols-3 gap-4">
                <div className="h-2 bg-slate-700 rounded col-span-2"></div>
                <div className="h-2 bg-slate-700 rounded col-span-1"></div>
              </div>
              <div className="h-2 bg-slate-700 rounded"></div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-wrap space-y-8 p-8 gap-8 bg-neutral-800 rounded-md mb-12">
          <img src={work.image} alt={work.name} className="w-full max-h-[600px] aspect-video rounded-lg object-cover" />
          <div className="mt-4 flex flex-col space-y-4 w-full">
            <div className="flex flex-row gap-4 items-center justify-between w-full">
              <h2 className="text-2xl sm:text-4xl font-bold">{work.name}</h2>
              <Link
                to={`/viewer/${id}`}
                className="text-blue-400 hover:underline cursor-pointer font-semibold text-base sm:text-lg "
              >
                View
              </Link>
            </div>
            <p className="text-lg sm:text-xl">{work.description}</p>
          </div>
        </div>
      )}
    </div>
  );
}
