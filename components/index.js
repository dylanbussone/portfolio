import styled from 'styled-components';
import { COLORS, FONT_SIZES } from '../theme';

const Text = styled.span`
  font-size: ${FONT_SIZES.m};
  color: ${COLORS.text};
`;

const BoldText = styled(Text)`
  color: ${COLORS.boldText};
  font-weight: bold;
`;

export { Text, BoldText };
