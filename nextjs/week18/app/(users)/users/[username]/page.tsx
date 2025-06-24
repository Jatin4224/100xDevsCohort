// const singleProfile = async (props: any) => {
//   const userName = await props.params.username;
//   console.log(userName);
//   return <h1>dynamic</h1>;
// };

// export default singleProfile;
interface Props {
  params: {
    username: string;
  };
}

const singleProfile = async ({ params }: Props) => {
  const userName = params.username;
  console.log(userName);

  return <h1>Profile: {userName}</h1>;
};

export default singleProfile;
