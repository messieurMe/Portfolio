"use client";

import {motion, AnimatePresence} from "framer-motion";
import {Chip} from "@heroui/chip";
import {Tab, Tabs} from "@heroui/tabs";

export default function WalletProfile(color1, color2, color3, [hasColors, setHasColors]) {
    const options = ["Without colors", "With colors"].map((v) => ({"key": v}))

    return (
        <div className="mb-4 overflow-hidden flex items-center justify-center flex-col">
            <Tabs
                color="primary"
                variant="bordered"
                className="text-xl font-bold"
                items={options}
                onSelectionChange={(key) => {
                    (setHasColors(options[1].key == key))
                }
                }
            >
                {
                    (option) => <Tab title={option.key}/>
                }
            </Tabs>

            <AnimatePresence>
                {hasColors && (
                    <motion.div
                        initial={{opacity: 0, height: 0}}
                        animate={{opacity: 1, height: "auto"}}
                        exit={{opacity: 0, height: 0}}
                        transition={{duration: 0.3}}
                    >
                        <div
                            className="p-4 flex items-center justify-between transition-colors duration-200">
                            <Chip size="lg" className={color1}>Proficient</Chip>
                            <Chip size="lg" className={color2 + " ms-4 me-4"}>Competent</Chip>
                            <Chip size="lg" className={color3}>Still learning</Chip>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
