import styled from 'styled-components';
import { Text, ImpactText } from '../text';

const Music = styled.div`
  line-height: 1.5;
  letter-spacing: 0.5px;
  padding: 5rem 3rem;


  ${(p) => p.theme.mediaMin.md`
  `}
`;

export default () => (
  <Music>
      {/* NO TITLES. looks dumb. Highlight scrolled-to section in header instead */}
    
  </Music>
);
