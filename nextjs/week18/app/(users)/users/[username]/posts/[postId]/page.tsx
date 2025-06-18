interface Props {
  params: {
    postId: string; // ✅ Match folder name exactly
  };
}

const singleProfilePost = async ({ params }: Props) => {
  const post = params.postId;
  console.log(post);

  return <h1>PostId: {post}</h1>;
};

export default singleProfilePost;
