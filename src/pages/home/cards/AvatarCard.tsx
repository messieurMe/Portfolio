import {Card, CardBody, CardHeader} from "@heroui/react";
import {Divider} from "@heroui/divider";
import {Image} from "@heroui/image";
// @ts-ignore
import myImage from "../../../resources/assets/img.webp"

export default function AvatarCard({className}) {

    return (
        <Card className={className + " px-4 bg-gray-800/40"} isBlurred={false}>
            <CardHeader className="pb-0 pt-6 flex-col items-center">
                <p className="uppercase font-bold">Avatar</p>
                <Divider/>
            </CardHeader>
            <CardBody className="overflow-visible items-center">
                <Image isBlurred={true} alt="My avatar" src={myImage} className="object-cover rounded-xl"></Image>
            </CardBody>
        </Card>
    )
        ;
}
