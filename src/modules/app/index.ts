import { buildFacade } from "react-coat";
import { State } from "./model";
import namespace from "./namespace";

export default buildFacade(namespace);
export { State };
