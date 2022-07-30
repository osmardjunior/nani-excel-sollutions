import styles from "./brands.module.scss"

const Brands = () => {
    return (
      <div>
        <h3 className={styles.Title}>
          Quem já aprendeu Excel com a Excel Solutions?
        </h3>
      <div className={styles.BrandsSquare}>
        <img classNamne={styles.firstLogo}
        src="/assets/brands/Furukawa 1.svg"
        alt="Furukawa"
      />

       <img
     
        src="/assets/brands/Mondelez 1.svg"
        alt="Mondelez"
      />

       <img
        
        src="/assets/brands/O Boticário 1.svg"
        alt="Boticario"
      />

       <img
        className={styles.brandSquare}
        src="/assets/brands/Paraná Banco 1.svg"
        alt="ParanaBanco"
      />

       <img
      
        src="/assets/brands/PUCPR 1.svg"
        alt="PUCPR"
      />

      <img
       
        src="/assets/brands/Renault 1.svg"
        alt="Renault"
      />

      <img
     
        src="/assets/brands/Rumo 1.svg"
        alt="Rumo"
      />

      </div>
     
      </div>
      
    );
  };
  export default Brands;

