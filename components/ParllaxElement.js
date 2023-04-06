import { useEffect, useContext } from "react";
import { ScrollContext } from "./ScrollContainer";

export default props => {
  const context = useContext(ScrollContext);
  useEffect(() => context.addBlock(props), []);
  return props.children;
};
