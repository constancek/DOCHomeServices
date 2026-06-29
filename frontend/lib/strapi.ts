/**
 * Fetch data from Strapi API
 * @param {string} endpoint - API endpoint (e.g., 'pages', 'services')
 * @param {object} options - Additional fetch options
 * @returns {Promise<any>}
 */
export async function fetchStrapiData(endpoint: string, options: any = {}) {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:1337';
  const token = process.env.NEXT_PUBLIC_API_TOKEN;

  const headers: any = {
    'Content-Type': 'application/json',
    ...options.headers,
  };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  const url = `${baseUrl}/api/${endpoint}`;

  try {
    const res = await fetch(url, {
      ...options,
      headers,
    });

    if (!res.ok) {
      throw new Error(`Strapi API error: ${res.status} ${res.statusText}`);
    }

    return await res.json();
  } catch (error) {
    console.error(`Error fetching from Strapi endpoint ${endpoint}:`, error);
    throw error;
  }
}

/**
 * Get image URL from Strapi
 * @param {object} image - Image object from Strapi
 * @returns {string}
 */
export function getStrapiImageUrl(image: any) {
  if (!image) return '';
  
  const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:1337';
  
  // If it's already a full URL, return as-is
  if (image.url?.startsWith('http')) {
    return image.url;
  }
  
  // Construct full URL
  return `${baseUrl}${image.url}`;
}
