import React from 'react'
import { Button, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material'
import { categories } from '../../constants/data'
import styled from '@emotion/styled'
import { Link, useSearchParams } from 'react-router-dom'

const StyledTable = styled(Table)`
    border : 1px solid rgba(224,224,224,1);
    align-items: center;
    border-collapse: separate;
    border-spacing: 10px;
`;

const StyledButton = styled(Button)`
    margin : 20px;
    width : 85%;
    background : green;
    color : #fff;
`;

const StyledCell = styled(TableCell)`
    background:  #8585ad;
    padding: 10px;
    border: 1px solid #208000;
    border-radius: 10px;
    box-shadow: 1px 1.2px 0.8px;

    & > a {
        text-decoration: none;
        font-size: 16px;
        font-weight: 600;
    }
`;

const Categories = () => {
    const [searchParams] = useSearchParams();
    const category = searchParams.get('category');

    return (
        <>
            <Link to={`/create?category=${category || ''}`} >
                <StyledButton variant="contained">Create Blog</StyledButton>
            </Link>

            <StyledTable>
                <TableHead>
                    <TableRow>
                        <StyledCell align="center">
                            <Link to='/'>
                                All Categories
                            </Link>
                        </StyledCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        categories.map(category => (
                            <TableRow key={category.id} >
                                <StyledCell align="center">
                                    <Link to={`/?category=${category.type}`} >
                                        {category.type}
                                    </Link>
                                </StyledCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </StyledTable>
        </>
    )
}

export default Categories
