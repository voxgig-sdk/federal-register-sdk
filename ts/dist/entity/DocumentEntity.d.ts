import { FederalRegisterEntityBase } from '../FederalRegisterEntityBase';
import type { FederalRegisterSDK } from '../FederalRegisterSDK';
import type { Control } from '../types';
import type { Document, DocumentLoadMatch, DocumentListMatch } from '../FederalRegisterTypes';
declare class DocumentEntity extends FederalRegisterEntityBase<Document> {
    constructor(client: FederalRegisterSDK, entopts: any);
    make(this: DocumentEntity): DocumentEntity;
    load(this: any, reqmatch?: DocumentLoadMatch, ctrl?: Control): Promise<DocumentEntity>;
    list(this: any, reqmatch?: DocumentListMatch, ctrl?: Control): Promise<DocumentEntity[]>;
}
export { DocumentEntity };
