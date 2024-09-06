import styles from "./DescriptionBox.module.css";

const DescriptionBox = () => {
  return (
    <div className={styles.descriptionBox}>
      <div className={styles.descriptionBoxNavigator}>
        <div className={styles.descriptionBoxNavBox}>Description</div>
        <div className={`${styles.descriptionBoxNavBox} ${styles.fade}`}>
          Reviews (211)
        </div>
      </div>
      <div className={styles.descriptionBoxDescription}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque
          obcaecati, magni libero numquam eligendi ratione laudantium alias, a
          delectus non accusamus? Quae, animi vitae?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad fugiat,
          saepe, et nobis consequuntur, libero perspiciatis aliquid vitae modi
          esse quos hic vel odio excepturi tempora quidem dolores. Placeat odio
          ex vel nulla, ipsam provident ea accusantium.
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
