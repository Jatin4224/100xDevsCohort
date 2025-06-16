import Image from "next/image";
import one from "../../public/one.jpg";
import two from "../../public/two.png";

export const metadata = {
  title: "Images page",
  description: "This is Images website",
  author: "Jatin Sharma",
  keywords: ["nextjs", "images", "images dekho"],
  icons: "/two.png",
};
export default function ImagePage() {
  return (
    <div className="flex justify-center items-center  bg-gray-200 w-screen h-screen gap-12 relative">
      <Image
        src={two}
        width={100}
        height={100}
        alt="image"
        className="w-40 h-40 rounded-lg absolute z-10"
      />
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
    </div>
  );
}
