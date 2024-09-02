import { useContext } from 'react';
import styles from './styles/ShopCategory.module.css';
import {ShopContext} from "../context/ShopContext";
import dropdown_icon from '../components/assets/dropdown_icon.png';
import Item from '../components/Item/Item';

export const ShopCategory = (props) => {

    const {all_products} = useContext(ShopContext)

  return <div className={styles.shopCategory}>
    <img className={styles.shopCategoryBanner} src={props.banner}/>

    <div className={styles.shopCategoryIndexSort}>
        <p>
            <span>Showing 1-12</span> out of 36 products
        </p>

        <div className={styles.shopCategorySort}>
            Sort by <img src={dropdown_icon} alt="dropdown icon" />
        </div>
    </div>

    <div className={styles.shopCategoryProducts}>
        {all_products.map((item, i) => {
            if (props.category === item.category) {
                return  <Item
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            } // did not return null
        })}
    </div>
    <div className={styles.shopCategoryLoadMore}>
        Load More
    </div>
  </div>;
};
