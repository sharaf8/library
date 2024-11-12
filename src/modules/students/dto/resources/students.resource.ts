import { IsString } from "class-validator";

export class StudentsResource{
  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsString()
  class: string;

  @IsString()
  email: string;
}
