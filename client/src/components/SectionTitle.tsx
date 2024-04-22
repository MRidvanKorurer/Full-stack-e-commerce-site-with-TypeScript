import React from "react";

interface IProps {
    title: string,
    desc: string
}

const SectionTitle: React.FC<IProps> = ({title, desc}) => {
  return (
    <div className="section-title flex justify-center flex-col items-center gap-2 my-10">
        <h2 className=" font-bold text-3xl">{title}</h2>
        <p className=" text-xl">{desc}</p>
    </div>
  );
};

export default SectionTitle;
