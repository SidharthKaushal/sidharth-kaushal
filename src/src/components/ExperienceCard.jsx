import { Timeline } from "./ui/timeline";
import { EXPERIENCE } from "../data/experience";
export function ExperienceCard() {
 
  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={EXPERIENCE} />
    </div>
  );
}
