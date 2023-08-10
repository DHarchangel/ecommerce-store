import { Color } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/colors`;

const getcolors = async (): Promise<Color[]> => {
  const res = await fetch(URL, { cache: "no-store" });
  return res.json();
};
export default getcolors;
