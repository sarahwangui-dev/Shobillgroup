'use client';
import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  CardActionArea,
  // CardMedia,
  Box,
  useTheme
} from '@mui/material';
import Link from 'next/link';

export default function InsightCard({ article }) {
  const theme = useTheme();

  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: 6
        },
        borderRadius: 2,
        border: `1px solid ${theme.palette.primary.main}`
      }}
    >
      <Link
        href={`/insights/${article.slug.current}`}
        passHref
        style={{ textDecoration: 'none', color: 'inherit' }}
      >
        <CardActionArea
          sx={{
            flexGrow: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'stretch'
          }}
        >
          {/* {article.coverImage && (
            <CardMedia
              component="img"
              height="200"
              image={article.coverImage}
              alt={article.title}
              sx={{ objectFit: 'cover' }}
            />
          )} */}
          <CardContent sx={{ flexGrow: 1, p: 3 }}>
            <Typography
              gutterBottom
              variant="h5"
              component="h2"
              sx={{
                fontWeight: 600,
                mb: 1,
                display: '-webkit-box',
                overflow: 'hidden',
                WebkitBoxOrient: 'vertical',
                WebkitLineClamp: 2
              }}
            >
              {article.title}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{
                mb: 2,
                display: '-webkit-box',
                overflow: 'hidden',
                WebkitBoxOrient: 'vertical',
                WebkitLineClamp: 3
              }}
            >
              {article.exerpt}
            </Typography>
            <Box
              sx={{
                mt: 'auto',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}
            >
              <Typography variant="body2" color="text.secondary">
                By {article.author}
              </Typography>
              <Typography variant="caption" color="text.secondary">
                {new Date(article.date).toLocaleDateString()}
              </Typography>
            </Box>
          </CardContent>
        </CardActionArea>
      </Link>
    </Card>
  );
}
