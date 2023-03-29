import { DocumentType } from "../../entities/Document_types";
import { DocumentTypeUser } from "../../entities/Documents_types_users";
import { NotFound } from "http-errors";
enum SortOrderType {
	Asc = "ASC",
	Desc = "DESC"
} 

const build = () => {
  const execute = async (
    id: string,
    usersId: string,
    sortOrderType: SortOrderType 
  ) => {
    try {
      
      const [documentType, documentTypeUser] = await Promise.all([
        DocumentType.getRepository()
          .createQueryBuilder("document_types")
          .where("document_types.id = :id", { id })
          .leftJoinAndSelect("document_types.documents", "documents")
          .orderBy("documents.sort", sortOrderType )
          .getMany(),
        DocumentTypeUser.getRepository()
          .createQueryBuilder("documents_types_users")
          .where(
            "documents_types_users.usersId = :usersId and documents_types_users.documentTypesId = :id",
            { usersId, id }
          )
          .getOne(),
      ]);

      if (!documentType) throw new NotFound("document type does not exist");

      const purchased = documentTypeUser ? true : false;

      return {
        documentType,
        purchased,
      };
    } catch (error) {
      throw error;
    }
  };

  return execute;
};

export { build };
