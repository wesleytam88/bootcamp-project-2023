"use client";

import { NextResponse } from "next/server";
import { useState } from "react";

type AddCommentProps = {
  slug: string;
  type: string;
};

type CommentProps = {
  user: string;
  comment: string;
};

export default function AddCommentComponent({ slug, type }: AddCommentProps) {
  const [username, setUserName] = useState("");
  const [comment, setComment] = useState("");

  async function updateDB(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    try {
      const res = await fetch(
        `http://localhost:3000/api/db/${type}/${slug}/comment`,
        {
          method: "POST",
          body: JSON.stringify({
            user: username,
            comment: comment,
          }),
        }
      );
    } catch (err) {
      return NextResponse.json("Error when uploading comment", { status: 400 });
    }

    // Refresh page after uploading comment
    location.reload()
  }

  return (
    <div className="createComment">
      <h2 className="createCommentTitle">Add Comment</h2>
      <form onSubmit={updateDB}>
        <label>Name:</label>
        <input
          type="text"
          id="name"
          onChange={(e) => setUserName(e.target.value)}
          required
        />
        <br />
        <label>Comment:</label>
        <textarea
          id="comment"
          onChange={(e) => setComment(e.target.value)}
          required
        />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
}
