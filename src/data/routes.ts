type SubmenuItem = {
  id: number;
  name: string;
  path: string;
  icon: string;
};

export type Route = {
  id: number;
  name: string;
  path: string;
  icon: string;
  submenu?: SubmenuItem[];
};

export const routes: Route[] = [
  {
    id: 1,
    name: "Solutions",
    path: "/solutions",
    icon: "",
    submenu: [
      {
        id: 1,
        name: "abc",
        path: "/abc",
        icon: "",
      },
      {
        id: 2,
        name: "xyz",
        path: "/xyz",
        icon: "",
      },
      {
        id: 3,
        name: "xyz",
        path: "/xyz",
        icon: "",
      },
    ],
  },
  {
    id: 2,
    name: "Services",
    path: "/services",
    icon: "",
  },
  {
    id: 3,
    name: "About Us",
    path: "/about-us",
    icon: "",
  },
];
