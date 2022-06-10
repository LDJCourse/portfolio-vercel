export const frontend = [
  {
    id: 1,
    name: "HTML",
  },
  {
    id: 2,
    name: "CSS",
  },
  {
    id: 3,
    name: "Tailwind CSS",
  },
  {
    id: 4,
    name: "Bootstrap",
  },
  {
    id: 5,
    name: "Javascript",
  },
  {
    id: 6,
    name: "React",
  },
  {
    id: 7,
    name: "Redux",
  },
  {
    id: 8,
    name: "Typescript",
  },
];

export const backend = [
  {
    id: 1,
    name: "NodeJS",
  },
  {
    id: 2,
    name: "NPM",
  },

  {
    id: 3,
    name: "MongoDB",
  },
  {
    id: 4,
    name: "Mongoose",
  },
  {
    id: 5,
    name: "Express",
  },
  {
    id: 7,
    name: "NextJS",
  },
];

export const versionControl = [
  {
    id: 1,
    name: "Git",
  },
  {
    id: 2,
    name: "Github",
  },
];
export const hosting = [
  {
    id: 1,
    name: "Heroku",
  },
  {
    id: 2,
    name: "Vercel",
  },
];

export const mobile = [
  {
    id: 1,
    name: "React Native",
  },
];

const PanelBoxItem = ({ name }) => {
  return (
    <li className="mb-2 ">
      <p className="my-1 text-sm transition transform delay-150 ease-in hover:-translate-y-1 hover:text-gray-300">
        {name}
      </p>
    </li>
  );
};

export const frontendList = frontend.map((list) => (
  <PanelBoxItem key={list.id} name={list.name} />
));

export const backendList = backend.map((list) => (
  <PanelBoxItem key={list.id} name={list.name} />
));

export const hostingList = hosting.map((list) => (
  <PanelBoxItem key={list.id} name={list.name} />
));

export const versionControlList = versionControl.map((list) => (
  <PanelBoxItem key={list.id} name={list.name} />
));
export const mobileList = mobile.map((list) => (
  <PanelBoxItem key={list.id} name={list.name} />
));
