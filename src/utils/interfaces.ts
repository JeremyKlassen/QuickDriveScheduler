export interface User {
  name: string;
  coordinates: string;
  role: "client" | "driver" | "location";
  isChecked: boolean;
}

export interface ClientDrive {
  user1: User & { role: "client" | "driver" };
  user2: User & { role: "client" | "driver" };
  distance: number;
}

export interface Trip {
  driver: User;
  pickups: ClientDrive[];
}
