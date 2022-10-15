import styled from 'styled-components';
import { FlexBox } from '../../Atoms/Flexbox';

export const SearchContainer = styled(FlexBox)`
  margin-bottom: ${(props) => props.theme.spacing.xs};

  @media(max-width: ${(props) => props.theme.breakpoints.sm}) {
    flex-direction: column;
    align-items: flex-start;
  }
`
