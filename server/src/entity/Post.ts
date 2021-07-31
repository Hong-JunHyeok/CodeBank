import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  RelationId,
  JoinColumn,
  BaseEntity,
} from "typeorm";
import { User } from "./User";

@Entity()
export class Post extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  post_id: string;

  @Column({ type: "varchar", length: 100 })
  title: string;

  @Column({ type: "text" })
  content: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @RelationId((post: Post) => post.user)
  userId!: string | null;

  @JoinColumn({ name: "fk_user_id" })
  @ManyToOne((type) => User, (user) => user.user_id, {
    onDelete: "CASCADE",
  })
  user!: User;
}
