import { User } from '@app/shared/models/user.interface';

export class RoleValidator {
    isSuscruptor(user:User):boolean{
        return user.role ==='SUSCRIPTOR';
    }
    isEditor(user:User):boolean{
        return user.role ==='EDITOR';
    }
    isAdmin(user:User):boolean{
        return user.role ==='ADMIN';
    }
}