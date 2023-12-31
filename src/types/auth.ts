export type User = {
  id: number;
  username: string;
};

export type UseAuthReturn = {
  loggedIn: () => boolean;
  login: (username: string, password: string) => Promise<void>;
  register: (username: string, password: string) => Promise<void>;
  logout: () => void;
};

export type AuthState = {
  token: string | null;
};
