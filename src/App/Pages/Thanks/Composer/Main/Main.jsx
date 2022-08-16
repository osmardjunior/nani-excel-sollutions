import TopWrapper from "../../Components/TopWrapper/TopWrapper";
import styles from "./Main.module.scss";


  
const Main = () => {
  return (
    <main className={styles.main}>
      <h2 className={styles.title}>Assista às aulas!</h2>

      <TopWrapper
        title="Aula 1"
        dateDay="09/08"
        dateString="Terça-feira"
        blobSide={true}
        isVideo={false} //quando recerber video trocar url e trocar false por true
        url="/assets/video/aguarde/verde.jpg"
      />

   
      <TopWrapper
        title="Aula 2"
        dateDay="10/08"
        dateString="Terça-feira"
        blobSide={false}
        isVideo={false}
        url="/assets/video/aguarde/verde.jpg"
      />
      <TopWrapper
        title="Aula 3"
        dateDay="11/08"
        dateString="Terça-feira"
        blobSide={true}
        isVideo={false}
        url="/assets/video/aguarde/verde.jpg"
      /> 
      
      <TopWrapper
        title="MasterClass"
        dateDay="12/08"
        dateString="Terça-feira"
        blobSide={false}
        isVideo={false}
        url="/assets/video/maisesperada/laranja.jpg"
      />
    </main>
  );
};

export default Main;
