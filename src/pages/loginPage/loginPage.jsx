import { useState } from "react";
import { Input, message } from "antd";
import {
  MailOutlined,
  LockOutlined,
  EyeInvisibleOutlined,
  EyeTwoTone,
} from "@ant-design/icons";
import styles from "./styles.module.css";
import Logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";

export function LoginPage() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();



  function handleLogin(e) {
    e.preventDefault();
    if (email === "admin" && senha === "admin") {
      message.success("Login realizado com sucesso!");
     
      setTimeout(() => {
        navigate("/dashboard");
      }, 1000);
    } else {
      message.error("Login ou senha incorretos!");
    }
  }

  return (
    <div className={styles.container}>
     
      <div className={styles.card}>
        <div className={styles.logoContainer}>
          <img className={styles.logo} src={Logo} alt="Logo" />
        </div>

        <h1>
          Login
        </h1>

        <form onSubmit={handleLogin}>
          <label>E-mail</label>
          <Input
            size="large"
            placeholder="Digite seu e-mail"
            prefix={<MailOutlined />}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            
          />

          <label>Senha</label>
          <Input.Password
            size="large"
            placeholder="***********"
            prefix={<LockOutlined />}
            iconRender={(visible) =>
              visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
            }
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />

          <button type="submit" className={styles.button}>
            Entrar
          </button>

          <p className={styles.forgot}>
            Esqueceu a senha? <span>Clique aqui</span>
          </p>
        </form>
      </div>
    </div>
  );
}