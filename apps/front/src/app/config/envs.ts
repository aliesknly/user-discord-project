
import 'dotenv/config';
import { get } from 'env-var';

export const envs = {
  // Database
  API_URL: get('API_URL').asString(),
  API_PORT: get('API_PORT').asPortNumber(),
};
