import Banner from "../banner/Banner";
import PopularClasses from "../popularClasses/PopularClasses";
import PopularInstructors from "../popularInstructors/PopularInstructors";
import Testimonials from "../testimonials/Testimonials";


const Home = () => {
    return (
        <main>
            <Banner />
            <PopularClasses />
            <PopularInstructors />
            <Testimonials />
        </main>
    );
};

export default Home;