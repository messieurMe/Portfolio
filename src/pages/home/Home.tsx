import strings from '../../resources/strings/strings.json'
import {Divider} from "@heroui/divider";
import MainInfoCard from "./cards/MainInfoCard.tsx";
import AvatarCard from "./cards/AvatarCard.tsx";
import EducationCard from "./cards/EducationCard.tsx";
import WorkExperienceCard from "./cards/WorkExperienceCard.tsx";
import SkillsCard from "./cards/SkillsCard.tsx";
import {ScrollShadow} from "@heroui/scroll-shadow";

export function Home() {
    return (
        <div className="h-screen w-screen backdrop-blur-3xl">
            <div className="fixed inset-0 w-screen h-screen gradient-background">
                <div className="gradient-sphere sphere-1"/>
                <div className="gradient-sphere sphere-2"/>
                <div className="gradient-sphere sphere-3"/>
                {/*<div className="glow"/>*/}
                {/*<div className="grid-overlay"/>*/}
                {/*<div className="noise-overlay"></div>*/}
            </div>

            <ScrollShadow
                hideScrollBar
                size={100}
                className="absolute content-container inset-0 z-10 p-8"
            >
                <div className="m-12">
                    <div
                        className="w-min text-7xl font-mono text-left">{strings.secondName}<br/>{strings.firstName}
                    </div>
                    <h1 className="mt-12 text-left">{strings.description}</h1>
                    <Divider orientation="horizontal" className="mt-12"></Divider>
                </div>

                <div className="flex flex-wrap justify-between items-stretch gap-8 mt-10 ms-12 me-12">
                    <h1 className="flex-none w-full">About me:</h1>
                    <MainInfoCard key="mainInfo" className="w-full md:w-5/11"/>
                    <AvatarCard key="avatar" className="w-full md:w-5/11"/>
                    <EducationCard key="education" className="w-full md:w-5/11"/>
                    <WorkExperienceCard key="workExp" className="w-full md:w-5/11"/>
                    <SkillsCard key="skills" className="w-full"/>
                </div>
            </ScrollShadow>
        </div>
    );
}
