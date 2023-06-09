/* eslint-disable react/prop-types */
import styled from "styled-components";
import diasdasemana from "../../constants/diasdasemana";

import trash from "../../assets/trash.png";
import { useContext } from "react";
import { BASE_URL } from "../../constants/urls";
import axios from "axios";
import { UserContext } from "../../contexts/UserContext";

export default function Habito(props) {
  const { user } = useContext(UserContext);
  const { id, name, days, reload } = props;

  function deleteHabito() {
    console.log("deletar habito");
    if (window.confirm("Tem certeza que quer deletar este item?")) {
      const URL = `${BASE_URL}habits/${id}`;

      const config = {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      };

      axios
        .delete(URL, config)
        .then(() => {
          reload();
        })
        .catch((erro) => {
          alert(erro.response.data.message);
          console.log(erro);
        });
    } else {
      console.log("cancelado");
    }
  }
  return (
    <HabitoContainer data-test="habit-container">
      <div>
        <h3 data-test="habit-name">{name}</h3>
        <ListaDias>
          {diasdasemana.map((buttonDia) => (
            <Dia
              key={buttonDia.id}
              id={buttonDia.id}
              diaSelecionado={days.includes(buttonDia.id)}
              data-test="habit-day">
              {buttonDia.day}
            </Dia>
          ))}
        </ListaDias>
      </div>

      <div>
        <button>
          <img
            src={trash}
            onClick={deleteHabito}
            data-test="habit-delete-btn"
          />
        </button>
      </div>
    </HabitoContainer>
  );
}
const HabitoContainer = styled.div`
  margin-bottom: 10px;
  background-color: white;
  width: 303px;
  padding: 18px 16px 15px 19px;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;

  h3 {
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 25px;
    overflow: hidden;
    width: 170px;

    color: #666666;
    margin-bottom: 8px;
  }

  button {
    padding: 0 0 20px 20px;
    background-color: white;
  }
`;

const Dia = styled.div`
  border: 1px solid #d5d5d5;
  background: #ffffff;
  border-radius: 5px;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 4px;
  cursor: pointer;
  font-style: normal;
  font-weight: 400;
  font-size: 19.976px;
  line-height: 25px;
  /* identical to box height */

  color: ${(props) => (props.diaSelecionado === true ? "#FFFFFF" : "#DBDBDB")};
  background-color: ${(props) =>
    props.diaSelecionado === true ? "#CFCFCF" : "#FFFFFF"};
`;
const ListaDias = styled.div`
  display: flex;
  justify-content: flex-start;
`;
