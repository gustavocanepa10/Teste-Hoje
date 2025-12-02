import { Outlet } from "react-router-dom";
import { Menu } from "antd";
import {
  HomeOutlined,
  UserOutlined,
  HomeTwoTone,
  FileTextOutlined,
  TeamOutlined,
  DollarOutlined,
  WalletOutlined,
} from "@ant-design/icons";
import styles from "./styles.module.css";
import Logo2 from "../../assets/logo2.png";
import { useNavigate } from "react-router-dom";


export function Dashboard() {
  const navigate = useNavigate();

  
    function handleMenuClick(info) {
    navigate(`/dashboard/${info.key}`);

  }
  return (
      <div className={styles.container}>

         <div className={styles.sidebar}>
      <button className={styles.logoButton} onClick={() => navigate("/")}>
      <img src={Logo2} />
      </button>
      
      <Menu
        onClick={handleMenuClick}
        color="#5791CE"
        className={styles.list}
        items={[
          { key: "clientes", label: "Clientes" },
          { key: "imoveis", label: "Imóveis" },
          { key: "contratos", label: "Contratos" },
          { key: "usuarios", label: "Usuários" },
          { key: "areceber", label: "A Receber" },
          { key: "apagar", label: "A Pagar" },
        ]}
        mode="vertical"
      />



      
    </div>

    <div className={styles.content}>
        <Outlet />   
      </div>
        
      </div>
     
    

      
    
    

        


  );
}
