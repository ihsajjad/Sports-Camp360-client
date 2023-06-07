import Banner from "../banner/Banner";
import PopularClasses from "../popularClasses/PopularClasses";
import PopularInstructors from "../popularInstructors/PopularInstructors";


const Home = () => {
    return (
        <main>
            <Banner />
            <PopularClasses />
            <PopularInstructors />
        </main>
    );
};

export default Home;