// lib/api.ts
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://127.0.0.1:8000';

type RequestMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

interface ApiOptions {
  method?: RequestMethod;
  headers?: HeadersInit;
  body?: unknown;
  params?: Record<string, string | number>;
}

export async function api<T>(endpoint: string, options: ApiOptions = {}): Promise<T> {
  const { method = 'GET', headers = {}, body, params } = options;

  const query = params
    ? '?' + new URLSearchParams(params as Record<string, string>).toString()
    : '';

  const res = await fetch(`${API_BASE_URL}${endpoint}${query}`, {
    method,
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
    body: body ? JSON.stringify(body) : undefined,
  });

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.detail || 'API Error');
  }

  return res.json();
}
