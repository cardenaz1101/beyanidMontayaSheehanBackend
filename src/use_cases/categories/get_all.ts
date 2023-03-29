import { FindOptionsOrderValue } from "typeorm";
import { Category } from "../../entities/Categories";

const build = () => {
  const execute = async (sortOrderType: string) => {
    try {
      const categories = await Category.find({
        relations: ["documentTypes"],
        order: {
          sort: sortOrderType as FindOptionsOrderValue,
          documentTypes: {
            sort: sortOrderType as FindOptionsOrderValue
          }
        },
      });
      return categories;
    } catch (error) {
      throw error;
    }
  };

  return execute;
};

export { build };
