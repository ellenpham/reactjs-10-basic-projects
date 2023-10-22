import { useState } from "react";
import menu from './data';
import Title from "./Title";
import Menu from "./Menu";
import Categories from "./Categories";

// const tempCategories = menu.map((item) => item.category);
// const tempSet = new Set(tempCategories);
// const tempItems = ['all', ...tempSet]
//console.log(tempItems)


const allCategories = ['all', ...new Set(menu.map((item) => item.category))]

function App() {

  const [menuItems, setMenuItems] = useState(menu);
  const [categories, setCategories] = useState(allCategories)
  //console.log(categories)

  const filterItems = (category) => {
    console.log(category)

    // early return because code will keep being read as 
    // setMenu is done then do more filtering, then setMenu is set again --> not working
    if (category === 'all'){
      setMenuItems(menu)
      return;
    };

    const newItems = menu.filter( (item) => item.category === category)
    setMenuItems(newItems);
  }

  return (
    <main>
      <section className="menu">
        <Title text='Our menu' />
        <Categories categories={categories} filterItems={filterItems}/>
        <Menu items={menuItems} />
      </section>
    </main>
  );
}
export default App;
