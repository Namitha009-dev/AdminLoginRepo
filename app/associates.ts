import { Skills } from './skills';

export class Associates {
    associateId : number;
    associateName : string;
    associateEmail : string;
    associateMobileNo : string;
    statusCode: number;
    skills: Array<Skills>=[];
    message:string;
}