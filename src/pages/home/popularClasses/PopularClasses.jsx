import SectionTitle from "../../../components/SectionTitle";
import SingleClass from "../../../components/SingleClass";
import useClasses from "../../../hooks/useClasses";


const PopularClasses = () => {

    const [, classes] = useClasses();

    return (
        <div className="md:py-12 py-8">
            <SectionTitle title={"Popular Classes"} subTitle={"Discover the Best Classes at Sports Camp 360"}> </SectionTitle>
            <div className="grid md:grid-cols-3 grid-cols-1 gap-8 p-5">
                {
                    classes.map((singleClass, i) => <SingleClass key={i} singleClass={singleClass}/>)
                }
            </div>
        </div>
    );
};

export default PopularClasses;