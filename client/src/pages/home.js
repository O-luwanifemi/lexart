import Card from '../components/card/card';
import Header from '../components/header/header';


const Home = () => {
    return (
        <div className="main_block">
            <Header />

            <section>
                <Card
                    primaryText="Product #1"
                    secondaryText="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam sint veritatis provident vel"
                    price="$120"
                />

                <Card
                    primaryText="Product #2"
                    secondaryText="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam sint veritatis provident vel"
                    price="$120"
                />

                <Card
                    primaryText="Product #3"
                    secondaryText="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam sint veritatis provident vel"
                    price="$120"
                />
            </section>
        </div>
    );
};

export default Home;