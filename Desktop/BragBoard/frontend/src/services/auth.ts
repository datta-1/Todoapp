import api from './api';

export interface UserRegistration {
  email: string;
  username: string;
  first_name: string;
  last_name: string;
  department?: string;
  job_title?: string;
  password: string;
}

export interface UserLogin {
  email: string;
  password: string;
}

export interface AuthResponse {
  access_token: string;
  refresh_token: string;
  token_type: string;
}

export const authService = {
  register: async (userData: UserRegistration): Promise<any> => {
    const response = await api.post('/auth/register', userData);
    return response.data;
  },

  login: async (credentials: UserLogin): Promise<AuthResponse> => {
    const response = await api.post('/auth/login', credentials);
    const { access_token, refresh_token } = response.data;
    
    // Store tokens in localStorage
    localStorage.setItem('access_token', access_token);
    localStorage.setItem('refresh_token', refresh_token);
    
    return response.data;
  },

  logout: () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
  },

  isAuthenticated: (): boolean => {
    return !!localStorage.getItem('access_token');
  }
};
