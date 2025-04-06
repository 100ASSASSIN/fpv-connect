import { api } from '../api';

interface RegisterPayload {
  username: string;
  email: string;
  password: string;
}

export const registerUser = async (payload: RegisterPayload) => {
  return api('/main/users/v2/', {
    method: 'POST',
    body: payload,
  });
};
