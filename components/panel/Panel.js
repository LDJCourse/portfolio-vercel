// Components
import { PanelBox } from "./PanelBox";

// Data
import {
  frontendList,
  backendList,
  hostingList,
  versionControlList,
  mobileList,
} from "../panel/data/panelData";

const Panel = () => {
  return (
    <div className="">
      <PanelBoxGroup>
        <PanelBox title="Frontend">{frontendList}</PanelBox>
        <PanelBox title="Backend">{backendList}</PanelBox>
        <PanelBox title="Hosting">{hostingList}</PanelBox>
        <PanelBox title="Version control">{versionControlList}</PanelBox>
        <PanelBox title="Mobile development">{mobileList}</PanelBox>
      </PanelBoxGroup>
    </div>
  );
};

const PanelBoxGroup = ({ children }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
      {children}
    </div>
  );
};

export default Panel;
