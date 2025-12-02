import { useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
import SadFace from "../../assets/sad-face.png"

export function NotFoundPage() {

    const navigate  = useNavigate()

  return (
    <div className={styles.container}>

       <img src={SadFace} alt="" /> 
      <h2 className={styles.title}>
        
        ERRO 404</h2>
      <h2 className={styles.subtitle}>
        OOPS! ESSA PÁGINA NÃO FOI ENCONTRADA

      </h2>

      <button onClick={() => navigate("/")}  className={styles.text}>
        <span>
           VOLTAR PARA A PÁGINA INICIAL
        </span>
        
      </button>
    </div>
  );
}