import {Card, CardBody, CardHeader} from "@heroui/react";
import {Divider} from "@heroui/divider";
import {Accordion, AccordionItem} from "@heroui/accordion";

export default function EducationCard({className}) {

    return (
        <Card className={className + " px-4 bg-gray-800/40"} isBlurred={false}>
            <CardHeader className="pb-0 pt-6 flex-col items-center">
                <p className="uppercase font-bold">Education</p>
                <Divider/>
            </CardHeader>
            <CardBody className="overflow-visible items-center">

                <Accordion selectionMode="multiple">
                    <AccordionItem
                        key="bachelor"
                        title="Bachelor's degree"
                        subtitle="Applied mathematics and informatics"
                    >
                        <div className="ps-4">ITMO University, 2018-2023</div>
                    </AccordionItem>
                    <AccordionItem
                        key="master"
                        title="Master's degree"
                        subtitle="Informatics and AI"
                    >
                        <div className="ps-4">ITMO University, 2023-2025</div>
                    </AccordionItem>
                </Accordion>
            </CardBody>
        </Card>
    );
}
