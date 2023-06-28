import axios from "axios";
import { useState } from "react";
import { useAuthUser } from "react-auth-kit";
import { useIsAuthenticated } from "react-auth-kit";

interface Work {
  id: number;
  name: string;
  image: string;
  views: number;
  createdAt: string;
  userLikes: [
    {
      userId: string;
    },
  ];
}

interface Props {
  work: Work;
}

export function WorkDetails({ work }: Props) {
  const isAuthenticated = useIsAuthenticated();
  const auth = useAuthUser();
  const [isLiked, setIsLiked] = useState(checkIfLiked());

  function checkIfLiked() {
    if (work.userLikes.length < 1) {
      return false;
    }

    for (let i = 0; i < work.userLikes.length; i++) {
      if (work.userLikes[i].userId === auth()?.id) {
        return true;
      }
    }

    return false;
  }

  async function handleClick(event: any) {
    event.preventDefault();
    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    if (isLiked) {
      const response = await axios.delete(`${backendUrl}/3d-data/like`, {
        data: { workId: work.id, email: auth()?.email },
      });
      if (response.status === 200) {
        setIsLiked(false);
      }
    } else {
      const response = await axios.post(`${backendUrl}/3d-data/like`, {
        workId: work.id,
        email: auth()?.email,
      });
      if (response.status === 200) {
        setIsLiked(true);
      }
    }
  }
  console.log(work);
  return (
    <div className="shadow-md rounded-md overflow-hidden bg-neutral-800">
      <img src={work.image} alt={work.name} className="w-full h-48 object-cover" />
      <div className="px-4 py-3 flex justify-between justify-center">
        <div>
          <h2 className="text-lg font-semibold text-gray-300">{work.name}</h2>
          <p className="text-gray-400">Views: {work.views}</p>
          <p className="text-gray-400">Date: {work.createdAt.split("T")[0]}</p>
        </div>
        <div className="h-4 cursor-pointer" onClick={handleClick}>
          {isAuthenticated() ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              width="50px"
              height="50px"
              className={`text-blue-200 ${isLiked ? "fill-red-500" : ""}`}
            >
              <path
                fillRule="evenodd"
                d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                clipRule="evenodd"
              />
            </svg>
          ) : null}
        </div>
      </div>
    </div>
  );
}
