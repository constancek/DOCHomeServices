# DOC Home Services - Strapi + Next.js + Vercel Setup

## Project Structure

```
DOCHomeServices/
├── frontend/                 # Next.js frontend
│   ├── app/
│   ├── components/
│   ├── lib/
│   │   └── strapi.ts         # Strapi API utilities
│   ├── package.json
│   └── .env.local
├── backend/                  # Strapi CMS
│   ├── config/
│   ├── src/
│   ├── package.json
│   ├── .env
│   └── .env.example
├── package.json             # Monorepo root
└── vercel.json
```

## Installation

### 1. Install Dependencies

```bash
# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install

# Back to root
cd ..
```

### 2. Set Up Environment Variables

**Backend (.env):**
- Already configured with SQLite for development
- For production, update to PostgreSQL in Strapi Cloud

**Frontend (.env.local):**
- `NEXT_PUBLIC_API_URL=http://localhost:1337` (development)
- `NEXT_PUBLIC_API_URL=https://your-strapi-cloud-url` (production)

## Development

### Start Both Services

```bash
# Option 1: Run both concurrently (from root)
npm run dev

# Option 2: Run separately
cd backend && npm run develop    # Terminal 1
cd frontend && npm run dev       # Terminal 2
```

Backend will be available at: `http://localhost:1337`
Frontend will be available at: `http://localhost:3000`

## Strapi Cloud Deployment

1. **Create Strapi Cloud Account**: https://cloud.strapi.io
2. **Deploy Backend**:
   ```bash
   cd backend
   strapi deploy
   ```
3. **Update Frontend .env.local**:
   - Set `NEXT_PUBLIC_API_URL` to your Strapi Cloud URL
   - Add `NEXT_PUBLIC_API_TOKEN` if using private content

## Vercel Deployment

### Frontend Only (Recommended for Static Generation)

1. **Push to GitHub**: Ensure `frontend/` contains your Next.js project
2. **Connect to Vercel**:
   - Select `frontend/` as the root directory
   - Set environment variables:
     - `NEXT_PUBLIC_API_URL`: Your Strapi Cloud URL
     - `NEXT_PUBLIC_API_TOKEN`: (if needed)
3. **Deploy**: Push to main/production branch

### Complete Monorepo Deployment

If deploying both services:

1. **Backend**: Deploy via Strapi Cloud (recommended)
2. **Frontend**: Deploy via Vercel with the root directory as `frontend/`

## Creating Content in Strapi

1. Access Strapi Admin: `http://localhost:1337/admin`
2. Create content types (e.g., Services, Testimonials, Pages)
3. Add content items
4. Publish content

## Fetching Data from Frontend

Use the `fetchStrapiData` utility in `lib/strapi.ts`:

```typescript
import { fetchStrapiData, getStrapiImageUrl } from '@/lib/strapi';

// In your components
async function getServices() {
  const data = await fetchStrapiData('services?populate=*');
  return data.data;
}
```

## Next Steps

1. [ ] Set up content types in Strapi
2. [ ] Create API routes in Next.js to fetch Strapi content
3. [ ] Update components to use dynamic data
4. [ ] Set up Strapi Cloud account
5. [ ] Deploy backend to Strapi Cloud
6. [ ] Configure Vercel deployment
7. [ ] Set up GitHub Actions for CI/CD

## Useful Links

- [Strapi Documentation](https://docs.strapi.io)
- [Strapi Cloud](https://cloud.strapi.io)
- [Next.js Documentation](https://nextjs.org/docs)
- [Vercel Documentation](https://vercel.com/docs)
