export type Patient = {
  id: string;
  cpf: string;
  fullName: string;
  birthday: Date;
  sex: 'MALE' | 'FEMALE';
  createdAt?: Date;
  updatedAt?: Date;
};
