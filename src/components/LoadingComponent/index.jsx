import { Container } from "./styles";

import GrupoFCamara from "../../assets/GrupoFCamara.svg";
import BrandName from "../../assets/BrandName.svg";
import Logo from "../../assets/Logo.svg";
import LoadingImage from "../../assets/loading.gif";

export function LoadingComponent() {
  return (
    <>
      <Container>
        <div className="content">
          <div>
            <img src={Logo} alt="Logo do App" style={{ marginRight: "1vw" }} />
            <img src={BrandName} alt="Orange Space" />
          </div>
          <img src={LoadingImage} alt="loading"style={{  width: "20%" }}/>
          <img
            style={{ marginBottom: "2rem", width: "20%" }}
            src={GrupoFCamara}
            alt="Logo da FCamara"
          />
        </div>
      </Container>
    </>
  );
}
