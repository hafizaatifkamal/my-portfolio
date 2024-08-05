import react_logo from "../images/react.svg";
import node_logo from "../images/node.png";
import mongodb_logo from "../images/mongodb.svg";
import tailwind_logo from "../images/tailwind.png";
import antD_logo from "../images/antDesign.svg";
import micro_logo from "../images/microservices.svg";
import redis_logo from "../images/redis.png";
import express_logo from "../images/express.svg";
import aws_logo from "../images/aws.png";
import mui_logo from "../images/mui.png";
import socket_logo from "../images/Socket-io.png";
import redux_logo from "../images/redux.png";
import fire_logo from "../images/firebase.png";
import ts_logo from "../images/typescript.png";

export const projects = [
  {
    title: `DexToro`,
    subtitle: `Blockchain Derivatives Protocol`,
    description: `DexToro is a decentralized derivatives exchange oﬀering perpetual futures trading with leverage
      powered by Ethereum & Optimism. Gain exposure to a variety of on-chain and real-world assets
      while having access to advanced trading functionality through the proprietary DexToro Smart
      Wallet.`,
    technologies: [
      { name: "React", logo: react_logo },
      { name: "Tailwind CSS", logo: tailwind_logo },
      { name: "Typescript", logo: ts_logo },
      { name: "Websocket", logo: socket_logo },
      { name: "NodeJS", logo: node_logo },
    ],
    demoLink: "https://www.dextoro.com/",
    githubLink: "https://github.com/DexToroProtocol/",
  },
  {
    title: `DexToro - Onchain Derivatives Protocol`,
    subtitle:
      "On-chain self-custodial derivatives exchange powered by Ethereum smart contracts",
    description: `DexToro is a decentralized blockchain protocol that provides a suite of products for permissionless on-chain derivatives trading.`,
    technologies: [
      { name: "React", logo: react_logo },
      { name: "Tailwind CSS", logo: tailwind_logo },
      { name: "Redux", logo: redux_logo },
      { name: "Typescript", logo: ts_logo },
      { name: "Websocket", logo: socket_logo },
      { name: "NodeJS", logo: node_logo },
      { name: "Express", logo: express_logo },
      { name: "AWS", logo: aws_logo },
      { name: "Microservices", logo: micro_logo },
    ],
    demoLink: "https://trade.dextoro.com/",
    githubLink: "https://github.com/DexToroProtocol/",
  },
  {
    title: "Tokensale | DexToro Token",
    description:
      "The DexToro Exchange token (DTORO) is the utility token for Exchange, which is used to sustain long-term protocol growth.",
    technologies: [
      { name: "React", logo: react_logo },
      { name: "Tailwind CSS", logo: tailwind_logo },
      { name: "Typescript", logo: ts_logo },
      { name: "NodeJS", logo: node_logo },
    ],
    demoLink: "https://tokensale.dextoro.com/",
    githubLink: "https://github.com/DexToroProtocol/",
  },
  {
    title: "Grow10x - by Valuebound",
    description:
      "OKR tool to grow your org 10X. A platform to track individual & company-wide Object & Key Results for the specific organization.",
    technologies: [
      { name: "React", logo: react_logo },
      { name: "Redux", logo: redux_logo },
      { name: "AntDesign", logo: antD_logo },
      { name: "Express", logo: express_logo },
      { name: "NodeJS", logo: node_logo },
      { name: "AWS", logo: aws_logo },
      { name: "Microservices", logo: micro_logo },
    ],
    githubLink: "https://github.com/hafizaatifkamal/",
  },
  {
    title: "Oneplace - ERP",
    description:
      "A centralized application by Valuebound to streamline operational processes and serve as a primary touchpoint for all employees.",
    technologies: [
      { name: "React", logo: react_logo },
      { name: "NodeJS", logo: node_logo },
      { name: "MongoDB", logo: mongodb_logo },
      { name: "Firebase", logo: fire_logo },
      { name: "AWS", logo: aws_logo },
      { name: "Redux", logo: redux_logo },
      { name: "MUI", logo: mui_logo },
      { name: "Express", logo: express_logo },
      { name: "Microservices", logo: micro_logo },
    ],
    githubLink: "https://github.com/hafizaatifkamal/",
  },
  // Add more projects
];
