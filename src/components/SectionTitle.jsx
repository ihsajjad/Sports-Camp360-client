

const SectionTitle = ({title, subTitle}) => {
    
    return (
        <div className="border-l-8 border-[#FB00D9] pl-3  font-semibold text-slate-600">
            <h3 className="text-3xl font-bold text-[#FB00D9]">{title}</h3>
            <p className="">{subTitle}</p>
        </div>
    );
};

export default SectionTitle;