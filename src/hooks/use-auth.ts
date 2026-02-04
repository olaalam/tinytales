// src/hooks/use-auth.ts
import { useApi } from './use-api';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import Cookies from 'js-cookie';

export const useAuth = () => {
  const { post, isLoading } = useApi();
  const router = useRouter();

  const register = async (values: any) => {
    try {
      const data = await post('/auth/register', values);
      
      if (data.data?.token) {
        localStorage.setItem('token', data.data.token);
        localStorage.setItem('name', data.data.name);
        Cookies.set('token', data.data.token, { expires: 7 });
      }
      
      toast.success(data.message || "Registration successful");
      router.push('/verify');
    } catch (err: any) {

      const errorMessage = err.response?.data?.message || "An error occurred during registration";
      
      if (Array.isArray(err.response?.data?.errors)) {
          toast.error(err.response.data.errors[0]);
      } else {
          toast.error(errorMessage);
      }
    }
  };

  const login = async (values: any) => {
    try {
      const data = await post('/auth/login', values);
      
      if (data.data?.token) {
        localStorage.setItem('token', data.data.token);
        localStorage.setItem('name', data.data.name);
        Cookies.set('token', data.data.token, { expires: 7 });
      }
      
      toast.success(data.message || "Login successful");
      router.push('/dashboard');
    } catch (err: any) {
      const errorMessage = err.response?.data?.message || "An error occurred during login";
      toast.error(errorMessage);
    }
  };

  return { register, login, isLoading };
};