import { v4 } from "uuid"

export class GenerateId {
    generateID = ():string => {
        return v4()
    }
}