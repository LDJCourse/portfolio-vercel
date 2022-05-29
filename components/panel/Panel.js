// Components
import { PanelBox } from "./PanelBox";

// Data
import { frontendList, backendList, otherList } from "../panel/data/panelData";

const Panel = () => {
  return (
    <div className="">
      <PanelBoxGroup>
        <PanelBox title="Frontend">{frontendList}</PanelBox>
        <PanelBox title="Backend">{backendList}</PanelBox>
        <PanelBox title="Other technologies">{otherList}</PanelBox>
      </PanelBoxGroup>
    </div>
  );
};

const PanelBoxGroup = ({ children }) => {
  return <div className="grid grid-cols-1 lg:grid-cols-2">{children}</div>;
};

export default Panel;
