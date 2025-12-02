import { useState } from "react";
import { Input, Button } from "antd";
import {
  MailOutlined,
  LockOutlined,
  EyeInvisibleOutlined,
  EyeTwoTone,
} from "@ant-design/icons";
import styles from "./styles.module.css";
import Logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";
import { message } from "antd";

export function LoginPage() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const navigate = useNavigate();

  function handleLogin(e) {
    e.preventDefault();
    if (email === "admin" && senha === "admin") {
      message.success("Login realizado!");
      navigate("/dashboard");
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

        <form
          onSubmit={handleLogin}
          action="
        "
        >
          <label>E-mail</label>
          <Input style={{display:"flex", gap : 6, alignItems : "center"}}
            size="large"
            placeholder="Sua conta de e-mail"
            color="black"
            prefix={<MailOutlined />}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label>Senha</label>
          <Input.Password
            style={{display:"flex", gap : 6, alignItems : "center"}}
            size="large"
            color="black"
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
