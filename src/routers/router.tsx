import { Root, Tools } from "../routes";
import { Paths } from "../store";

export const router = [
  {
    path: Paths.root,
    element: <Root />
  },
  {
    path: Paths.tools,
    element: <Tools />
  }
];
