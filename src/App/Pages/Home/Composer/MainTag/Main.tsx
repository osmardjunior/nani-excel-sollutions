import styles from "./Main.module.scss";

function Main() {
  const idLabelledby = "description-title";

  return (
    <main className={styles.main}>
      <section className={styles.sectionPhoto} aria-labelledby={idLabelledby}>
        <header className={styles.sectionPhoto__header}>
          <h2 className={styles.title} itemID={idLabelledby}>
            Comametodologia Excel Solutions, épossível aprenderobásico do Excel
            na prática em &nbsp;
            <span className={styles.title__accent}>só 4 dias.</span>
          </h2>
        </header>

        <div className={styles.image}>
          <img src="https://picsum.photos/1024/768" alt="" />
        </div>
      </section>
    </main>
  );
}

export default Main;
