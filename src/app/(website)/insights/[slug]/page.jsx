import { client } from '@/sanity/client';
import React from 'react';
import { notFound } from 'next/navigation';
import { Box, Container, Paper, Typography, Chip } from '@mui/material';
import Image from 'next/image';
import { PortableText } from '@portabletext/react';
import DownloadButton from './DownloadButton';

export const getArticleBySlug = (slug) => `
  *[_type == "article" && slug.current == "${slug}"][0]
`;

const downloadFileUrl = (
  slug
) => `*[_type == 'article' && slug.current == "${slug}"][0]{
  "pdfFile": pdfFile.asset->url
}`;

export default async function Article({ params }) {
  const slug = params.slug;
  const article = await client.fetch(getArticleBySlug(slug));

  if (!article) {
    notFound();
  }

  const link = await client.fetch(downloadFileUrl(slug));

  return (
    <Box component="main">
      <Container maxWidth="lg">
        <Paper
          elevation={0}
          sx={{
            p: { xs: 3, md: 1 },
            borderRadius: 2,
            bgcolor: 'background.paper',
            mb: 4
          }}
        >
          <Box sx={{ mb: 4 }}>
            <Typography
              variant="h1"
              //   component="h1"
              gutterBottom
              //   sx={{ fontWeight: 700 }}
              align="center"
            >
              {article.title}
            </Typography>

            <Box sx={{ display: 'flex', gap: 2, mb: 3, alignItems: 'center' }}>
              <Typography variant="body2" color="text.secondary">
                By {article.author}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {new Date(article.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </Typography>
              <Chip
                label={article.category}
                size="small"
                sx={{ bgcolor: 'primary.light', color: 'primary.contrastText' }}
              />
            </Box>
          </Box>

          {article.coverImage && (
            <Box
              sx={{
                position: 'relative',
                height: { xs: 240, md: 400 },
                width: '100%',
                mb: 4,
                borderRadius: 2,
                overflow: 'hidden'
              }}
            >
              <Image
                src={article.coverImage || '/placeholder.svg'}
                alt={article.title}
                fill
                style={{ objectFit: 'cover' }}
                priority
              />
            </Box>
          )}

          <PortableText value={article.content} />

          {link && article.pdfFile && (
            <DownloadButton fileUrl={link} fileName="document.pdf" />
          )}
        </Paper>
      </Container>
    </Box>
  );
}
