// src/hooks/use-api.ts
import { useState, useCallback, useMemo } from 'react'; 
import api from '@/lib/axios';
import { toast } from 'sonner';

export const useApi = () => {
  const [isLoading, setIsLoading] = useState(false);

  const request = useCallback(async (method: string, url: string, data: any = null) => {
    setIsLoading(true);
    try {
      let payload = data;
      if (data && !(data instanceof FormData) && method !== 'GET') {
        const formData = new FormData();
        Object.keys(data).forEach(key => formData.append(key, data[key]));
        payload = formData;
      }

      const response = await api({
        method: method.toUpperCase(),
        url,
        data: payload,
      });

      return response.data;
    } catch (error: any) {
      const message = error.response?.data?.message || "An error occurred";
      toast.error(message); 
      throw error;
    } finally {
      setIsLoading(false);
    }
  }, []);

  return useMemo(() => ({
    get: (url: string) => request('GET', url),
    post: (url: string, data: any) => request('POST', url, data),
    put: (url: string, data: any) => request('PUT', url, data),
    del: (url: string) => request('DELETE', url),
    isLoading
  }), [request, isLoading]); 
};