import axios from "axios";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useAuthUser } from "react-auth-kit";

interface CommetsProps {
  comments: any;
  workId: any;
}

export function Comments({ comments, workId }: CommetsProps) {
  const { t } = useTranslation();
  const [comment, setComment] = useState("");
  const [commentsList, setCommentsList] = useState(comments);
  const user = useAuthUser();

  async function handleCommentSubmit(event: any) {
    event.preventDefault();
    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    const response = await axios.post(`${backendUrl}/3d-data/comments`, {
      workId,
      email: user()?.email,
      comment: comment,
    });

    console.log(response);
    if (response.status === 200) {
      setCommentsList([
        {
          id: response.data.id,
          comment: response.data.comment,
          createdAt: response.data.createdAt,
          user: {
            login: response.data.login,
          },
        },
        ...commentsList,
      ]);
      setComment("");
    }
  }

  return (
    <div className="mb-12">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-2xl mb-4">{t("work.comments.title")}</h1>
      </div>
      <div className="flex flex-col items-center justify-center">
        {user() && (
          <form
            onSubmit={handleCommentSubmit}
            className="w-full flex flex-col align-center space-y-4 justify-center items-center"
          >
            <textarea
              name="comment"
              id="comment"
              rows={4}
              cols={50}
              maxLength={500}
              minLength={10}
              placeholder={`${t("work.comments.placeholder")}`}
              className="mt-4 w-full max-w-xs p-2 rounded-lg border border-neutral-600 focus:border-blue-500 bg-neutral-800 max-h-[500px]"
              onChange={(e) => setComment(e.target.value)}
            />
            <button
              type="submit"
              className="mt-4 w-full max-w-xs p-2 rounded-lg border border-neutral-600 focus:border-blue-500 bg-neutral-800"
            >
              {t("work.comments.actionButton")}
            </button>
          </form>
        )}
      </div>
      <div className="flex flex-col mx-auto space-y-8 mt-4 max-w-[700px]">
        {commentsList.map((comment: any) => (
          <div key={comment.id}>
            <div className="flex flex-col items-center justify-center space-y-4">
              <h1 className="text-2xl ">{comment.user.login.split("@")[0]}</h1>
              <p>{comment.comment}</p>
              <p>{comment.createdAt.split("T")[0]}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
