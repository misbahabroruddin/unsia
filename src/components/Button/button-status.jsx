import { twMerge } from "tailwind-merge";

export const ButtonStatus = ({ status }) => {
  let buttonClass = "bg-[#D5FACC] text-[#23B900]";
  let buttonText = "Disetujui";

  if (status === "approve") {
    buttonClass = "bg-[#D5FACC] text-[#23B900]";
    buttonText = "Disetujui";
  } else if (status === "not-yet") {
    buttonClass = "bg-[#CCCCCC] text-[#333333]";
    buttonText = "Not Yet";
  } else if (status === "pending") {
    buttonClass = "bg-[#FFF7CC] text-[#998200]";
    buttonText = "Pending";
  }

  return (
    <button className={twMerge("px-4 py-1 rounded-lg", buttonClass)} disabled>
      {buttonText}
    </button>
  );
};
