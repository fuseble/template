import { Box } from 'native-base';
import React, { FC } from 'react';

interface Props {
  children: React.ReactNode;
}

const CSafeAreaView: FC<Props> = ({ children }) => {
  return (
    <Box width="100%" height="100%">
      {children}
    </Box>
  );
};

export default CSafeAreaView;
