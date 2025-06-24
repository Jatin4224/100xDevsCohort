import Image from "next/image";
import one from "../../public/one.jpg";
// <<<<<<< nextjs
// import two from "../../public/two.png";

// // export const metadata = {
// //   title: "Images page",
// //   description: "This is Images website",
// //   author: "Jatin Sharma",
// //   keywords: ["nextjs", "images", "images dekho"],
// //   icons: "/two.png",
// // };
// =======

// >>>>>>> main
export default function ImagePage() {
  return (
    <div className="flex justify-center items-center  bg-gray-200 w-screen h-screen gap-12 relative">
      <Image
        src={one}
        alt="image2"
        className="w-40 h-40 rounded-lg  relative  "
        fill={true}
        quality={100}
        priority={false}
        placeholder="blur"
        blurDataURL=""
      />
      <div>
        <h1 className="text-5xl text-yellow-600 z-10 absolute -translate-x-[180%] border-b border-yellow-800 shadow-lg ">
          Watch One Piece
        </h1>
      </div>
    </div>
  );
}
