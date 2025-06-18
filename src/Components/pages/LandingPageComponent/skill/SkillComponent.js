"use client";

import dynamic from 'next/dynamic';

const Skills = dynamic(() => import("../Skills"), {
  ssr: false,
})

const SkillComponent = () => {
  return (
    < Skills/>
  )
}

export default SkillComponent
