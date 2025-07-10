import {Avatar, Card, CardBody, CardHeader} from "@heroui/react";
import {Divider} from "@heroui/divider";
import {Tab, Tabs} from "@heroui/tabs";
import {useState} from "react";
import {Chip} from "@heroui/chip";
import DefaultCard from "../../../ui_elements/DefaultCard.tsx";

const proficientColor = "bg-green-400/60"
const competentColor = "bg-orange-400/70"
const learningColor = "bg-red-600/40"

const skills = [
    {
        "key": "Languages",
        "value": [
            {"key": "Kotlin", "hasIcon": true, "iconUrl": "devicon/kotlin", "level": proficientColor},
            {"key": "Java", "hasIcon": true, "iconUrl": "devicon/java", "level": proficientColor},
            {"key": "Swift", "hasIcon": true, "iconUrl": "devicon/swift", "level": competentColor},
            {"key": "Python", "hasIcon": true, "iconUrl": "devicon/python", "level": proficientColor},
            {"key": "Go", "hasIcon": true, "iconUrl": "devicon/go", "level": proficientColor},
            {"key": "Bash", "hasIcon": false, "iconUrl": "", "level": competentColor},
            {
                "key": "Sql: PostgreSQL, SQLite",
                "hasIcon": true,
                "iconUrl": "devicon/postgresql",
                "level": proficientColor
            },
            {"key": "C#", "hasIcon": true, "iconUrl": "devicon/csharp", "level": proficientColor},
            {"key": "React", "hasIcon": true, "iconUrl": "devicon/react", "level": competentColor},
            {"key": "JavaScript", "hasIcon": true, "iconUrl": "devicon/javascript", "level": proficientColor},
            {"key": "TypeScript", "hasIcon": true, "iconUrl": "devicon/typescript", "level": proficientColor},
            {"key": "HTML", "hasIcon": true, "iconUrl": "devicon/html5", "level": proficientColor},
            {"key": "Scala", "hasIcon": true, "iconUrl": "devicon/scala", "level": competentColor},
            {"key": "C++", "hasIcon": true, "iconUrl": "devicon/cplusplus", "level": competentColor},
            {"key": "Clojure", "hasIcon": true, "iconUrl": "devicon/clojure", "level": learningColor},
            {"key": "Haskell", "hasIcon": true, "iconUrl": "devicon/haskell", "level": competentColor},
        ]
    },
    {
        "key": "Libraries, Technologies, Instruments",
        "value": [
            {"key": "Android", "hasIcon": true, "iconUrl": "devicon/android", "level": proficientColor},
            {"key": "Android studio", "hasIcon": true, "iconUrl": "devicon/androidstudio", "level": proficientColor},
            {"key": "Git: Github, Gitlab", "hasIcon": true, "iconUrl": "devicon/git", "level": proficientColor},
            {"key": "Jetpack Compose", "hasIcon": true, "iconUrl": "devicon/jetpackcompose", "level": proficientColor},
            {"key": "Kotlin Coroutines and Flows", "hasIcon": false, "iconUrl": "", "level": proficientColor},
            {"key": "RxJava", "hasIcon": false, "iconUrl": "", "level": proficientColor},
            {
                "key": "Unit Tests: JUnit, KoTest",
                "hasIcon": true,
                "iconUrl": "devicon/junit",
                "level": proficientColor
            },
            {
                "key": "Ui Tests: Espresso, Robolectric, Mockito",
                "hasIcon": false,
                "iconUrl": "",
                "level": proficientColor
            },
            {"key": "Gradle", "hasIcon": true, "iconUrl": "devicon/gradle", "level": proficientColor},
            {"key": "Retrofit", "hasIcon": false, "iconUrl": "", "level": proficientColor},
            {"key": "Room", "hasIcon": false, "iconUrl": "", "level": proficientColor},
            {"key": "DI: Dagger2, Hilt, Koin", "hasIcon": false, "iconUrl": "", "level": proficientColor},
            {"key": "Figma", "hasIcon": true, "iconUrl": "devicon/figma", "level": proficientColor},
            {"key": "GraphQL", "hasIcon": true, "iconUrl": "material-icon-theme/graphql", "level": proficientColor},
            {"key": "KMP", "hasIcon": true, "iconUrl": "devicon/kotlin", "level": proficientColor},
            {"key": "Ktor", "hasIcon": true, "iconUrl": "devicon/ktor", "level": proficientColor},
            {"key": "Docker", "hasIcon": true, "iconUrl": "devicon/docker", "level": competentColor},
            {"key": "Cloud Computing (GCP)", "hasIcon": false, "iconUrl": "", "level": competentColor},
        ]
    },
    {
        "key": "Theory",
        "value": [
            {"key": "OOP", "hasIcon": false, "iconUrl": "", "level": proficientColor},
            {"key": "Functional Programming", "hasIcon": false, "iconUrl": "", "level": proficientColor},
            {
                "key": "Parallel and Asynchronous Programming",
                "hasIcon": false,
                "iconUrl": "",
                "level": proficientColor
            },
            {"key": "Clean Architecture", "hasIcon": false, "iconUrl": "", "level": proficientColor},
            {"key": "Algorithms & Data Structures", "hasIcon": false, "iconUrl": "", "level": proficientColor},
            {
                "key": "SOLID, UDF, MVVM, MVI",
                "hasIcon": true,
                "iconUrl": "material-icon-theme/architecture",
                "level": proficientColor
            },
            {"key": "Distributed Systems", "hasIcon": false, "iconUrl": "", "level": competentColor},
            {"key": "Machine Learning", "hasIcon": false, "iconUrl": "", "level": competentColor},
            {
                "key": "Math, Linear Algebra, Probability Theory",
                "hasIcon": false,
                "iconUrl": "",
                "level": proficientColor
            },
        ]
    },
    {
        "key": "Task Management",
        "value":
            [
                {"key": "Scrum & Kanban", "hasIcon": false, "iconUrl": "", "level": proficientColor},
                {"key": "Jira", "hasIcon": true, "iconUrl": "devicon/jira", "level": proficientColor},
            ]
    }
]

