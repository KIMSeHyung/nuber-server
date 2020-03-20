import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from "typeorm";

@Entity()
class Place extends BaseEntity {
  @PrimaryGeneratedColumn() 
  id: number;

  @Column({ type: "text" })
  name: String;

  @Column({ type: "double precision", default: 0 })
  lat: number;

  @Column({ type: "double precision", default: 0 })
  lng: number;

  @Column({ type: "text" })
  address: String;

  @Column({ type: "boolean", default: false })
  isFav: boolean;

  @CreateDateColumn() createdAt;
  @UpdateDateColumn() updatedAt;
}

export default Place;
