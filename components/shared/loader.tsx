import Image from "next/image";

const Loader = () => {
  return (
    <>
      <Image
        src="/loading-art.png"
        width={400}
        height={400}
        alt="loading-art"
        className="pointer-events-none select-none"
      />
      <span className="text-3xl loading">Loading</span>
    </>
  );
};
export default Loader;
