import {RowDataPacket} from 'mysql2';
import {User} from './User';
interface Cat {
  // TODO: create a cat interface
  cat_id: number;
  cat_name: string;
  owner: User | number;
  weight: number;
  filename: string;
  birthdate: Date;
  lat: number;
  lng: number;
}

interface GetCat extends RowDataPacket, Cat {
}

// TODO: create PostCat interface or type. Same as cat but without id
export type PostCat = Omit<Cat, 'cat_id'>;

// TODO: create PutCat interface or type. Sameas PostCat but properties are optional
export type PutCat = Partial<PostCat>;

export {Cat, GetCat};
