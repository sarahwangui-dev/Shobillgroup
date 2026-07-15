'use client';
import React, { Fragment } from 'react';
import MainCard from '../../ui-components/cards/MainCard';
import {
  Alert,
  Box,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography
} from '@mui/material';
import { StyledTableCell, StyledTableRow } from '../../ui-components/Table';
import PropertyOwnerDialog from './PropertyOwnerDialog';
import { useGetPropertyOwnersQuery } from '@/common/store/rootApi';
import { useRouter } from 'next/navigation';
import ViewPropertyOwnerDetails from './ViewPropertyOwnerDetails';

export default function PropertyOwnerTable({ minimal }) {
  const {
    data: propertyOwners,
    isLoading,
    isFetching,
    isError,
    error
  } = useGetPropertyOwnersQuery();
  const router = useRouter();

  const displayedOwners = minimal
    ? propertyOwners
    : propertyOwners?.slice(0, 5);
  return (
    <MainCard
      title={
        <>
          {/* <HomeRepairServiceIcon color="primary" fontSize="small" /> */}
          <Typography variant="h3" color="primary">
            Property Owners
          </Typography>
        </>
      }
      content={true}
      border={true}
      secondary={<PropertyOwnerDialog />}
    >
      <TableContainer>
        {isFetching ? (
          <Table>
            <TableBody>
              <TableRow>
                <TableCell colSpan={3}>
                  <Alert severity="info">Fetching owner&apos;s list</Alert>
                </TableCell>
              </TableRow>
              {/* Skeleton */}
            </TableBody>
          </Table>
        ) : (
          <Table>
            {propertyOwners && (
              <Fragment>
                <TableHead>
                  <TableRow>
                    <StyledTableCell>#</StyledTableCell>
                    <StyledTableCell>Owner Name</StyledTableCell>
                    <StyledTableCell align="right">Action</StyledTableCell>
                  </TableRow>
                </TableHead>

                {isLoading && (
                  <TableBody>
                    <TableRow>
                      <TableCell colSpan={2}>
                        <Alert severity="info">
                          Owner&apos;s list is loading...
                        </Alert>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                )}

                <TableBody>
                  {propertyOwners &&
                    displayedOwners.map((owner, index) => (
                      <StyledTableRow hover key={index}>
                        <StyledTableCell>{index + 1}</StyledTableCell>
                        <StyledTableCell>{owner.name}</StyledTableCell>
                        <StyledTableCell align="right">
                          <ViewPropertyOwnerDetails owner={owner} />
                        </StyledTableCell>
                      </StyledTableRow>
                    ))}
                </TableBody>
              </Fragment>
            )}
          </Table>
        )}

        {isError && (
          <Table>
            <TableBody>
              <TableRow>
                <TableCell colSpan={2}>
                  <Alert severity="error">
                    {`Status code: ${400} Message: ${error?.data}`}
                  </Alert>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        )}
      </TableContainer>

      {minimal ? null : (
        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button
            variant="outlined"
            color="secondary"
            onClick={() => router.push('/admin/property-owners')}
          >
            List All Owners
          </Button>
        </Box>
      )}
    </MainCard>
  );
}
