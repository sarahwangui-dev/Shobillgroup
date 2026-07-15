'use client';

import React from 'react';
import { Button } from '@mui/material';
import { icons } from '@/common/utils/icons';

const Download = icons.FileDownloadIcon;

export default function DownloadButton({ fileUrl, fileName = 'document.pdf' }) {
  const handleDownload = () => {
    if (!fileUrl) return;

    // Create download URL with the dl parameter
    const downloadUrl = `${fileUrl}?dl=`;

    // Create a temporary anchor and trigger download
    const anchor = document.createElement('a');
    anchor.href = downloadUrl;
    anchor.download = fileName;
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
  };

  return (
    <Button
      variant="contained"
      startIcon={<Download />}
      onClick={handleDownload}
      sx={{ mt: 2 }}
    >
      Download Attachment
    </Button>
  );
}
