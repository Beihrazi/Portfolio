"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Matter from "matter-js";

const skillList = [
  { icon: null, title: "" }, // round bubble
  { icon: null, title: "" },
  { icon: null, title: "" },
  {
    title: "React",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="#09c3f5"><path d="M21.718 12c0-1.429-1.339-2.681-3.467-3.5c.029-.18.077-.37.1-.545c.217-2.058-.273-3.543-1.379-4.182c-1.235-.714-2.983-.186-4.751 1.239C10.45 3.589 8.7 3.061 7.468 3.773c-1.107.639-1.6 2.124-1.379 4.182c.018.175.067.365.095.545c-2.127.819-3.466 2.071-3.466 3.5s1.339 2.681 3.466 3.5c-.028.18-.077.37-.095.545c-.218 2.058.272 3.543 1.379 4.182c.376.213.803.322 1.235.316a6 6 0 0 0 3.514-1.56a6 6 0 0 0 3.515 1.56a2.44 2.44 0 0 0 1.236-.316c1.106-.639 1.6-2.124 1.379-4.182c-.019-.175-.067-.365-.1-.545c2.132-.819 3.471-2.071 3.471-3.5m-6.01-7.548a1.5 1.5 0 0 1 .76.187c.733.424 1.055 1.593.884 3.212c-.012.106-.043.222-.058.33q-1.263-.365-2.57-.523a16 16 0 0 0-1.747-1.972a4.9 4.9 0 0 1 2.731-1.234m-7.917 8.781c.172.34.335.68.529 1.017s.395.656.6.969a14 14 0 0 1-1.607-.376a14 14 0 0 1 .478-1.61m-.479-4.076a14 14 0 0 1 1.607-.376q-.308.468-.6.969c-.195.335-.357.677-.529 1.017q-.286-.79-.478-1.61M8.3 12a19 19 0 0 1 .888-1.75q.496-.852 1.076-1.65c.619-.061 1.27-.1 1.954-.1q1.025.001 1.952.1a20 20 0 0 1 1.079 1.654q.488.851.887 1.746a19 19 0 0 1-1.953 3.403a19.2 19.2 0 0 1-3.931 0a20 20 0 0 1-1.066-1.653A19 19 0 0 1 8.3 12m7.816 2.25c.2-.337.358-.677.53-1.017q.286.791.478 1.611a15 15 0 0 1-1.607.376c.202-.314.404-.635.597-.97zm.53-3.483c-.172-.34-.335-.68-.53-1.017a20 20 0 0 0-.6-.97q.814.142 1.606.376a14 14 0 0 1-.478 1.611zM12.217 6.34q.6.563 1.13 1.193q-.555-.031-1.129-.033c-.574-.002-.76.013-1.131.033q.53-.63 1.13-1.193m-4.249-1.7a1.5 1.5 0 0 1 .76-.187a4.9 4.9 0 0 1 2.729 1.233A16 16 0 0 0 9.71 7.658q-1.306.158-2.569.524c-.015-.109-.047-.225-.058-.331c-.171-1.619.151-2.787.885-3.211M3.718 12c0-.9.974-1.83 2.645-2.506c.218.857.504 1.695.856 2.506c-.352.811-.638 1.65-.856 2.506C4.692 13.83 3.718 12.9 3.718 12m4.25 7.361c-.734-.423-1.056-1.593-.885-3.212c.011-.106.043-.222.058-.331q1.262.365 2.564.524a16.4 16.4 0 0 0 1.757 1.982c-1.421 1.109-2.714 1.488-3.494 1.037m3.11-2.895q.56.033 1.14.034q.58-.001 1.139-.034a14 14 0 0 1-1.14 1.215a14 14 0 0 1-1.139-1.215m5.39 2.895c-.782.451-2.075.072-3.5-1.038a16 16 0 0 0 1.757-1.981a16.4 16.4 0 0 0 2.565-.523c.015.108.046.224.058.33c.175 1.619-.148 2.789-.88 3.212m1.6-4.854A16.6 16.6 0 0 0 17.216 12q.529-1.22.856-2.507c1.671.677 2.646 1.607 2.646 2.507s-.975 1.83-2.646 2.507z"/><path d="M12.215 13.773a1.792 1.792 0 1 0-1.786-1.8v.006a1.787 1.787 0 0 0 1.786 1.794"/></g></svg>
    ),
  },
  {
    title: "Node.js",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 128 128"
      >
        <path fill="#8cc84b" d="M64 0L12.8 32v64L64 128l51.2-32V32z" />
      </svg>
    ),
  },
  {
    title: "Java",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path fill="#5382a1" d="M12.7 23.56s-1.07.622.761.833a16 16 0 0 0 5.8-.246a10 10 0 0 0 1.539.753c-5.481 2.349-12.405-.136-8.1-1.339m-.674-3.067s-1.2.888.633 1.078a22.6 22.6 0 0 0 7.481-.359a3.3 3.3 0 0 0 1.152.7c-6.627 1.938-14.009.153-9.266-1.421"/><path fill="#e76f00" d="M17.673 15.294a2.05 2.05 0 0 1-.355 2.954s3.429-1.77 1.854-3.987c-1.471-2.067-2.6-3.095 3.508-6.636c0 0-9.586 2.394-5.007 7.669"/><path fill="#5382a1" d="M24.922 25.827s.792.652-.872 1.157c-3.164.958-13.168 1.248-15.948.038c-1-.435.874-1.038 1.464-1.164a3.8 3.8 0 0 1 .966-.108c-1.111-.783-7.181 1.537-3.083 2.2c11.176 1.812 20.372-.816 17.473-2.124m-11.711-8.508s-5.089 1.209-1.8 1.648a38 38 0 0 0 6.731-.072a53 53 0 0 0 4.221-.555a9 9 0 0 0-1.28.685c-5.17 1.358-15.153.726-12.283-.665a9.6 9.6 0 0 1 4.407-1.042m9.133 5.104c5.253-2.73 2.824-5.353 1.129-5a4 4 0 0 0-.6.161a.96.96 0 0 1 .449-.346c3.354-1.179 5.933 3.478-1.083 5.322a.5.5 0 0 0 .106-.138"/><path fill="#e76f00" d="M19.172 1.906s2.909 2.91-2.759 7.386c-4.546 3.59-1.037 5.637 0 7.975c-2.653-2.394-4.6-4.5-3.294-6.463c1.917-2.879 7.229-4.275 6.056-8.9"/><path fill="#5382a1" d="M13.727 29.818c5.042.323 12.786-.179 12.969-2.565c0 0-.353.9-4.167 1.623a41.5 41.5 0 0 1-12.76.2s.645.533 3.959.746"/></svg>
    ),
  },
  {
    title: "MongoDB",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 256 549"
      >
        <path
          fill="#01ec64"
          d="M175.622 61.108C152.612 33.807 132.797 6.078 128.749.32a1.03 1.03 0 0 0-1.492 0c-4.048 5.759-23.863 33.487-46.874 60.788c-197.507 251.896 31.108 421.89 31.108 421.89l1.917 1.28c1.704 26.234 5.966 63.988 5.966 63.988h17.045s4.26-37.54 5.965-63.987l1.918-1.494c.213.214 228.828-169.78 31.32-421.677m-47.726 418.05s-10.227-8.744-12.997-13.222v-.428l12.358-274.292c0-.853 1.279-.853 1.279 0l12.357 274.292v.428c-2.77 4.478-12.997 13.223-12.997 13.223"
        />
      </svg>
    ),
  },
  {
    title: "JavaScript",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 16 16"><path fill="#ffca28" d="M2 2v12h12V2zm6 6h1v4a1.003 1.003 0 0 1-1 1H7a1.003 1.003 0 0 1-1-1v-1h1v1h1zm3 0h2v1h-2v1h1a1.003 1.003 0 0 1 1 1v1a1.003 1.003 0 0 1-1 1h-2v-1h2v-1h-1a1.003 1.003 0 0 1-1-1V9a1.003 1.003 0 0 1 1-1"/></svg>
    ),
  },
  {
    title: "Figma",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 128 128"><path fill="#0acf83" d="M45.5 129c11.9 0 21.5-9.6 21.5-21.5V86H45.5C33.6 86 24 95.6 24 107.5S33.6 129 45.5 129m0 0"/><path fill="#a259ff" d="M24 64.5C24 52.6 33.6 43 45.5 43H67v43H45.5C33.6 86 24 76.4 24 64.5m0 0"/><path fill="#f24e1e" d="M24 21.5C24 9.6 33.6 0 45.5 0H67v43H45.5C33.6 43 24 33.4 24 21.5m0 0"/><path fill="#ff7262" d="M67 0h21.5C100.4 0 110 9.6 110 21.5S100.4 43 88.5 43H67zm0 0"/><path fill="#1abcfe" d="M110 64.5c0 11.9-9.6 21.5-21.5 21.5S67 76.4 67 64.5S76.6 43 88.5 43S110 52.6 110 64.5m0 0"/></svg>
    ),
  },
  {
    title: "SpringBoot",
    icon: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#72b545" d="m23.693 10.706l-4.73-8.185c-.41-.71-1.417-1.294-2.24-1.294h-9.45c-.82 0-1.831.584-2.24 1.294L.306 10.706c-.41.71-.41 1.873 0 2.584l4.725 8.189c.41.71 1.417 1.294 2.24 1.294h9.455c.82 0 1.826-.584 2.24-1.294l4.726-8.19c.41-.71.41-1.873 0-2.583zM10.976 5.755c0-.537.438-.975.974-.975s.975.438.975.975v5.821a.976.976 0 0 1-1.948 0zm.974 12.43a6.616 6.616 0 0 1-6.607-6.609A6.64 6.64 0 0 1 8.01 6.272a.866.866 0 0 1 1.214.18a.866.866 0 0 1-.178 1.213a4.876 4.876 0 0 0 5.812 7.827a4.88 4.88 0 0 0 1.967-3.916a4.9 4.9 0 0 0-1.986-3.925a.87.87 0 0 1-.183-1.214a.87.87 0 0 1 1.214-.183a6.63 6.63 0 0 1 2.687 5.322a6.613 6.613 0 0 1-6.608 6.608"/></svg>
    ),
  },
  {
    title: "AWS",
    icon: (
    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 256 153"><path fill="#252f3e" d="M72.392 55.438c0 3.137.34 5.68.933 7.545a45.4 45.4 0 0 0 2.712 6.103c.424.678.593 1.356.593 1.95c0 .847-.508 1.695-1.61 2.543l-5.34 3.56c-.763.509-1.526.763-2.205.763c-.847 0-1.695-.424-2.543-1.187a26 26 0 0 1-3.051-3.984c-.848-1.44-1.696-3.052-2.628-5.001q-9.919 11.697-24.922 11.698c-7.12 0-12.8-2.035-16.954-6.103c-4.153-4.07-6.272-9.495-6.272-16.276c0-7.205 2.543-13.054 7.714-17.462c5.17-4.408 12.037-6.612 20.768-6.612c2.882 0 5.849.254 8.985.678c3.137.424 6.358 1.102 9.749 1.865V29.33c0-6.443-1.357-10.935-3.985-13.563c-2.712-2.628-7.29-3.9-13.817-3.9c-2.967 0-6.018.34-9.155 1.103s-6.188 1.695-9.155 2.882c-1.356.593-2.373.932-2.967 1.102s-1.017.254-1.356.254c-1.187 0-1.78-.848-1.78-2.628v-4.154c0-1.356.17-2.373.593-2.966c.424-.594 1.187-1.187 2.374-1.78q4.45-2.29 10.68-3.815C33.908.763 38.316.255 42.978.255c10.088 0 17.463 2.288 22.21 6.866c4.662 4.577 7.036 11.528 7.036 20.853v27.464zM37.976 68.323c2.798 0 5.68-.508 8.731-1.526c3.052-1.017 5.765-2.882 8.053-5.425c1.357-1.61 2.374-3.39 2.882-5.425c.509-2.034.848-4.493.848-7.375v-3.56a71 71 0 0 0-7.799-1.441a64 64 0 0 0-7.968-.509c-5.68 0-9.833 1.102-12.63 3.391s-4.154 5.51-4.154 9.748c0 3.984 1.017 6.951 3.136 8.986c2.035 2.119 5.002 3.136 8.901 3.136m68.069 9.155c-1.526 0-2.543-.254-3.221-.848c-.678-.508-1.272-1.695-1.78-3.305L81.124 7.799c-.51-1.696-.764-2.798-.764-3.391c0-1.356.678-2.12 2.035-2.12h8.307c1.61 0 2.713.255 3.306.848c.678.509 1.187 1.696 1.695 3.306l14.241 56.117l13.224-56.117c.424-1.695.933-2.797 1.61-3.306c.679-.508 1.866-.847 3.392-.847h6.781c1.61 0 2.713.254 3.39.847c.679.509 1.272 1.696 1.611 3.306l13.394 56.795L168.01 6.442c.508-1.695 1.102-2.797 1.695-3.306c.678-.508 1.78-.847 3.306-.847h7.883c1.357 0 2.12.678 2.12 2.119c0 .424-.085.848-.17 1.356s-.254 1.187-.593 2.12l-20.43 65.525q-.762 2.544-1.78 3.306c-.678.509-1.78.848-3.22.848h-7.29c-1.611 0-2.713-.254-3.392-.848c-.678-.593-1.271-1.695-1.61-3.39l-13.14-54.676l-13.054 54.59c-.423 1.696-.932 2.798-1.61 3.391c-.678.594-1.865.848-3.39.848zm108.927 2.289c-4.408 0-8.816-.509-13.054-1.526c-4.239-1.017-7.544-2.12-9.748-3.39c-1.357-.764-2.29-1.611-2.628-2.374a6 6 0 0 1-.509-2.374V65.78c0-1.78.678-2.628 1.95-2.628a4.8 4.8 0 0 1 1.526.255c.508.17 1.271.508 2.119.847a46 46 0 0 0 9.324 2.967a51 51 0 0 0 10.088 1.017c5.34 0 9.494-.932 12.376-2.797s4.408-4.577 4.408-8.053c0-2.373-.763-4.323-2.289-5.934s-4.408-3.051-8.561-4.408l-12.292-3.814c-6.188-1.95-10.765-4.832-13.563-8.647c-2.797-3.73-4.238-7.883-4.238-12.291q0-5.34 2.289-9.41c1.525-2.712 3.56-5.085 6.103-6.95c2.543-1.95 5.425-3.391 8.816-4.408c3.39-1.017 6.95-1.441 10.68-1.441c1.865 0 3.815.085 5.68.339c1.95.254 3.73.593 5.51.932c1.695.424 3.306.848 4.832 1.357q2.288.762 3.56 1.525c1.187.679 2.034 1.357 2.543 2.12q.763 1.017.763 2.797v3.984c0 1.78-.678 2.713-1.95 2.713c-.678 0-1.78-.34-3.22-1.018q-7.25-3.306-16.276-3.306c-4.832 0-8.647.763-11.275 2.374c-2.627 1.61-3.984 4.069-3.984 7.544c0 2.374.848 4.408 2.543 6.019s4.832 3.221 9.325 4.662l12.037 3.815c6.103 1.95 10.511 4.662 13.139 8.137s3.9 7.46 3.9 11.868c0 3.645-.764 6.951-2.205 9.833c-1.525 2.882-3.56 5.425-6.188 7.46c-2.628 2.119-5.764 3.645-9.409 4.747c-3.815 1.187-7.799 1.78-12.122 1.78"/><path fill="#f90" d="M230.993 120.964c-27.888 20.599-68.408 31.534-103.247 31.534c-48.827 0-92.821-18.056-126.05-48.064c-2.628-2.373-.255-5.594 2.881-3.73c35.942 20.854 80.276 33.484 126.136 33.484c30.94 0 64.932-6.442 96.212-19.666c4.662-2.12 8.646 3.052 4.068 6.442m11.614-13.224c-3.56-4.577-23.566-2.204-32.636-1.102c-2.713.34-3.137-2.034-.678-3.814c15.936-11.19 42.13-7.968 45.181-4.239c3.052 3.815-.848 30.008-15.767 42.554c-2.288 1.95-4.492.933-3.475-1.61c3.39-8.393 10.935-27.296 7.375-31.789"/></svg>
    ),
  },
  {
    title: "CSS",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 128 128"
      >
        <path
          fill="#264de4"
          d="M19.7 0l7.4 83.7L64 96l36.9-12.3L108.3 0H19.7z"
        />
      </svg>
    ),
  },
  {
    title: "Next.js",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path
          fill="#111"
          d="m11.345 2.405l-.303.027c-2.84.256-5.501 1.789-7.187 4.144a9.9 9.9 0 0 0-1.765 4.37c-.08.548-.09.71-.09 1.455s.01.907.09 1.457c.543 3.755 3.216 6.91 6.84 8.079c.65.209 1.334.351 2.112.438c.303.033 1.613.033 1.916 0c1.343-.15 2.48-.481 3.603-1.054c.172-.088.205-.112.182-.131c-.016-.012-.749-.995-1.629-2.184l-1.599-2.16l-2.004-2.965a287 287 0 0 0-2.017-2.963c-.008-.002-.016 1.315-.02 2.924c-.006 2.817-.008 2.93-.043 2.997a.36.36 0 0 1-.172.178c-.063.03-.117.037-.412.037h-.339l-.09-.057a.4.4 0 0 1-.13-.143l-.042-.088l.004-3.919l.006-3.921l.06-.076a.5.5 0 0 1 .145-.12c.08-.039.112-.043.45-.043c.399 0 .465.016.569.13c.03.03 1.114 1.665 2.412 3.633l3.946 5.976l1.583 2.398l.08-.052c.71-.462 1.46-1.118 2.055-1.803a9.95 9.95 0 0 0 2.354-5.111c.08-.55.09-.712.09-1.457c0-.744-.01-.907-.09-1.456c-.543-3.755-3.216-6.91-6.84-8.079a10.5 10.5 0 0 0-2.083-.436c-.187-.02-1.48-.04-1.642-.025m4.094 6.048c.094.047.17.137.197.23c.016.051.02 1.138.016 3.587l-.006 3.515l-.62-.95l-.621-.95V11.33c0-1.652.008-2.58.02-2.625a.4.4 0 0 1 .193-.246c.08-.041.11-.045.416-.045c.29 0 .34.004.405.039"
        />
      </svg>
    ),
  },
];

