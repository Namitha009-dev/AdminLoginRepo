import { Skills } from './skills';

export class Associates{
    associateId:number;
    associateName: string;
    associateEmail: string;
    associateMobileNo: string;
    message:string;
    skills: Skills[]=[];
    skillname:string;
}