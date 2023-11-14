export interface User {
  id: number;
  email?: string;
  password?: string;
  name?: string;
}

export interface Invoice {
  id: number;
  amount?: number;
  dueDate?: string;
  details?: string;
  userId?: number;
}
