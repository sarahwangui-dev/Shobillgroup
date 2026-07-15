'use client';
import React, { Fragment, useContext } from 'react';
import MainCard from '../ui-components/cards/MainCard';
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
import { icons } from '@/common/utils/icons';
import { StyledTableCell, StyledTableRow } from '../ui-components/Table';
import AddProperty from './AddProperties';
import { PropertyContext } from '@/app/_providers/PropertyContext';
import { useRouter } from 'next/navigation';
import PropertyDialog from '../ui-components/dialog/PropertyDialog';

const { HomeWorkIcon } = icons;

export default function PropertyTable({ minimal }) {
  const { properties, isError, isLoading, isFetching, error } =
    useContext(PropertyContext);

  const router = useRouter();
  return (
    <MainCard
      title={
        <>
          <HomeWorkIcon color="primary" />
          <Typography variant="h3" color="primary">
            Properties
          </Typography>
        </>
      }
      content={true}
      border={true}
      secondary={<AddProperty />}
    >
      <TableContainer>
        {isFetching ? (
          <Table>
            <TableBody>
              <TableRow>
                <TableCell colSpan={6}>
                  <Alert severity="info">Fetching properties list</Alert>
                </TableCell>
              </TableRow>
              {/* skeleton */}
            </TableBody>
          </Table>
        ) : (
          <Table>
            {properties ? (
              <Fragment>
                <TableHead>
                  <TableRow>
                    <StyledTableCell>#</StyledTableCell>
                    <StyledTableCell>Property Name</StyledTableCell>
                    <StyledTableCell>Property Size</StyledTableCell>
                    <StyledTableCell>Property Price</StyledTableCell>
                    <StyledTableCell>Property Location</StyledTableCell>
                    <StyledTableCell>Property Owner</StyledTableCell>
                    <StyledTableCell>Action</StyledTableCell>
                  </TableRow>
                </TableHead>
                {isLoading && (
                  <TableBody>
                    <TableRow>
                      <TableCell colSpan={6}>
                        <Alert severity="info">
                          Propertie&apos;s list is loading...
                        </Alert>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                )}
                <TableBody>
                  {properties &&
                    properties.map((property, index) => (
                      <StyledTableRow hover key={index}>
                        <StyledTableCell>{index + 1}</StyledTableCell>
                        <StyledTableCell>{property.name} </StyledTableCell>
                        <StyledTableCell>
                          {property.size_in_hectares}
                        </StyledTableCell>
                        <StyledTableCell>{property.price}</StyledTableCell>
                        <StyledTableCell>{property.location}</StyledTableCell>
                        <StyledTableCell>
                          {property.owned_by.name}
                        </StyledTableCell>
                        <StyledTableCell>
                          <PropertyDialog property={property} />
                        </StyledTableCell>
                      </StyledTableRow>
                    ))}
                </TableBody>
              </Fragment>
            ) : (
              <TableBody>
                <TableRow>
                  <TableCell colSpan={6}>
                    <Alert severity="error">
                      No property found based on the provided criteria
                    </Alert>
                  </TableCell>
                </TableRow>
              </TableBody>
            )}
          </Table>
        )}

        {isError && (
          <Table>
            <TableBody>
              <TableRow>
                <TableCell colSpan={6}>
                  <Alert severity="error">
                    {`Status code: ${error?.status} Message: ${error?.data?.detail}`}
                  </Alert>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        )}
      </TableContainer>

      {minimal ? (
        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button
            variant="outlined"
            color="secondary"
            onClick={() => router.push('/admin/properties')}
          >
            List All Properties
          </Button>
        </Box>
      ) : null}
    </MainCard>
  );
}
