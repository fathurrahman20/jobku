import { ReactNode } from "react";

interface JobInfoProps {
  icon: ReactNode;
  text: string;
}

export default function JobInfo({ icon, text }: JobInfoProps) {
  return (
    <div className="flex gap-x-2 items-center">
      {icon}
      <span className="capitalize">{text}</span>
    </div>
  );
}
