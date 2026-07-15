'use server';
import { unstable_noStore as noStore } from 'next/cache';
import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';
import { jwtDecode } from 'jwt-decode';

const BASE_URL = `${process.env.NEXT_PUBLIC_API_URL}`;

export async function signUpUser(data) {
  noStore();
  try {
    const response = await fetch(`${BASE_URL}/users/register/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    const res = await response.json();
    if (!response.ok) {
      return { error: res, details: null };
    }
    return { details: res, error: null };
  } catch (err) {
    return { error: `An unexpected error occurred ${err}`, details: null };
  }
}

export async function loginUser(data) {
  noStore();
  try {
    const response = await fetch(`${BASE_URL}/users/login/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    const res = await response.json();
    if (!response.ok) {
      return { error: res, details: null };
    }

    return { details: res, error: null };
  } catch (err) {
    console.error('Failed to login', err);
  }
}

export async function navigate(data) {
  redirect(data);
}

export async function setAccessToken(token) {
  cookies().set({
    name: 'shobill-access',
    value: token,
    httpOnly: true,
    secure: process.env.NODE_ENV !== 'development'
  });

  return;
}

export async function fetchToken() {
  const cookieStore = cookies();
  const token = cookieStore.get('shobill-access');
  return token;
}

export async function logout() {
  if (cookies().get('shobill-access')) {
    // endpoint
    cookies().delete('shobill-access');
    redirect('/login');
  }
}

export async function verifyAccessToken(token) {
  if (!token) return false;

  const decoded = jwtDecode(token);
  return decoded.exp > Date.now() / 1000;
}
