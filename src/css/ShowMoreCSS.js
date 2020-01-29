import styled from '@emotion/styled';

const styles = {
  background: styled.div({
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: '1'
  }),

  modalContainer: styled.div({
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '50%',
    maxWidth: '600px',
    height: '75%',
    backgroundColor: 'rgba(255, 255, 255, 1)',
    boxShadow: '0 0 40px black',
    padding: '40px'
  }),

  tabContainer: styled.div({
    display: 'flex',
    position: 'relative',
    width: '100%',
    borderBottom: '1px solid #E5E5E5'
  }),

  tab: styled.div({
    boxSizing: 'border-box',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '150px',
    height: '50px',
    padding: '10px',
    borderTop: '1px solid rgb(229, 229, 229)',
    borderLeft: '1px solid rgb(229, 229, 229)',
    borderRight: '1px solid rgb(229, 229, 229)',
    backgroundColor: 'rgb(249, 249, 249)',
    color: 'rgb(0, 129, 113)',
    fontSize: '14px',
    cursor: 'pointer'
  }),

  activeTab: {
    position: 'relative',
    top: '1px',
    borderTop: '3px solid rgb(0, 129, 113)',
    borderBottom: '1px solid white',
    backgroundColor: 'white',
    color: 'black',
    fontWeight: 'bold',
    margin: '0',
    cursor: 'pointer',
    '&:hover': {
      color: 'rgb(0, 129, 113)'
    }
  }
};

export default styles;