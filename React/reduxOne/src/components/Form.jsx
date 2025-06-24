import { useForm } from "react-hook-form";
const Form = ({ handleFormSubmitData }) => {
  const { register, handleSubmit, reset } = useForm();
  const handleFormSubmit = (data) => {
    handleFormSubmitData(data);
    reset();
  };
  (data) => handleFormSubmitData(data);
  return (
    <div className="mt-12 flex gap-12 justify-center padding">
      <form
        className="flex gap-12 bg-zinc-100  shadow-lg rounded-sm"
        action=""
        onSubmit={handleSubmit(handleFormSubmit)}
      >
        <input
          {...register("name")}
          className="rounded-md px-2 py-1 text-base font-semibold outline-none"
          type="text"
          placeholder="name"
        />
        <input
          {...register("email")}
          className="rounded-md px-2 py-1 text-base font-semibold outline-none"
          type="text"
          placeholder="email"
        />
        <input
          {...register("image")}
          className="rounded-md px-2 py-1 text-base font-semibold outline-none"
          type="text"
          placeholder="image url"
        />
        <input
          className=" rounded-md padding-button py-1 bg-blue-500 text-white font-semibold hover:bg-blue-100 hover:text-blue-400"
          type="submit"
        />
      </form>
    </div>
  );
};

export default Form;
