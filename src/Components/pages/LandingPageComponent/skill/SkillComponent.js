"use client";

import dynamic from 'next/dynamic';

const Skills = dynamic(() => import("../SkillComponent"), {
  ssr: false,
})

const SkillComponent = () => {
  return (
    < Skills/>
  )
}

export default SkillComponent
