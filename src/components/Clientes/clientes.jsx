import { getUsers } from "../../api/getUsers";
import styles from "./styles.module.css";
import { useQuery } from "@tanstack/react-query";

export function Clientes() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["users"],
    queryFn: getUsers,
    refetchOnWindowFocus: false,
    staleTime: Infinity,
  });

   if (isLoading) return <p>Carregando...</p>;
  if (error) return <p>Erro ao buscar usuários</p>;
  

  return (

    <div className={styles.container}>
      <h1 className={styles.title}>Lista de Clientes</h1>

      <table className={styles.table}>
        <thead>
          <tr>
            <th>Foto</th>
            <th>Nome</th>
            <th>Email</th>
            <th>Cidade</th>
            <th>Telefone</th>
          </tr>
        </thead>


        

        <tbody>
          {data.map((user, index) => (
            <tr key={index}>
              <td>
                <img
                  src={user.picture.thumbnail}
                  className={styles.avatar}
                />
              </td>
              <td>{user.name.first} {user.name.last}</td>
              <td>{user.email}</td>
              <td>{user.location.city}</td>
              <td>{user.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
