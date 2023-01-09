import { resolve, join } from "node:path";
import process from "node:process";
import { getCurrentDir, renderDir } from "./utils.mjs";
import fs from "fs-extra";

const __dirname = getCurrentDir();

const componentDir = resolve(__dirname, "../src/components");

const argv = process.argv;
const compName = argv.at(2);

function renderComponent(compName) {
    if (compName === undefined || compName === null) {
        console.error("\x1B[31m%s\x1B[0m", "请输入组件名称");
        process.exit();
    } else {
        const dest = join(componentDir, compName);
        renderDir(dest).then(() => {
            fs.copy(join(__dirname, "template/component"), dest)
                .then(() => {
                    console.log("success!");
                })
                .catch(e => {
                    throw e;
                });
        });
    }
}

renderComponent(compName);
