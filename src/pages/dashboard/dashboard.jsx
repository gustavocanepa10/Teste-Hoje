import { useState } from "react"; 
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { Menu, Drawer, Button } from "antd"; 
import { MenuOutlined } from "@ant-design/icons"; 
import styles from "./styles.module.css";
import Logo2 from "../../assets/logo2.png";

export function Dashboard() {
  const navigate = useNavigate();
  const location = useLocation();
  

  const [openMobile, setOpenMobile] = useState(false);

  const chaveAtual = location.pathname.split('/')[2];

  const menuSelecionado = location.pathname === '/dashboard' || !chaveAtual
    ? [] 
    : [chaveAtual];
  
  
  const menuItems = [
    { key: "clientes", label: "Clientes" },
    { key: "imoveis", label: "Imóveis" },
    { key: "contratos", label: "Contratos" },
    { key: "usuarios", label: "Usuários" },
    { key: "areceber", label: "A Receber" },
    { key: "apagar", label: "A Pagar" },
  ];

  function handleMenuClick(info) {
    navigate(`/dashboard/${info.key}`);
    setOpenMobile(false); 
  }

  return (
    <div className={styles.container}>
      
    
      <Button 
        className={styles.mobileBtn}
        icon={<MenuOutlined />}
        onClick={() => setOpenMobile(true)}
      />

      <Drawer
        placement="left"
        onClose={() => setOpenMobile(false)}
        open={openMobile}
        styles={{ body: { padding: 0, backgroundColor: '#004AAD' }, header: { display: 'none' } }}
      >
         <div className={styles.sidebarContent}>
            <button className={styles.logoButton} onClick={() => { navigate("/dashboard"); setOpenMobile(false); }}>
              <img src={Logo2} alt="Logo" className={styles.logoImg} />
            </button>
            <Menu
              onClick={handleMenuClick}
              selectedKeys={menuSelecionado}
              className={styles.list}
              items={menuItems}
              mode="vertical"
            />
         </div>
      </Drawer>

     
      <div className={styles.sidebar}>
        <button className={styles.logoButton} onClick={() => navigate("/dashboard")}>
          <img src={Logo2} alt="Logo" />
        </button>

        <Menu
          onClick={handleMenuClick}
          selectedKeys={menuSelecionado}
          className={styles.list}
          items={menuItems}
          mode="vertical"
        />
      </div>

      <div className={styles.content}>
        <Outlet />
      </div>
    </div>
  );
}