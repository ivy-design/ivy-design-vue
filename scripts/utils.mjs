import { existsSync, mkdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname } from "node:path";

export const getCurrentDir = () => {
    const filename = fileURLToPath(import.meta.url);
    console.log(dirname(filename), 123, import.meta.url);
    return dirname(filename);
};

export const isExists = dir => {
    return new Promise((resolve, reject) => {
        try {
            resolve(existsSync(dir));
        } catch (error) {
            reject(error);
        }
    });
};

const mkdir = dir => {
    return new Promise((resolve, reject) => {
        try {
            resolve(mkdirSync(dir));
        } catch (error) {
            reject(error);
        }
    });
};

export const renderDir = async dir => {
    const flag = await isExists(dir);
    if (!flag) {
        const createDir = await mkdir(dir);
        Promise.resolve(createDir);
    } else {
        Promise.reject(`${dir}目录已存在`);
    }
};
