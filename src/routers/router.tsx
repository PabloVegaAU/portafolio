import Root from "../routes/root";
import { Tools } from "../routes/tools";
import { Paths } from "../store";

export const router = [
  {
    path: Paths.root,
    element: <Root />,
  },
  {
    path: Paths.tools,
    element: <Tools />,
  },
];
