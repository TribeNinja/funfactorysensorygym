import Link from "next/link";

export const AotaButton = (props) => {
  const { link, type, label } = props;
  return (
    <Link href={`${link}`} passHref>
      <button
        className={`border-solid border-2 px-7 py-2 w-[90vw] lg:w-[200px] rounded-3xl font-semibold border-[#691C64]`}
        style={{
          backgroundColor: type === "bg" ? "#691C64" : "transparent",
          color: type === "bg" ? "#e5e5e5" : "#691C64",
        }}
        onClick={() => {
          console.log("clicked");
        }}
      >
        {label}
      </button>
    </Link>
  );
};
