import { Helmet } from "react-helmet-async";
import menuImg from "../../src/assets/menu/banner3.jpg";
import dessertImg from "../../src/assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../src/assets/menu/pizza-bg.jpg";
import saladImg from "../../src/assets/menu/salad-bg.jpg";
import soupImg from "../../src/assets/menu/soup-bg.jpg";
import SectionTitle from "../components/SectionTitle";
import useMenu from "../hooks/useMenu";
import MenuCategory from "./MenuCategory";
import Cover from "./Shared/Cover";

const Menu = () => {
  const [menu] = useMenu();
  const desserts = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const offered = menu.filter((item) => item.category === "offered");
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      <Cover img={menuImg} title="Our menu"></Cover>
      <SectionTitle
        subHeading="Don't Miss"
        heading="Today's Offer"
      ></SectionTitle>

      <MenuCategory items={offered}></MenuCategory>
      {/* dessert menu items  */}
      <MenuCategory
        items={desserts}
        title="dessert"
        img={dessertImg}
      ></MenuCategory>
      <MenuCategory items={pizza} title={"pizza"} img={pizzaImg}></MenuCategory>
      <MenuCategory items={salad} title={"salad"} img={saladImg}></MenuCategory>
      <MenuCategory items={soup} title={"soup"} img={soupImg}></MenuCategory>
    </div>
  );
};

export default Menu;
