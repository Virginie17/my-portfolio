'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import data from '../../public/data.json';

interface Skill {
  name: string;
  img: string;
  alt: string;
  category: string;
}

const Skills: React.FC = () => {
  const [skills, setSkills] = useState<Skill[]>([]);

  useEffect(() => {
    setSkills(data.skills);
  }, []);

  const frontSkills = skills.filter(skill => skill.category === 'Front');
  const autresSkills = skills.filter(skill => skill.category === 'Autres');

  const SkillList = ({ skills }: { skills: Skill[] }) => (
    <ul className="flex flex-wrap justify-center gap-2.5 pt-5 md:gap-5 md:pt-7.5">
      {skills.map((skill, index) => (
        <li key={index} className="w-[calc((100%-40px)/2)] mb-5 md:w-[calc((100%-60px)/3)] flex flex-col items-center animate-zoom-rotate">
          <Image src={`/assets/logo/${skill.img}`} alt={skill.alt} width={40} height={40} className="w-10 h-10 mb-2" />
          <span>{skill.name}</span>
        </li>
      ))}
    </ul>
  );

  return (
    <article id="skills" className="flex flex-col items-center w-full py-10 bg-gray-800 text-white">
      <h2 className="text-4xl font-bold mb-12 text-white">Skills</h2>
      <div className="relative flex flex-col items-center w-full gap-2.5 box-border md:flex-row md:justify-center md:gap-7.5 md:p-10">
        <section className="flex flex-col items-center rounded-lg m-3 p-5 w-4/5 bg-gray-700 border-2 border-gray-600 shadow-lg transition-all duration-200 ease-in-out md:w-[400px] md:h-[400px] md:p-0 md:pr-2.5 md:pb-10">
          <h3 className="text-2xl font-bold mb-4 text-white p-2">{('Front')}</h3>
          <SkillList skills={frontSkills} />
        </section>
        <section className="flex flex-col items-center rounded-lg m-3 p-5 w-4/5 bg-gray-700 border-2 border-gray-600 shadow-lg transition-all duration-200 ease-in-out md:w-[400px] md:h-[400px] md:p-0 md:pr-2.5 md:pb-10">
          <h3 className="text-2xl font-bold mb-4 text-white p-2">{('Autres')}</h3>
          <SkillList skills={autresSkills} />
        </section>
      </div>
    </article>
  );
};

export default Skills;