import { Entity } from './entity';

export interface IPersonProps {
    name?: string | null;
    companyName?: string | null;
    fantasyName?: string | null;
    type: 'individual' | 'company';
    dateOfBirth?: string;
    gender?: 'male' | 'female' | 'other';
    taxDocument: string;
    email: string;
    cellPhone?: string;
    streetAddress?: string;
    city?: string;
    state?: string;
    zipCode?: string;
    district?: string;
}

export class Person extends Entity<IPersonProps> {
    constructor(props: IPersonProps, id?: number) {
        super(props, id);
    }

    get name(): string | null | undefined {
        return this.props.name;
    }

    get companyName(): string | null | undefined {
        return this.props.companyName;
    }

    get fantasyName(): string | null | undefined {
        return this.props.fantasyName;
    }

    get type(): 'individual' | 'company' | undefined {
        return this.props.type;
    }

    get email(): string | undefined {
        return this.props.email;
    }
}
