import { UUIDV4 } from 'sequelize';
import { Column, DataType, Model, Table } from 'sequelize-typescript';

interface UserCreationAttrs {
  login: string;
  password: string;
  age: number;
}

@Table({ tableName: 'users' })
export class User extends Model<User, UserCreationAttrs> {
  @Column({ type: DataType.UUID, defaultValue: UUIDV4, primaryKey: true })
  id: string;

  @Column({ type: DataType.STRING, unique: true })
  login: string;

  @Column({ type: DataType.STRING })
  password: string;

  @Column({ type: DataType.INTEGER })
  age: number;

  @Column({ type: DataType.BOOLEAN, defaultValue: false })
  isDeleted: boolean;
}
