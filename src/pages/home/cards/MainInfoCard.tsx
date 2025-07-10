import {Card, CardBody, CardHeader} from "@heroui/react";
import {Divider} from "@heroui/divider";
import {Table, TableBody, TableCell, TableColumn, TableHeader, TableRow} from "@heroui/table";
import {Link} from "@heroui/link";

export default function MainInfoCard({className}) {

    const rowsData = [
        {"key": "Name", "value": "Kuliyev Aslan", "isLink": false},
        {"key": "Age", "value": "24", "isLink": false},
        {"key": "Citizenship", "value": "Turkmenistan", "isLink": false},
        {"key": "Mail", "value": "as.kuliyev@outlook.com", "isLink": true, "link": "mailto:as.kuliyev.com@outlook.com"},
        {"key": "Tg", "value": "@messieurMe", "isLink": true, "link": "https://t.me/messieurme"},
    ]

    return (
        <Card className={className + " px-4 bg-gray-800/40"} isBlurred={false}>
            <CardHeader className="pb-0 pt-6 flex-col items-center">
                <p className="uppercase font-bold">In short</p>
                <Divider/>
            </CardHeader>
            <CardBody className="overflow-visible py-2">
                <Table hideHeader removeWrapper selectionMode="none" aria-label="main-info" className="bg-transparent">
                    <TableHeader>
                        <TableColumn key="key">1</TableColumn>
                        <TableColumn key="value" align="end">2</TableColumn>
                    </TableHeader>
                    <TableBody items={rowsData}>
                        {(item) => (
                            <TableRow key={item.key}>
                                <TableCell className="text-xs lg:text-xl">{item.key}</TableCell>
                                {<TableCell className="text-xs lg:text-xl">{
                                    item.isLink
                                        ? <Link
                                            href={item.link}
                                            underline="hover"
                                            isExternal
                                            showAnchorIcon
                                            className="text-xs lg:text-xl">{item.value}</Link>
                                        : item.value}
                                </TableCell>}
                            </TableRow>
                        )}
                    </TableBody>

                </Table>
            </CardBody>
        </Card>
    )
        ;
}
