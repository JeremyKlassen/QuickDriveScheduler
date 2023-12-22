export interface User {
  name: string;
  coordinates: string;
  role: string;
  isChecked: boolean;
}

export interface ClientDrive {
  user1: User;
  user2: User;
  distance: number;
}

export interface Trip {
  driver: User;
  pickups: ClientDrive[];
}
