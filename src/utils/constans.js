export const boxShadow = {
  boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.25)',
};

export const containerFluid = {
  paddingRight: '15px',
  paddingLeft: '15px',
  marginRight: 'auto',
  marginLeft: 'auto',
  width: '100%',
};

export const container = {
  ...containerFluid,
  '@media (min-width: 768px)': {
    maxWidth: '570px',
  },
  '@media (min-width: 992px)': {
    maxWidth: '570px',
  },
  '@media (min-width: 1200px)': {
    maxWidth: '570px',
  },
};
