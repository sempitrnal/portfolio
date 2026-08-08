"use client";

import {
  ProfileWidget,
  StatsWidget,
  AboutWidget,
  ExperienceWidget,
  ProjectsWidget,
  SkillsWidget,
  ContactWidget,
} from "./widgets";

export function Dashboard() {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
      <ProfileWidget className="md:col-span-2 xl:col-span-3" />
      {/* <StatsWidget className="md:col-span-2 xl:col-span-3" /> */}
      <AboutWidget className="md:col-span-1 xl:col-span-2" />
      <ExperienceWidget className="md:col-span-1 xl:col-span-1" />
      <ProjectsWidget className="md:col-span-2 xl:col-span-2" />
      <SkillsWidget className="md:col-span-1" />
      <ContactWidget className="md:col-span-2 xl:col-span-3" />
    </div>
  );
}
