import {Card, CardBody, CardHeader} from "@heroui/react";
import {Divider} from "@heroui/divider";
import {Accordion, AccordionItem} from "@heroui/accordion";

export default function WorkExperienceCard({className}) {

    return (
        <Card className={className + " px-4 bg-gray-800/40"} isBlurred={false}>
            <CardHeader className="pb-0 pt-6 flex-col items-center">
                <p className="uppercase font-bold">Work experience: 3 years</p>
                <Divider/>
            </CardHeader>
            <CardBody className="overflow-visible items-center">

                <Accordion selectionMode="multiple">
                    <AccordionItem
                        key="work1"
                        title="Android-engineer"
                    >
                        <div className="ps-4">
                            T-Bank, 2022-now
                        </div>
                    </AccordionItem>
                </Accordion>
            </CardBody>
        </Card>
    );
}
