import { Column, DataType, Model, Table } from 'sequelize-typescript';

interface UserCreationAttrs {
  login: string;
  password: string;
  age: number;
}

@Table({ tableName: 'users' })
export class User extends Model<User, UserCreationAttrs> {
  @Column({ type: DataType.STRING, unique: true, primaryKey: true })
  id: string;

  @Column({ type: DataType.STRING, unique: true, allowNull: true })
  login: string;

  @Column({ type: DataType.STRING, allowNull: true })
  password: string;

  @Column({ type: DataType.NUMBER, allowNull: true })
  age: number;

  @Column({ type: DataType.BOOLEAN, allowNull: true })
  isDeleted: boolean;
}
