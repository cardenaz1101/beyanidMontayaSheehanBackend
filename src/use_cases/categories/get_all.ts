
import { Category } from "../../entities/Categories";

const build = () => {
    const execute = async() => {
        try {
            const categories = await Category.find({ relations: ["documentTypes"] });
            return categories;
        } catch (error) {
            throw error;
        }
    }

    return execute;
}

export {build}