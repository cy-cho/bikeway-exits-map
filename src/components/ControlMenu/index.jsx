import { useTheme } from "styled-components";
import { Container, Button } from "./style";

import { ReactComponent as Geolocation } from "../../assets/controlmenu/position.svg";
import { ReactComponent as ZoomIn } from "../../assets/controlmenu/add.svg";
import { ReactComponent as ZoomOut } from "../../assets/controlmenu/substract.svg";

function ControlMenu() {
  const { primary } = useTheme().colors;
  return (
    <Container>
      <Button>
        <Geolocation alt="geolocation" width={24} height={24} fill={primary} />
      </Button>
      <Button>
        <ZoomIn alt="zoomIn" width={24} height={24} fill={primary} />
      </Button>
      <Button>
        <ZoomOut alt="zoomOut" width={24} height={24} fill={primary} />
      </Button>
    </Container>
  );
}

export default ControlMenu;
