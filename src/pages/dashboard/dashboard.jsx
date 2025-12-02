import { Outlet } from "react-router-dom";
import { Menu } from "antd";
// ... imports dos ícones (mantive os mesmos)
import styles from "./styles.module.css";
import Logo2 from "../../assets/logo2.png";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

export function Dashboard() {
  const navigate = useNavigate();
  const location = useLocation();

  
  const chaveAtual = location.pathname.split('/')[2];

  const menuSelecionado = location.pathname === '/dashboard' || !chaveAtual
    ? [] 
    : [chaveAtual];
  

  function handleMenuClick(info) {
    
    navigate(`/dashboard/${info.key}`);
  }

  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <button className={styles.logoButton} onClick={() => navigate("/dashboard")}>
          <img src={Logo2} alt="Logo" />
        </button>

        <Menu
          onClick={handleMenuClick}
          selectedKeys={menuSelecionado}
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