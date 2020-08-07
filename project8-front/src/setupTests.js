import Enzyme, { EnzymeAdapter } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configuer({
  adapter: new EnzymeAdapter(),
  disableLifecycleMethods: true,
});