const changeActiveElement = (i: number, hasColors: boolean) => {
    return (
        skills[i].value.map((skill) =>
            (<Chip
                    key={skill.key}
                    radius="md"
                    variant="flat"
                    endContent={
                        skill.hasIcon
                            ? <Avatar
                                size="lg"
                                radius="md"
                                src={"https://api.iconify.design/" + skill.iconUrl + ".svg"}
                                className="p-1 bg-transparent"
                            />
                            : <div/>
                    }
                    className={"h-20 w-20 opacity-85 " + (hasColors ? skill.level : "bg-transparent")}
                >
                    <div className="text-2xl">{skill.key}</div>
                </Chip>
            )
        )
    )
}

export default function SkillsCard({className}) {

    const [index, setIndex] = useState(0)
    const [hasColors, setHasColors] = useState(false)

    const [content, setContent] = useState(changeActiveElement(index, hasColors))
    const changeColorStateAndInvalidate = (enableColors) => {
        if(enableColors != hasColors) {
            setHasColors(enableColors)
            setContent(changeActiveElement(index, enableColors))
        }
    }
    const changeTab = (key) => {
        const newIndex = skills.findIndex(x => x.key === key);
        if (newIndex != index) {
            setIndex(newIndex);
            setContent(changeActiveElement(newIndex, hasColors));
        }
    }


    return (
        <Card className={className + " px-4 bg-gray-800/40"} isBlurred={false}>
            <CardHeader className="pb-0 pt-6 flex-col items-center">
                <p className="uppercase font-bold">Skills</p>
                {
                    DefaultCard(
                        proficientColor,
                        competentColor,
                        learningColor,
                        [hasColors, changeColorStateAndInvalidate]
                    )
                }
                <Tabs
                    classNames={{
                        tabList: "gap-6 w-full relative rounded-none p-0 border-b border-divider",
                        cursor: "w-full bg-[#22d3ee]",
                        tab: "max-w-fit px-0 h-12",
                        tabContent: "group-data-[selected=true]:text-[#06b6d4]",
                    }}
                    variant="underlined"
                    items={skills}
                    onSelectionChange={changeTab}
                >{
                    (group) => <Tab title={group.key}/>
                }</Tabs>
                <Divider/>
            </CardHeader>
            <CardBody
                className="pb-8 pt-6 flex flex-wrap flex-row justify-around gap-4 space-y-2 overflow-visible items-center">
                {content}
            </CardBody>
        </Card>
    );
}