const Skills = () => {
  const [positions, setPositions] = useState([]);
  const containerRef = useRef(null);
  const engineRef = useRef(Matter.Engine.create());
  const bodiesRef = useRef([]);
  const constraintRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const { width, height } = container.getBoundingClientRect();
    const engine = engineRef.current;
    const world = engine.world;

    Matter.World.clear(world);
    Matter.Engine.clear(engine);
    world.gravity.y = 0.4;

    // Create container walls
    const wallThickness = 100;
    const walls = [
      Matter.Bodies.rectangle(
        width / 2,
        -wallThickness / 2,
        width * 2,
        wallThickness,
        { isStatic: true }
      ),
      Matter.Bodies.rectangle(
        width / 2,
        height + wallThickness / 2,
        width * 2,
        wallThickness,
        { isStatic: true }
      ),
      Matter.Bodies.rectangle(
        -wallThickness / 2,
        height / 2,
        wallThickness,
        height * 2,
        { isStatic: true }
      ),
      Matter.Bodies.rectangle(
        width + wallThickness / 2,
        height / 2,
        wallThickness,
        height * 2,
        { isStatic: true }
      ),
    ];
    Matter.World.add(world, walls);

    // Create bubbles
    const bubbles = skillList.map(() =>
      Matter.Bodies.circle(
        Math.random() * (width - 80) + 40,
        Math.random() * (height - 80) + 40,
        40,
        {
          restitution: 0.9,
          friction: 0.01,
          frictionAir: 0.04,
          density: 0.002,
        }
      )
    );

    bodiesRef.current = bubbles;
    Matter.World.add(world, bubbles);

    const runner = Matter.Runner.create();
    Matter.Runner.run(runner, engine);

    const update = () => {
      const bounds = container.getBoundingClientRect();

      // Update constraint pointA with current mouse
      if (constraintRef.current) {
        constraintRef.current.pointA = { ...mouseRef.current };
      }

      setPositions(
        bodiesRef.current.map((body) => {
          const r = 40;
          const x = Math.min(Math.max(body.position.x, r), bounds.width - r);
          const y = Math.min(Math.max(body.position.y, r), bounds.height - r);

          return {
            top: y - r,
            left: x - r,
            angle: body.angle,
          };
        })
      );

      requestAnimationFrame(update);
    };

    update();

    return () => {
      Matter.Runner.stop(runner);
    };
  }, []);

  const handlePointerDown = (i) => (e) => {
    const bounds = containerRef.current.getBoundingClientRect();
    const pointerX = e.clientX - bounds.left;
    const pointerY = e.clientY - bounds.top;
    mouseRef.current = { x: pointerX, y: pointerY };

    const body = bodiesRef.current[i];

    const offset = {
      x: pointerX - body.position.x,
      y: pointerY - body.position.y,
    };

    const constraint = Matter.Constraint.create({
      pointA: { x: pointerX, y: pointerY },
      bodyB: body,
      pointB: offset,
      stiffness: 0.98,
      length: 0,
    });

    constraintRef.current = constraint;
    Matter.World.add(engineRef.current.world, constraint);
  };

  const handlePointerMove = (e) => {
    const bounds = containerRef.current.getBoundingClientRect();
    mouseRef.current = {
      x: e.clientX - bounds.left,
      y: e.clientY - bounds.top,
    };
  };

  const handlePointerUp = () => {
    if (constraintRef.current) {
      Matter.World.remove(engineRef.current.world, constraintRef.current);
      constraintRef.current = null;
    }
  };

  const [hoveredIndex, setHoveredIndex] = useState(false);

  return (
    <div className="skillPage">
      <div
        className="container-small pos-relative"
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerUp}
      >
        <div className="skills-scope" ref={containerRef}>
          {positions.map((pos, i) => {
            const { icon, title } = skillList[i];
            const isEmpty = !icon;

            return (
              <motion.div
                key={i}
                title={title}
                animate={{
                  top: pos.top,
                  left: pos.left,
                  rotate: pos.angle * (180 / Math.PI),
                }}
                transition={{ type: "spring", stiffness: 100, damping: 20 }}
                onPointerDown={handlePointerDown(i)}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="font-regular"
                style={{
                  position: "absolute",
                  padding: isEmpty ? "20px" : "7px 15px",
                  background: isEmpty ? "orange": "#fff",
                  borderRadius: isEmpty ? "50%" : "12px",
                  boxShadow: "0 5px 12px rgba(0, 0, 0, 0.1)",
                  userSelect: "none",
                  border: isEmpty? "": "1px solid #eee",
                  cursor: hoveredIndex === i ? "grab" : "default",
                  width: isEmpty ? "45px" : "auto",
                  height: isEmpty ? "45px" : "auto",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "5px",
                }}
              >
                {icon}
                {title}
              </motion.div>
            );
          })}
        </div>
        <div className="skill-heading font-regular italic">
          <p className="regular l-h-1">
            <span className="color-yellow">Tools</span> I have fun{" "}
          </p>
          <p className="regular">working with</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
