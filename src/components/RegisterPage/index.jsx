import { useEffect, useState } from "react";
import api from "../../api";

import { Container } from "./styles";
import { toast } from "react-toastify";
import CloseModalButton from "../../assets/CloseModal.svg";
import { LoadingComponent } from "../LoadingComponent";

export function RegisterPage({
  showModal,
  setShowModal,
  handleModal,
  dimensions,
}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("");
  const [validPassword, setValidPassword] = useState("");
  const [loading, setLoading] = useState(false);

  function handleUserRegister(event) {
    event.preventDefault();

    setLoading(true);

    if (validLength && hasNumber && upperCase && lowerCase && specialChar) {
      setValidPassword(true);
    } else {
      setValidPassword(false);
    }

    const data = {
      name,
      email,
      password,
      confirmPassword,
      validPassword,
      role,
    };

    api({
      method: "POST",
      url: "/colaboradores",
      data,
    })
      .then((res) => {
        toast.success("Registro feito com sucesso!");
        setLoading(false);
      })
      .catch((error) => {
        toast.error(error.response.data.message);
        setLoading(false);
      });
  }

  const [validLength, setValidLength] = useState(null);
  const [hasNumber, setHasNumber] = useState(null);
  const [upperCase, setUpperCase] = useState(null);
  const [lowerCase, setLowerCase] = useState(null);
  const [specialChar, setSpecialChar] = useState(null);
  // const [match, setMatch] = useState(null);

  useEffect(() => {
    setValidLength(password.length > 7 ? true : false);
    setHasNumber(/\d/.test(password) ? true : false);
    setUpperCase(/[A-Z]/.test(password) ? true : false);
    setLowerCase(/[a-z]/.test(password) ? true : false);
    setSpecialChar(/[^A-Z a-z0-9]/.test(password) ? true : false);
  }, [password]);
  //Bloco de validação de senha END

  if (loading) {
    return (
      <Container
        onSubmit={handleUserRegister}
        showModal={showModal}
        setShowModal={setShowModal}
        handleModal={handleModal}
      >
        <LoadingComponent dimensions={dimensions} />
      </Container>
    );
  }

  return (
    <>
      <Container
        onSubmit={handleUserRegister}
        showModal={showModal}
        setShowModal={setShowModal}
        handleModal={handleModal}
      >
        <img
          src={CloseModalButton}
          alt="Fechar"
          onClick={handleModal}
          className="closeModalIcon"
        />
        <div className="regbox">
          <h2>Cadastro</h2>
          <div className="row">
            <label htmlFor="nome" className="column">
              <input
                name="nome"
                type="text"
                className="textbox-input namebox"
                style={{ marginRight: "1vw" }}
                required
                placeholder="Digite seu nome"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </label>
            <label htmlFor="role">
              <input
                type="text"
                value={role}
                className="textbox-input rolebox"
                placeholder="Digite seu cargo"
                onChange={(event) => setRole(event.target.value)}
              />
            </label>
          </div>
          <label htmlFor="email" className="column">
            <input
              name="email"
              type="email"
              className="row textbox-input emailbox"
              required
              placeholder="Digite seu email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </label>
          <div className="row">
            <label htmlFor="senha">
              <input
                name="senha"
                type="password"
                className="textbox-input passwordbox"
                style={{ marginRight: "1vw" }}
                required
                placeholder="Digite sua senha"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </label>
            <label htmlFor="confirmSenha">
              <input
                id="cp"
                name="confirmSenha"
                type="password"
                className="textbox-input passwordbox"
                required
                placeholder="Confirme sua senha"
                value={confirmPassword}
                onChange={(event) => setConfirmPassword(event.target.value)}
              />
            </label>
          </div>
          <label>
            <div
              className={validLength === true ? "basetext green" : " basetext "}
              style={{ marginTop: "5px" }}
            >
              Senha com 8 ou mais dígitos
            </div>
            <div className={upperCase ? "basetext green" : " basetext "}>
              Possui letra maiúscula
            </div>
            <div className={lowerCase ? "basetext green" : " basetext "}>
              Possui letra minúscula
            </div>
            <div className={hasNumber ? "basetext green" : " basetext "}>
              Possui números
            </div>
            <div className={specialChar ? "basetext green" : " basetext "}>
              Possui caractéres especiais
            </div>
          </label>

          <div className="column">
            <button type="submit">Fazer Cadastro</button>
          </div>
        </div>
      </Container>
    </>
  );
}
