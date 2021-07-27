import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('user')
export class User {
  @PrimaryGeneratedColumn('uuid', {
    name: 'user_idx',
  })
  user_idx!: string;

  @Column({ length: 100 })
  id: string;

  @Column()
  password: string;

  @Column()
  email: string;
}
