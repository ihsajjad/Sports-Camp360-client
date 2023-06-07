

const SectionTitle = ({title, subTitle}) => {
    console.log(title, subTitle);
    return (
        <div className="border-l-4 font-semibold text-slate-600">
            <h3 className="text-3xl">{title}</h3>
            <p className="">{subTitle}</p>
        </div>
    );
};

export default SectionTitle;