import { TableCell, TableRow, tableCellClasses } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14
  }
}));

// eslint-disable-next-line no-unused-vars
export const StyledTableRow = styled(TableRow)(({ theme }) => ({
  // hide last border
  '&:last-of-type td, &:last-of-type th': {
    border: 0
  }
}));
